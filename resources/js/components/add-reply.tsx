import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import '../components/ck-editor.css'
import { useForm } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

type AddReplyForm = {
  answer: string;
};

export default function AddReply({ forumId, ...props }: any) {
  const [isOpen, setIsOpen] = useState(false);
  // useform
  const { data, setData, post, processing, errors, reset } = useForm<Required<AddReplyForm>>({
    answer: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("forum.my-questions.answer.store", [
      forumId, // Assuming forumId is passed as a prop
    ]), {
      onFinish: () => reset("answer"),
    });
  }

  return (
    <Card className="bg-background" {...props}>
      <CardContent>
        <div className="flex flex-row gap-3 items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpen ? (
            <form className="w-full" onSubmit={submit}>
              <div className="flex flex-col gap-4">
                <div className="border rounded-md w-full overflow-hidden">
                  <CKEditor
                    editor={ClassicEditor}
                    data={data.answer}
                    config={{
                      // The toolbar configuration
                      toolbar: [
                        "heading",
                        "|",
                        "bold",
                        "italic",
                        "link",
                        "bulletedList",
                        "numberedList",
                        "blockQuote",
                        "insertTable",
                        "mediaEmbed",
                      ],
                      placeholder: "Isi jawaban Anda di sini...",
                    }}
                    // height

                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setData("answer", data);
                    }}
                  />
                </div>

                <div className="flex flex-row gap-2 justify-end">
                  <Button variant='outline' type="button" onClick={() => setIsOpen(false)}>
                    Batalkan
                  </Button>
                  <Button
                    type="submit"
                    disabled={processing}
                  >
                    {processing ? "Mengirim..." : "Kirim Jawaban"}
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            // input
            <div className="w-full">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(true)}>
                Tambah Jawaban
              </Button>
            </div>
          )}

        </div>
      </CardContent>
    </Card >
  );
}