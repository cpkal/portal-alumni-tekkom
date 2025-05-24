import RingProgress from '@/components/ring-progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AvatarImage } from '@/components/ui/avatar';
import { Check, BookOpenCheck, MessagesSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl px-3">
        <div className="grid auto-rows-min md:grid-cols-3 gap-4">
          <Card className='bg-background flex flex-col justify-between'>
            <CardHeader>
              <div className="flex h-full justify-between items-center gap-2">
                <p>Profile Completion</p>
                <Check />
              </div>
            </CardHeader>

            <CardContent>
              <div className='flex items-center gap-4'>
                <div>
                  <RingProgress percentage={70} />
                </div>
                <div>
                  <p className='text-xl font-semibold'>70%</p>
                  <p className='text-xs'>Complete your profile for better matches</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-background flex flex-col justify-between'>
            <CardHeader>
              <div className="flex h-full justify-between items-center gap-2">
                <p>Tracer Study Status</p>
                <BookOpenCheck />
              </div>
            </CardHeader>

            <CardContent>
              <div className='flex items-center gap-4'>

                <div className='flex justify-between w-full items-end gap-3'>
                  <div>
                    <p className='text-xl font-semibold'>Submitted</p>
                    <p className='text-xs'>Last updated: 21 May 2025</p>
                  </div>
                  <div>
                    <Badge>Reviewed</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-background flex flex-col justify-between'>
            <CardHeader>
              <div className="flex h-full justify-between items-center gap-2">
                <p>Recent Forum Activity</p>
                <MessagesSquare />
              </div>
            </CardHeader>

            <CardContent>
              <div className='flex items-center gap-4'>

                <div className='flex justify-between w-full items-end gap-3'>
                  <div>
                    <p className='text-xl font-semibold'>3</p>
                    <p className='text-xs'>Replies in last 7 days</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className='col-span-2'>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>People You May Now</p>
                  <p>See All</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Alexandra M.</p>
                    <p className='text-xs'>Class of 2022 - AI Specialist</p>
                  </div>
                  <div className='text-xs'>
                    <Button>Connect <Plus /></Button>
                  </div>
                </div>

                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Alexandra M.</p>
                    <p className='text-xs'>Class of 2022 - AI Specialist</p>
                  </div>
                  <div className='text-xs'>
                    <Button>Connect <Plus /></Button>
                  </div>
                </div>

                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Alexandra M.</p>
                    <p className='text-xs'>Class of 2022 - AI Specialist</p>
                  </div>
                  <div className='text-xs'>
                    <Button>Connect <Plus /></Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          <div>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Job & Internship Suggestions</p>
                  <p>See All</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>

                  <div className='flex gap-3 items-center'>
                    <div>
                      <img className='w-12 h-12' src='' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p>Software Engineering</p>
                      <p className='text-xs'>PT Digital Nusantara - Bandung</p>
                      <Badge>Internship</Badge>
                    </div>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div>
                      <img className='w-12 h-12' src='' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p>Software Engineering</p>
                      <p className='text-xs'>PT Digital Nusantara - Bandung</p>
                      <Badge>Internship</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='col-span-2'>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Recent Forum Discussions</p>
                  <p>See All</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Job Opportunities in Tech - 2025</p>
                    <p className='text-xs'>by Alice W. - 4 replies - 2 hours ago</p>
                  </div>
                </div>

                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Job Opportunities in Tech - 2025</p>
                    <p className='text-xs'>by Alice W. - 4 replies - 2 hours ago</p>
                  </div>
                </div>

                <div className='flex items-end gap-3 mb-3'>
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className='font-medium'>Job Opportunities in Tech - 2025</p>
                    <p className='text-xs'>by Alice W. - 4 replies - 2 hours ago</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          <div>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Job & Internship Suggestions</p>
                  <p>See All</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>

                  <div className='flex gap-3 items-center'>
                    <div>
                      <img className='w-12 h-12' src='' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p>Job Fair Campus 2025</p>
                      <p className='text-xs'>28 June 2025 - 10.00 WIB</p>
                      <Badge>On-site</Badge>
                    </div>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <div>
                      <img className='w-12 h-12' src='' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <p>CareerTalk - Webinar Online 2025</p>
                      <p className='text-xs'>8 June 2025 - 10.00 WIB</p>
                      <Badge>Online</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </AppLayout>
  );
}
