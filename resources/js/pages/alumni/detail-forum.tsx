import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Eye, Flame, Layers, MessageCircleMore, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layer } from "recharts";
import AskQuestion from "@/components/ask-question";
import ForumReply from "@/components/forum-reply";
import AddReply from "@/components/add-reply";
import { useState } from "react";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function DetailForumPage({ forum_question, forum_tags }: any) {
  const [searchQuestionText, setSearchEventText] = useState('');
  const [tag, setTag] = useState('');

  const filterQuestions = () => {
    window.location.href = route('forum', {
      search: searchQuestionText,
      tag: tag,
      // eventType: eventType, // Uncomment if you have eventType
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
            <ForumReply reply={reply} key={reply.id} />
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
