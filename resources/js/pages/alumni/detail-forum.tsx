import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Eye, Flame, Layers, MessageCircleMore, School, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layer } from "recharts";
import ForumReply from "@/components/forum-reply";
import AddReply from "@/components/add-reply";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function DetailForumPage({ forum_question, forum_tags }: any) {
  const { auth }: any = usePage().props;
  const user = auth.user;
  const [searchQuestionText, setSearchEventText] = useState('');
  const [tag, setTag] = useState('');
  const [removeReason, setRemoveReason] = useState('all');
  const [otherReason, setOtherReason] = useState('');

  const filterQuestions = () => {
    window.location.href = route('forum', {
      search: searchQuestionText,
      tag: tag,
      // eventType: eventType, // Uncomment if you have eventType
    });
  };

  const handleRemoveAnswer = (replyId: number) => {

    router.post(`/forum-discussion/${forum_question.id}/replies/${replyId}/delete`, {
      reason: removeReason === 'other' ? otherReason : removeReason,
    }, {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        window.location.reload();
      },
      onError: (error: any) => {
        console.error('Error removing answer:', error);
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={forum_question.title} />
      <div className="flex flex-row relative">
        <div className="mx-3 w-2/3">
          {/* go back */}
          <Button variant="outline" className="mb-4" onClick={() => window.history.back()}>
            Kembali
          </Button>
          <Card className="bg-background">
            <CardHeader>
              <div>
                <h2 className="text-2xl">{forum_question.title}</h2>
                <div className="flex gap-3 text-sm items-center mt-2">
                  <p>Diposting oleh {forum_question.user.name}</p>
                  <p>{forum_question.created_at}</p>
                  <p className="flex items-center gap-1"><MessageCircleMore />  {forum_question.replies.length}</p>
                  <p className="flex items-center gap-1"><Eye />  {forum_question.views}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {/* render html */}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: forum_question.description }}></div>

              {/* tags */}
            </CardContent>

            <CardFooter>
              {/* badge tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {forum_question.tags.map((tag: any) => (
                  <Badge key={tag.id}>#{tag.name}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>

          {/* add reply */}
          <AddReply className="mt-4 bg-background" forumId={forum_question.id} />

          <p className="m-4">Jawaban {forum_question.replies.length}</p>

          {/* if zero show now replies msg */}
          {forum_question.replies.length === 0 && (
            <p className="text-center text-gray-500 mt-4">Belum ada jawaban untuk pertanyaan ini.</p>
          )}

          {/* replies */}
          {forum_question.replies.map((reply: any) => (
            <>
              {user.role === 'admin' && (
                <div className="flex items-center justify-between gap-2 border translate-y-6 rounded-t-lg p-2 bg-background mb-4">
                  {/* admin moderation (delete post) */}
                  <p>Moderasi</p>
                  <Dialog>
                    <DialogTrigger>
                      <Button variant="destructive" className="flex items-center gap-2">
                        <Trash className="h-4 w-4" />
                        Hapus
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex gap-2 items-center">Hapus jawaban? </DialogTitle>
                        <DialogDescription>
                          Apakah Anda yakin ingin menghapus jawaban ini? Tindakan ini tidak dapat dibatalkan.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <Label htmlFor="job-type" className="block mb-2">Alasan dihapus</Label>
                        <Select value={removeReason} defaultValue="all" onValueChange={(value) => setRemoveReason(value)}>
                          <SelectTrigger >
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spam">Spam</SelectItem>
                            <SelectItem value="inappropriate">Konten tidak pantas</SelectItem>
                            <SelectItem value="duplicate">Duplikat</SelectItem>
                            <SelectItem value="off-topic">Tidak relevan</SelectItem>
                            <SelectItem value="copyright">Pelanggaran hak cipta</SelectItem>
                            <SelectItem value="misinformation">Informasi salah</SelectItem>
                            <SelectItem value="hate-speech">Ujaran kebencian</SelectItem>
                            <SelectItem value="harassment">Pelecehan</SelectItem>
                            <SelectItem value="legal-issue">Masalah hukum</SelectItem>
                            <SelectItem value="other">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>

                        {/* if lainnya buat teksbox */}
                        {removeReason === 'other' && (
                          <Input
                            type="text"
                            id="other-reason"
                            className="bg-background"
                            placeholder="Masukkan alasan lainnya"
                            value={otherReason}
                            onChange={(e) => setOtherReason(e.target.value)}
                          />
                        )}
                      </div>
                      <DialogFooter>
                        <DialogClose className="w-full" onClick={() => handleRemoveAnswer(reply.id)}>
                          <Button variant={'default'} className="w-full">
                            Simpan
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                </div>
              )}
              <ForumReply reply={reply} key={reply.id} />
            </>
          ))}
        </div>

        {/* search and filters card */}
        <div className="mr-3 w-1/3">
          <Card className="bg-background sticky top-16">
            <CardHeader className="">
              <Input placeholder="Explore question around the world"
                value={searchQuestionText}
                onChange={(e) => setSearchEventText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    filterQuestions();
                  }
                }}
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 mt-8">
                  <Flame />
                  <p className="font-semibold">Tags</p>
                  {/* badges */}
                </div>

                <div className="flex flex-wrap gap-1">
                  {forum_tags.map((tag: any) => (
                    <Badge className="hover:cursor-pointer" key={tag.id} onClick={() => {
                      setTag(`${tag.name}`);
                      filterQuestions();
                    }}>#{tag.name}</Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
