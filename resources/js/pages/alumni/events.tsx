import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Building, Calendar, Clock, Phone, RotateCcw } from "lucide-react";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function EventsPage() {

  const [showDetail, setShowDetail] = useState(true);

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
            <Card className="bg-background pt-0">
              {/* add background image to card */}
              <div>
                <img className="rounded-t-md" src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" />
              </div>
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">Dies Natalis TEKKOM 5.0</p>
                    <p className="text-sm">Ulang tahun TEKOM ke 5</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Aula Bumi Siliwangi</p>
                  </div>
                  <div className="flex gap-2">
                    <Calendar className="text-sm" />
                    <p className="text-sm">25 Mei 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="text-sm" />
                    <p className="text-sm">08.00 WIB - selesai</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Register</Button>
                <Button variant='outline' onClick={() => setShowDetail(!showDetail)}>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background pt-0">
              {/* add background image to card */}
              <div>
                <img src="https://shoflo.tv/wp-content/uploads/2021/05/AdobeStock_175466970-scaled.jpeg" className="rounded-t-md" />
              </div>
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">Dies Natalis TEKKOM 5.0</p>
                    <p className="text-sm">Ulang tahun TEKOM ke 5</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Aula Bumi Siliwangi</p>
                  </div>
                  <div className="flex gap-2">
                    <Calendar className="text-sm" />
                    <p className="text-sm">25 Mei 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="text-sm" />
                    <p className="text-sm">08.00 WIB - selesai</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Register</Button>
                <Button variant='outline'>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background pt-0">
              {/* add background image to card */}
              <div>
                <img src="https://shoflo.tv/wp-content/uploads/2021/05/AdobeStock_175466970-scaled.jpeg" className="rounded-t-md" />
              </div>
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">Dies Natalis TEKKOM 5.0</p>
                    <p className="text-sm">Ulang tahun TEKOM ke 5</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Aula Bumi Siliwangi</p>
                  </div>
                  <div className="flex gap-2">
                    <Calendar className="text-sm" />
                    <p className="text-sm">25 Mei 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="text-sm" />
                    <p className="text-sm">08.00 WIB - selesai</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Register</Button>
                <Button variant='outline'>View details</Button>
              </CardFooter>
            </Card>

            <Card className="bg-background pt-0">
              {/* add background image to card */}
              <div>
                <img src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" className="rounded-t-md" />
              </div>
              <CardContent>
                <div className="flex gap-2">
                  <div>
                    <p className="text-xl font-semibold">Dies Natalis TEKKOM 5.0</p>
                    <p className="text-sm">Ulang tahun TEKOM ke 5</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex gap-2">
                    <Building />
                    <p className="text-sm">Aula Bumi Siliwangi</p>
                  </div>
                  <div className="flex gap-2">
                    <Calendar className="text-sm" />
                    <p className="text-sm">25 Mei 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="text-sm" />
                    <p className="text-sm">08.00 WIB - selesai</p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button>Register</Button>
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
              <Card className="bg-background py-0 overflow-y-scroll h-[calc(100vh-4rem)]">
                <div>
                  <img className="rounded-t-md" src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" />
                </div>
                <CardContent>
                  <div className="mx-auto flex flex-col items-center gap-2">
                    <p className="text-xl font-semibold">Dies Natalis TEKKOM 5.0</p>
                    <p className="flex gap-2 text-sm items-center"> <Building /> Aula Bumi Siliwangi</p>
                    <p className="text-sm flex gap-2 items-center"><Calendar /> 25 Mei 2025</p>
                    <p className="text-sm flex gap-2 items-center"><Clock /> 08.00 WIB - selesai</p>
                  </div>

                  <div>
                    <p className="my-2 font-semibold">About</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam molestiae, impedit molestias ab nemo sed dignissimos ratione minima numquam vero, assumenda quae doloremque illum fugit unde blanditiis quidem? Voluptas.
                  </div>

                  <div>
                    <p className="my-2 font-semibold">Contact Person</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <Phone />
                        0812083102 (Contact Person 1)
                      </div>
                      <div className="flex gap-2">
                        <Phone />
                        081208312202 (Contact Person 2)
                      </div>
                    </div>
                  </div>
                </CardContent>

                <div className="sticky bottom-0 p-3 bg-background border mt-auto">
                  <Button className="w-full">
                    Go to Registration
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
      </div>
    </AppLayout>

  )
}