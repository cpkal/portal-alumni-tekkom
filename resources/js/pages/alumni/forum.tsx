import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Flame, Layers, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layer } from "recharts";
import AskQuestion from "@/components/ask-question";
import ForumReply from "@/components/forum-reply";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function ForumPage({ forum_questions, forum_tags }: any) {

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
          {forum_questions.data.map((question: any) => (
            <Card className="bg-background mt-8" id={question.id} key={question.id}>
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

              {question.status == 'open' && (
                <div className="flex flex-row gap-3 items-center px-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <Input placeholder="What do you want to ask? Start typing..." />

                  <Button>Post</Button>
                </div>
              )}
            </Card>
          ))}

          {/* loading animation */}
          <div className="flex justify-center items-center h-24 space-x-2">
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_infinite]"></div>
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_0.15s_infinite]"></div>
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_0.3s_infinite]"></div>
          </div>
        </div>

        {/* search and filters card */}
        <div className="mr-3 w-1/3">
          <Card className="bg-background sticky top-16">
            <CardHeader className="">
              <Input placeholder="Explore question around the world" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 mt-8">
                  <Flame />
                  <p className="font-semibold">Tags</p>
                  {/* badges */}
                </div>

                <div className="flex flex-wrap gap-1">
                  {forum_tags.map((tag: any) => (
                    <Badge>#{tag.name}</Badge>
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
