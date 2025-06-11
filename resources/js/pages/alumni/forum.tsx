import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Filter, Flame, Layers, School, Trash } from "lucide-react";
import AskQuestion from "@/components/ask-question";
import ForumReply from "@/components/forum-reply";
import { useEffect, useRef, useState } from "react";
import LoadingDots from "@/components/loading-dots";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function ForumPage({ forum_questions, forum_tags }: any) {
  const [isLoading, setLoading] = useState(false);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(forum_questions.next_page_url);
  const [forumQuestions, setForumQuestions] = useState(forum_questions.data);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [removeReason, setRemoveReason] = useState('all');
  const [otherReason, setOtherReason] = useState('');

  const [searchQuestionText, setSearchEventText] = useState('');
  const [tag, setTag] = useState('');

  const { auth }: any = usePage().props;
  const user = auth.user;

  // flash success
  useEffect(() => {
    if (forum_questions.flash?.success) {

    }
  }, [forum_questions.flash]);

  const loadMore = () => {
    if (!nextPageUrl || loadingInfiniteScroll) {
      return;
    }
    setLoadingInfiniteScroll(true);
    router.get(`${nextPageUrl}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['forum_questions'],
      onSuccess: (page) => {
        const newData = (page.props.forum_questions as any).data;
        const newNext = (page.props.forum_questions as any).next_page_url;
        setForumQuestions((prev: any) => [...prev, ...newData]);
        setNextPageUrl(newNext);
        setLoadingInfiniteScroll(false);
      },
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, nextPageUrl]);

  const filterQuestions = () => {
    const filterString = getFilterString();

    router.get(`/forum-discussion?${filterString}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['forum_questions'],
      onSuccess: (page) => {
        const x = page.props.forum_questions as any;
        setForumQuestions(x.data);
        setNextPageUrl(x.next_page_url);
        setShowDetail(false);
      },
    });
  };

  const getFilterString = () => {
    const params = new URLSearchParams();
    if (searchQuestionText) params.append('search', searchQuestionText);
    if (tag) params.append('tag', tag);

    return params.toString(); // hasil: search=foo&jobType=remote
  };


  const goToDetailQuestion = (id: number) => {
    router.get(`/forum-discussion/${id}`, {}, {
      preserveScroll: true,
      preserveState: true,
    });
  };

  const handleRemovePost = (id: number) => {
    router.post(`/forum-discussion/${id}/delete`, {
      reason: removeReason === 'other' ? otherReason : removeReason,
    }, {
      preserveScroll: true,
      onSuccess: () => {
        // Remove post from forumQuestions state
        setForumQuestions((prev: any) => prev.filter((question: any) => question.id !== id));
      },
      onError: (error) => {
        console.error('Gagal menghapus:', error);
        alert('Gagal menghapus. Coba lagi.');
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />
      <div className="flex flex-row relative">
        <div className="mx-3 w-2/3">
          {/* you ask something */}
          <AskQuestion />

          {/* forum questions */}
          {forumQuestions.map((question: any) => (
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
                        <DialogTitle className="flex gap-2 items-center"><Filter /> Hapus postingan? </DialogTitle>
                        <DialogDescription>
                          Pilih alasan mengapa postingan ini dihapus. Pastikan untuk memberikan alasan yang sesuai agar pengguna memahami tindakan ini.
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
                        <DialogClose className="w-full" onClick={() => handleRemovePost(question.id)}>
                          <Button variant={'default'} className="w-full">
                            Simpan
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                </div>
              )}
              <Card className="bg-background mb-4" id={question.id} key={question.id}>
                <div className="hover:cursor-pointer" onClick={() => goToDetailQuestion(question.id)}>
                  <CardHeader>
                    <div className="flex flex-row gap-3 items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={question.user.alumni.profile_image ? '/storage/' + question.user.alumni.profile_image : 'https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png'} alt="shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex items-center">
                          <p>{question.user.name}</p>
                          <p className="text-xs">&nbsp; ditanyakan pada {question.readable_created_at}</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground">
                            {question.status}
                          </Badge>
                          <Badge className="bg-secondary text-secondary-foreground">
                            {question.replies.length} Replies
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-2">
                    {/* question title */}
                    <h2 className="text-2xl">{question.title}</h2>

                    {/* limit question char and render as html */}
                    <p className="text-md" dangerouslySetInnerHTML={{ __html: question.question }}></p>


                    {/* tags */}
                    {question.replies.map((reply: any) => (
                      <ForumReply reply={reply} key={reply.id} />
                    ))}
                  </CardContent>
                </div>

                {/* {question.status == 'open' && (
                <div className="flex flex-row gap-3 items-center px-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <Input placeholder="What do you want to ask? Start typing..." />

                  <Button>Post</Button>
                </div>
              )} */}
              </Card>
            </>
          ))}

          {loadingInfiniteScroll && <LoadingDots />}
          <div ref={loaderRef} className="h-10" />
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
                  <p className="font-semibold">Tag</p>
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
