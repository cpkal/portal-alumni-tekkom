import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Building, Clock, DollarSign, MapPin, RotateCcw, Verified } from "lucide-react";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function JobInternshipPage() {

  const [showDetail, setShowDetail] = useState(true);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
      <div className="px-3 flex gap-4">
        <div className="w-2/5">
          <div className="flex justify-between items-end">
            <p>Showing Alumni</p>
            <Button>
              <RotateCcw />
              Filter
            </Button>
          </div>
          <Separator className="my-2" />

          {/* grid-cols-2 for alumnis card */}
          <div className="grid grid-cols-1 gap-3">
            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">AI Specialist</p>
                    <p className="text-sm">PT Inovasi Daya Solusi</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>Jakarta Selatan, Jakarta Raya</p>
                  </div>
                  <div className="flex gap-2">
                    <DollarSign className="text-sm" />
                    <p>Rp. 10.000.000 - 15.000.000 per month</p>
                  </div>
                  <div>
                    <p>AI Specialist</p>
                    <p>Menguasai bahasa Python dan bisa service galon serta service AC</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Go Apply</Button>
                <Button variant='outline' onClick={() => setShowDetail(!showDetail)}>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background">
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">AI Specialist</p>
                    <p className="text-sm">PT Inovasi Daya Solusi</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <MapPin className="text-sm" />
                    <p>Jakarta Selatan, Jakarta Raya</p>
                  </div>
                  <div className="flex gap-2">
                    <DollarSign className="text-sm" />
                    <p>Rp. 10.000.000 - 15.000.000 per month</p>
                  </div>
                  <div>
                    <p>AI Specialist</p>
                    <p>Menguasai bahasa Python dan bisa service galon serta service AC</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Go Apply</Button>
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

        {showDetail ? (
          <div className="w-3/5">
            <div className="sticky top-16 z-10 overflow-y-scroll h-[calc(100vh-4rem)] pb-0">
              <img className="rounded-t-md" src="https://image-service-cdn.seek.com.au/dd4a0d6cbc6de353bc702a0d239709b351a9162b/205993b4ce5632be9b98efc740d1679152a970f7" alt="" />
              <div className="my-4">
                <p className="text-2xl font-medium">AI Specialist</p>
                <p className="flex gap-2">PT Inovasi Daya Solusi <Verified /> </p>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <MapPin />
                    <p>Jakarta Selatan, Jakarta Raya</p>
                  </div>
                  <div className="flex gap-2">
                    <Building />
                    <p>AI Specialist / AI Engineer (Information Technology)</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock />
                    <p>Full-time</p>
                  </div>
                  <div className="flex gap-2">
                    <DollarSign />
                    <p>Rp. 10.000.000 - 15.000.000 per month</p>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">About</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae, impedit molestias ab nemo sed dignissimos ratione minima numquam vero, assumenda quae doloremque illum fugit unde blanditiis quidem? Voluptas.
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 p-3 bg-background border mt-auto">
                <Button className="w-full">
                  Go Apply
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-3/5">
            <div className="sticky top-24 z-10">
              <p className="text-2xl mx-auto font-semibold text-center mt-4">Click "View Details" <br /> Show here</p>
            </div>
          </div >
        )
        }
      </div >
    </AppLayout >
  )
}