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

type AskQuestionForm = {
  title: string;
  question: string;
  tags?: string;
};

export default function AskQuestion() {
  const [isOpen, setIsOpen] = useState(false);
  // useform
  const { data, setData, post, processing, errors, reset } = useForm<Required<AskQuestionForm>>({
    title: "",
    question: "",
    tags: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("forum.my-questions.store"), {
      onFinish: () => reset("title", "question"),
    });
  }

  return (
    <Card className="bg-background mb-4">
      <CardContent>
        <div className="flex flex-row gap-3 items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {isOpen ? (
            <form className="w-full" onSubmit={submit}>
              <div className="flex flex-col gap-4">
                <Label className="text-sm font-medium">
                  Judul Pertanyaan
                </Label>
                <Input
                  placeholder="Eg. Apa itu React?"
                  className="w-[400px] md:w-[500px] lg:w-[600px]"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />
                <div className="border rounded-md w-full overflow-hidden">
                  <CKEditor
                    editor={ClassicEditor}
                    data={data.question}
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
                      placeholder: "Isi pertanyaan Anda di sini...",
                    }}
                    // height

                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setData("question", data);
                    }}
                  />
                </div>

                {/* input autcomplete tags */}
                <Label className="text-sm font-medium">
                  Tambahkan tag (opsional)
                </Label>
                <Input
                  placeholder="Misal: javascript, react, laravel"
                  className="w-[400px] md:w-[500px] lg:w-[600px]"
                  value={data.tags}
                  onChange={(e) => setData("tags", e.target.value)}
                />

                <div className="flex flex-row gap-2 justify-end">
                  <Button variant='outline' type="button" onClick={() => setIsOpen(false)}>
                    Batalkan
                  </Button>
                  <Button
                    type="submit"
                    disabled={processing}
                  >
                    Tanyakan
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
                Tanya Pertanyaan
              </Button>
            </div>
          )}

        </div>
      </CardContent>
    </Card >
  );
}