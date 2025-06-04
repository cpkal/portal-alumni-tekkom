import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export default function ForumReply({ reply }: any) {

  const handleVote = (type: string) => {
    // Handle voting logic here
    console.log(`Vote ${type} for reply ID: ${reply.id}`);
    // You can make an API call to register the vote
  }
  
  return (
    <Card className="bg-background">
      <div className="flex flex-row">
        <div className="px-3 gap-1 flex flex-col items-center justify-center">
          <ArrowUp className="hover:cursor-pointer" onClick={() => handleVote('up')} />
          <p className="text-md">23</p>
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
            <p>{reply.description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}