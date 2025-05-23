import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Building, Linkedin, Mail, MapPin, RotateCcw, UserPlus } from "lucide-react";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function NetworkingPage() {

  // state
  const [showDetail, setShowDetail] = useState(true);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Networking with Alumni" />
      <div className="px-3 flex gap-4">
        <div className="w-3/5">
          <div className="flex justify-between items-end">
            <p>Showing Alumni</p>
            <Button>
              <RotateCcw />
              Filter
            </Button>
          </div>
          <Separator className="my-2" />

          {/* grid-cols-2 for alumnis card */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <Avatar className="h-18 w-18">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">Alex Morgan <span className="text-xs">He/his</span></p>
                    <p className="text-sm">Year of Graduation 2025</p>
                    <p className="text-sm">Loving Technology</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Achme Corp</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>New York, Los Angeles</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Connect</Button>
                <Button variant='outline' onClick={() => setShowDetail(!showDetail)}>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <Avatar className="h-18 w-18">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">Alex Morgan <span className="text-xs">He/his</span></p>
                    <p className="text-sm">Year of Graduation 2025</p>
                    <p className="text-sm">Loving Technology</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Achme Corp</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>New York, Los Angeles</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Connect</Button>
                <Button variant='outline'>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <Avatar className="h-18 w-18">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">Alex Morgan <span className="text-xs">He/his</span></p>
                    <p className="text-sm">Year of Graduation 2025</p>
                    <p className="text-sm">Loving Technology</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Achme Corp</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>New York, Los Angeles</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Connect</Button>
                <Button variant='outline'>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <Avatar className="h-18 w-18">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">Alex Morgan <span className="text-xs">He/his</span></p>
                    <p className="text-sm">Year of Graduation 2025</p>
                    <p className="text-sm">Loving Technology</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Achme Corp</p>
                  </div>
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>New York, Los Angeles</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Connect</Button>
                <Button variant='outline'>View details</Button>
              </CardFooter>
            </Card>

            {/* loading animation */}
          </div>
          <div className="flex justify-center items-center h-24 space-x-2">
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_infinite]"></div>
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_0.15s_infinite]"></div>
            <div className="w-4 h-4 bg-foreground rounded-full animate-[ping_0.9s_0.3s_infinite]"></div>
          </div>
        </div>

        <div className="w-2/5">
          {showDetail ? (
            <div className="sticky top-16 z-10">
              <Card className="bg-background overflow-y-scroll h-[calc(100vh-4rem)] pb-0">
                <CardContent>
                  <div className="mx-auto flex flex-col items-center gap-2">
                    <Avatar className="h-18 w-18">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-xl font-semibold">Alex Morgan <span className="text-xs">He/his</span></p>
                    <p className="text-sm">Graduation Year 2025</p>
                    <p className="text-sm">Loving Technology</p>
                    <p>New York, LA - Technology</p>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">About</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae, impedit molestias ab nemo sed dignissimos ratione minima numquam vero, assumenda quae doloremque illum fugit unde blanditiis quidem? Voluptas.
                  </div>

                  <div>
                    <p className="my-2 font-semibold">Contact Information</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <Mail />
                        sandi.sandiaga@upi.edu
                      </div>
                      <div className="flex gap-2">
                        <Linkedin />
                        linked.in/in/sandi.sandiaga
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">Experience</p>
                    <div className="flex flex-col gap-1">
                      <div>
                        <p className="font-medium">Achme Corp (2020 - 2025)</p>
                        <p className="text-sm">Software Engineer</p>
                      </div>

                      <div>
                        <p className="font-medium">Innova Solutions (2017 - 2020)</p>
                        <p className="text-sm">Junior Software Developer</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">Education</p>
                    <div className="flex flex-col gap-1">
                      <div>
                        <p className="font-medium">Boston University (2024 - now)</p>
                        <p className="text-sm">Master's Degree - Applied Quantum Physics</p>
                      </div>

                      <div>
                        <p className="font-medium">Universitas Pendidikan Indonesia (2020 - 2024)</p>
                        <p className="text-sm">Bachelor's Degree - Computer Engineering</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">Achievements</p>
                    <div className="flex flex-col gap-1">
                      <div>
                        <p className="font-medium">1st IOI Olympiads 2019</p>
                      </div>

                      <div>
                        <p className="font-medium">1st ICPC Moskow 2021</p>
                      </div>
                    </div>
                  </div>

                </CardContent>

                <div className="sticky bottom-0 p-3 bg-background border mt-auto">
                  <Button className="w-full">
                    Connect
                    <UserPlus className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          ) : (
            <div className="sticky top-24 z-10">
              <p className="text-2xl mx-auto font-semibold text-center mt-4">Click "View Details" <br /> Show here</p>
            </div>
          )}


        </div>
      </div >
    </AppLayout >
  )
}