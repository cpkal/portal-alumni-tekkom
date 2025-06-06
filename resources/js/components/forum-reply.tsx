import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState } from "react";

export default function ForumReply({ reply }: any) {
  const [totatlVotes, setTotalVotes] = useState(reply.upvotes - reply.downvotes);

  const handleVote = (type: string) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    fetch(route('forum.vote', reply.id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({ type }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.upvotes !== undefined && data.downvotes !== undefined) {
        setTotalVotes(data.upvotes - data.downvotes);
      }
    })
    .catch(error => {
      console.error('Error recording vote:', error);
    });
  }
  
  return (
    <Card className="bg-background mb-4">
      <div className="flex flex-row">
        <div className="px-3 gap-1 flex flex-col items-center justify-center">
          <ArrowUp className="hover:cursor-pointer" onClick={() => handleVote('up')} />
          <p className="text-md">{ totatlVotes }</p>
          <ArrowDown className="hover:cursor-pointer" onClick={() => handleVote('down')} />
        </div>
        <div>
          <CardHeader>
            <div className="flex flex-row gap-3 items-start justify-between">
              <div className="flex items-start gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex items-center">
                  <p>{reply.alumni.fullname}</p>
                  <p className="text-xs">&nbsp; answered on {reply.created_at}</p>
                </div>
              </div>

              {reply.alumni.is_best_answer && (
                <div>
                  <Badge className="bg-green-500">Best Answer</Badge>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="mt-3">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: reply.description }}></div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}