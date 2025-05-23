import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Building, DollarSign, MapPin, RotateCcw } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function JobInternshipPage() {
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
                <Button variant='outline'>View details</Button>
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

        <div className="w-3/5">
          <div className="sticky top-24 z-10">
            <p className="text-2xl mx-auto font-semibold text-center mt-4">Click "View Details" <br /> Show here</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}