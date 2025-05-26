import LoadingDots from "@/components/loading-dots";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { Building, Clock, DollarSign, DoorOpen, MapPin, RotateCcw, Verified, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function JobInternshipPage(): any {
  const { job_vacancies }: any = usePage().props;
  const [isLoading, setLoading] = useState(false);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailJob, setDetailJob]: any = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(job_vacancies.next_page_url);
  const [jobs, setJobs] = useState(job_vacancies.data);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const getDetailJob = (jobVacancy: any) => {
    setShowDetail(true);
    setLoading(true);
    setTimeout(() => {
      setDetailJob(jobVacancy);
      setLoading(false);
    }, 500);
  };

  const loadMore = () => {
    if (!nextPageUrl || loadingInfiniteScroll) return;
    setLoadingInfiniteScroll(true);

    router.get(nextPageUrl, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['job_vacancies'],
      onSuccess: (page) => {
        const newData = (page.props.job_vacancies as any).data;
        const newNext = (page.props.job_vacancies as any).next_page_url;
        setJobs((prev: any) => [...prev, ...newData]);
        setNextPageUrl(newNext);
        setLoadingInfiniteScroll(false);
      },
    });
  }

  // Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, nextPageUrl]);

  const goToJobApplication = (applicationLink: string) => {
    window.open(applicationLink, "_blank");
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
      <div className="px-3 flex gap-4">
        <div className="w-2/5">
          <div className="flex justify-between items-end">
            <p className="relative">Showing Alumni</p>
            <Button>
              <RotateCcw />
              Filter
            </Button>
          </div>
          <Separator className="my-2" />

          {/* grid-cols-2 for alumnis card */}
          <div className="grid grid-cols-1 gap-3">
            {jobs.map((jobVacancy: any) => (
              <Card className="bg-background" key={jobVacancy.id}>
                <CardContent>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-xl font-semibold">{jobVacancy.job_title}</p>
                      <p className="text-sm">{jobVacancy.company_name}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-3">
                    <div className="flex gap-2">
                      <MapPin className="text-sm" />
                      <p>{jobVacancy.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <DollarSign className="text-sm" />
                      <p>{jobVacancy.salary_start_rupiah} - {jobVacancy.salary_end_rupiah} {jobVacancy.salary_period}</p>
                    </div>
                    <div>
                      <p>Qualifications</p>
                      <p>{jobVacancy.qualifications}</p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button onClick={() => goToJobApplication(jobVacancy.apply_link)}>Go Apply</Button>
                  <Button variant='outline' onClick={() => getDetailJob(jobVacancy)}>View details</Button>
                </CardFooter>
              </Card>
            ))}

            {/* loading animation */}
            {loadingInfiniteScroll && <LoadingDots />}
          </div>


          <div ref={loaderRef} className="h-10" />
        </div>

        {showDetail ? (
          !isLoading ? (
            <div className="w-3/5">
              <div className="sticky top-16 z-10 overflow-y-scroll h-[calc(100vh-4rem)] pb-0">
                <div className="relative">
                  <X className="absolute top-2 right-2 bg-background rounded-full hover:cursor-pointer" onClick={() => setShowDetail(false)} />
                  <img className="rounded-t-md" src="https://image-service-cdn.seek.com.au/dd4a0d6cbc6de353bc702a0d239709b351a9162b/205993b4ce5632be9b98efc740d1679152a970f7" alt="" />
                </div>
                <div className="my-4">
                  <p className="text-2xl font-medium">{detailJob?.job_title}</p>
                  <p className="flex gap-2">{detailJob?.company_name} <Verified /> </p>

                  <div className="flex flex-col gap-2 mt-3">
                    <div className="flex gap-2">
                      <MapPin />
                      <p>{detailJob?.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <Building />
                      <p>{detailJob?.job_title}</p>
                    </div>
                    <div className="flex gap-2">
                      <Clock />
                      <p>{detailJob?.employment_type_formatted}</p>
                    </div>
                    <div className="flex gap-2">
                      <DoorOpen />
                      <p>{detailJob?.job_type_formatted}</p>
                    </div>
                    <div className="flex gap-2">
                      <DollarSign />
                      <p>{detailJob?.salary_start_rupiah} - {detailJob?.salary_end_rupiah} {detailJob?.salary_period}</p>
                    </div>

                    <div>
                      <p className="my-2 font-semibold">Qualifications</p>
                      {detailJob?.qualifications}
                    </div>

                    <div>
                      <p className="my-2 font-semibold">About</p>
                      {detailJob?.job_description}
                    </div>
                  </div>
                </div>

                <div className="sticky bottom-0 p-3 bg-background border mt-auto">
                  <Button className="w-full" onClick={() => goToJobApplication(detailJob?.apply_link)}>
                    Go Apply
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-3/5 h-screen sticky top-16">
              <Skeleton className="h-full w-full" />
            </div>
          )

        ) : (
          <div className="w-3/5">
            <div className="sticky top-24 z-10">
              <p className="text-2xl mx-auto font-semibold text-center mt-4">Click "View Details" <br /> Show here</p>
            </div>
          </div >
        )}
      </div >
    </AppLayout >
  )
}