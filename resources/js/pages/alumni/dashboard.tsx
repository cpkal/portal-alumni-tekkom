import RingProgress from '@/components/ring-progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { AvatarImage } from '@/components/ui/avatar';
import { Check, BookOpenCheck, MessagesSquare } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function Dashboard({ completeness_percentage, forum_activity, alumnis, forum_questions, events, has_submitted_tracer_study, tracer_study }: any) {
  const { auth }: any = usePage().props;

  const { job_vacancies }: any = usePage().props;

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full w-full flex-1 flex-col gap-4 rounded-xl px-3">
        <div className="grid auto-rows-min md:grid-cols-3 gap-4">
          <Link href={route('profile.me')}>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p className='font-semibold'>Kelengkapan Profil</p>
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
                    {completeness_percentage < 100 ? (
                      <p className='text-xs'>Lengkapi profil Anda</p>
                    ) : (
                      <p className='text-xs'>Profil Anda lengkap</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <div>
            <Link href={route('tracer-study.index')} >
              <Card className='bg-background flex flex-col justify-between h-full'>
                <CardHeader>
                  <div className="flex h-full justify-between items-center gap-2">
                    <p className='font-semibold'>Status Tracer Study</p>
                    <BookOpenCheck />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className='flex items-center gap-4'>

                    <div className='flex justify-between w-full items-end gap-3'>
                      <div>
                        <p className='text-xl font-semibold'>{has_submitted_tracer_study ? 'Disubmit' : 'Belum submit'}</p>
                        {tracer_study && (
                          <p className='text-xs'>{tracer_study.updated_at}</p>
                        )}
                      </div>
                      {(tracer_study && has_submitted_tracer_study) && (
                        <div>
                          {tracer_study.status === 'reviewed' ? (
                            <Badge className='bg-green-500 text-white'>Selesai</Badge>
                          ) : tracer_study.status === 'submitted' ? (
                            <Badge className='bg-yellow-500 text-white'>Sedang Direview</Badge>
                          ) : (
                            <Badge className='bg-red-500 text-white'>Ditolak</Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div>
            <Link href={route('forum')}>
              <Card className='bg-background flex flex-col justify-between h-full'>
                <CardHeader>
                  <div className="flex h-full justify-between items-center gap-2">
                    <p className='font-semibold'>Aktivitas Forum Terbaru</p>
                    <MessagesSquare />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className='flex items-center gap-4'>

                    <div className='flex justify-between w-full items-end gap-3'>
                      <div>
                        <p className='text-xl font-semibold'>{forum_activity}</p>
                        <p className='text-xs'>Aktifitas di 7 hari terakir</p>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className='col-span-2'>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p className='font-semibold'>Alumni TEKKOM</p>
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
                        <AvatarImage src={alumni.profile_image ? '/storage/' + alumni.profile_image : 'https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png'} alt="shadcn" />
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
                  <p className='font-semibold'>Lowongan kerja & Magang</p>
                  <Link href={route('job-vacancies')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>

                  {job_vacancies.map((jobVacancy: any) => (
                    <Link href={route('job-vacancies') + '?jobId=' + jobVacancy.id} key={jobVacancy.id} className='hover:bg-muted p-2 rounded-md transition-colors'>
                      <div className='flex gap-3 items-center'>

                        <div className='flex flex-col gap-1'>
                          <p>{jobVacancy?.job_title}</p>
                          <p className='text-xs'>{jobVacancy?.company_name} - {jobVacancy?.location}</p>
                          <Badge>{jobVacancy?.employment_type_formatted}</Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>



          <div className='col-span-2'>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p className='font-semibold'>Diskusi forum terbaru</p>
                  <Link href={route('forum')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                {forum_questions.map((forum_question: any) => (
                  <Link href={route('forum.show', { id: forum_question.id })} className='hover:bg-muted p-2 rounded-md transition-colors'>
                    <div className='flex items-end gap-3 mb-3' key={forum_question.id}>
                      <div>
                        <Avatar>
                          <AvatarImage src={forum_question.user.alumni.profile_image ? '/storage/' + forum_question.user.alumni.profile_image : 'https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png'} alt="shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className='font-medium'>{forum_question.title}</p>
                        <p className='text-xs'>by {forum_question.user.name}. - {forum_question.replies_count} replies</p>
                      </div>
                    </div>
                  </Link>
                ))}

              </CardContent>
            </Card>
          </div>

          <div>
            <Card className='bg-background flex flex-col justify-between'>
              <CardHeader>
                <div className="flex h-full justify-between items-center gap-2">
                  <p className='font-semibold'>Acara</p>
                  <Link href={route('events')}>
                    See All
                  </Link>
                </div>
              </CardHeader>

              <CardContent>
                <div className='flex flex-col gap-4'>
                  {events.map((event: any) => (
                    <Link href={route('events') + '?eventId=' + event.id} key={event.id} className='hover:bg-muted p-2 rounded-md transition-colors'>
                      <div className='flex gap-3 items-center' key={event.id}>

                        <div className='flex flex-col gap-1'>
                          <p>{event?.event_name}</p>
                          <p className='text-xs'>{event?.event_location} - {new Date(event?.event_date).toLocaleDateString()}</p>
                          <Badge>{event?.event_type}</Badge>
                        </div>
                      </div>
                    </Link>
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
