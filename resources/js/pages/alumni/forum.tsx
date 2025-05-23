import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Code, Flame, Layers, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layer } from "recharts";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function ForumPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />
      <div className="flex flex-row relative">
        <div className="mx-3 w-2/3">
          {/* you ask something */}
          <Card className="bg-background">
            <CardContent>
              <div className="flex flex-row gap-3 items-center">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Input placeholder="What do you want to ask? Start typing..." />
              </div>
            </CardContent>
          </Card>

          {/* forum questions */}
          <Card className="bg-background mt-8">
            <CardHeader>
              <div className="flex flex-row gap-3 items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex items-center">
                    <p>Alex Chan</p>
                    <p className="text-xs">&nbsp; asked on May, 2025</p>
                  </div>
                </div>

                <div>
                  <Badge>#careerTalk</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              {/* answer */}
              <Card className="bg-background">
                <div className="flex flex-row">
                  <div className="mx-auto px-3 gap-1 flex flex-col items-center justify-center">
                    <ArrowUp />
                    <p className="text-md">23</p>
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
                            <p>Goofy</p>
                            <p className="text-xs">&nbsp; answered on May, 2025</p>
                          </div>
                        </div>

                        <div>
                          <Badge className="bg-green-500">Best Answer</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-3s">
                      <p>You could try to applies some CV to some companies. Try upksiling while waiting for another interview to come</p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="bg-background">
                <div className="flex flex-row">
                  <div className="mx-auto px-3 gap-1 flex flex-col items-center justify-center">
                    <ArrowUp />
                    <p className="text-md">11</p>
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
                            <p>Alex Chan</p>
                            <p className="text-xs">&nbsp; answered on May, 2025</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-3s">
                      <p>You could try to applies some CV to some companies. Try upksiling while waiting for another interview to come</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </CardContent>

            <div className="flex flex-row gap-3 items-center px-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Input placeholder="What do you want to ask? Start typing..." />

              <Button>Post</Button>
            </div>
          </Card>
          <Card className="bg-background mt-8">
            <CardHeader>
              <div className="flex flex-row gap-3 items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex items-center">
                    <p>Alex Chan</p>
                    <p className="text-xs">&nbsp; asked on May, 2025</p>
                  </div>
                </div>

                <div>
                  <Badge>#careerTalk</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
              {/* answer */}
              <Card className="bg-background">
                <div className="flex flex-row">
                  <div className="mx-auto px-3 gap-1 flex flex-col items-center justify-center">
                    <ArrowUp />
                    <p className="text-md">23</p>
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
                            <p>Goofy</p>
                            <p className="text-xs">&nbsp; answered on May, 2025</p>
                          </div>
                        </div>

                        <div>
                          <Badge className="bg-green-500">Best Answer</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-3s">
                      <p>You could try to applies some CV to some companies. Try upksiling while waiting for another interview to come</p>
                    </CardContent>
                  </div>
                </div>
              </Card>

              <Card className="bg-background">
                <div className="flex flex-row">
                  <div className="mx-auto px-3 gap-1 flex flex-col items-center justify-center">
                    <ArrowUp />
                    <p className="text-md">11</p>
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
                            <p>Alex Chan</p>
                            <p className="text-xs">&nbsp; answered on May, 2025</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-3s">
                      <p>You could try to applies some CV to some companies. Try upksiling while waiting for another interview to come</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </CardContent>

            <div className="flex flex-row gap-3 items-center px-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Input placeholder="What do you want to ask? Start typing..." />

              <Button>Post</Button>
            </div>
          </Card>

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
              <div className="flex flex-row gap-2 mt-4">
                <Layers />
                <p className="font-semibold">Categories</p>
              </div>

              <div className="flex flex-row gap-2 mt-4">
                <BriefcaseBusiness />
                <p>Careers</p>
              </div>
              <div className="flex flex-row gap-2 mt-1">
                <Code />
                <p>Coding</p>
              </div>
              <div className="flex flex-row gap-2 mt-1">
                <Bot />
                <p>Robotics</p>
              </div>
              <div className="flex flex-row gap-2 mt-1">
                <School />
                <p>Events</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 mt-8">
                  <Flame />
                  <p className="font-semibold">Trending Tags</p>
                  {/* badges */}
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge>#design</Badge>
                  <Badge>#careers</Badge>
                  <Badge>#marketing</Badge>
                  <Badge>#chill</Badge>
                  {/* add more badges here, and they'll wrap to the next line */}
                  <Badge>#marketing</Badge>
                  <Badge>#chill</Badge>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
