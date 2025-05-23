import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Building, MapPin, RotateCcw } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function EventsPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
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
          <div className="sticky top-24 z-10">
            <p className="text-2xl mx-auto font-semibold text-center mt-4">Click "View Details" <br /> Show here</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}