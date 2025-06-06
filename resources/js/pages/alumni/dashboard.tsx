import RingProgress from '@/components/ring-progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { AvatarImage } from '@/components/ui/avatar';
import { Check, BookOpenCheck, MessagesSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function Dashboard({ completeness_percentage, forum_activity, alumnis, forum_questions, events }: any) {
  const { job_vacancies }: any = usePage().props;

  console.log(job_vacancies)

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
                  <RingProgress percentage={completeness_percentage} />
                </div>
                <div>
                  <p className='text-xl font-semibold'>{completeness_percentage}%</p>
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
                    <p className='text-xl font-semibold'>{forum_activity}</p>
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
                  <Link href={route('networking')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                {alumnis.map((alumni: any) => (
                  <div className='flex items-end gap-3 mb-3'>
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className='font-medium'>{alumni.fullname}</p>
                      <p className='text-xs'>Lulus {alumni.graduation_year}</p>
                    </div>
                    {/* <div className='text-xs'>
                      <Button>Connect <Plus /></Button>
                    </div> */}
                  </div>
                ))}

              </CardContent>
            </Card>
          </div>

          <div>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Job & Internship Suggestions</p>
                  <Link href={route('job-vacancies')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>

                  {job_vacancies.map((jobVacancy: any) => (
                    <div className='flex gap-3 items-center'>

                      <div className='flex flex-col gap-1'>
                        <p>{jobVacancy?.job_title}</p>
                        <p className='text-xs'>{jobVacancy?.company_name} - {jobVacancy?.location}</p>
                        <Badge>{jobVacancy?.employment_type_formatted}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>



          <div className='col-span-2'>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Recent Forum Discussions</p>
                  <Link href={route('forum')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                {forum_questions.map((forum_question: any) => (
                  <div className='flex items-end gap-3 mb-3' key={forum_question.id}>
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className='font-medium'>{forum_question.title}</p>
                      <p className='text-xs'>by {forum_question.user.name}. - {forum_question.replies_count} replies</p>
                    </div>
                  </div>
                ))}

              </CardContent>
            </Card>
          </div>

          <div>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p>Events Recommendation</p>
                  <Link href={route('events')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>
                  {events.map((event: any) => (
                    <div className='flex gap-3 items-center' key={event.id}>

                      <div className='flex flex-col gap-1'>
                        <p>{event?.event_name}</p>
                        <p className='text-xs'>{event?.event_location} - {new Date(event?.event_date).toLocaleDateString()}</p>
                        <Badge>{event?.event_type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>

    </AppLayout>
  );
}
