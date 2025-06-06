import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Flame, Layers, School } from "lucide-react";
import AskQuestion from "@/components/ask-question";
import ForumReply from "@/components/forum-reply";
import { useEffect, useRef, useState } from "react";
import LoadingDots from "@/components/loading-dots";


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

  const [searchQuestionText, setSearchEventText] = useState('');
  const [tag, setTag] = useState('');

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

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />
      <div className="flex flex-row relative">
        <div className="mx-3 w-2/3">
          {/* you ask something */}
          <AskQuestion />

          {/* forum questions */}
          {forumQuestions.map((question: any) => (
            <Card className="bg-background mt-4" id={question.id} key={question.id}>
              <div className="hover:cursor-pointer" onClick={() => goToDetailQuestion(question.id)}>
                <CardHeader>
                  <div className="flex flex-row gap-3 items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <div className="flex items-center">
                        <p>{question.user.name}</p>
                        <p className="text-xs">&nbsp; asked on {question.created_at}</p>
                      </div>
                    </div>

                    <div>
                      <Badge>#careerTalk</Badge>
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
                  <p className="font-semibold">Tags</p>
                  {/* badges */}
                </div>

                <div className="flex flex-wrap gap-1">
                  {forum_tags.map((tag: any) => (
                    <Badge className="hover:cursor-pointer" onClick={() => {
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
