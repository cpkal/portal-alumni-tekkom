import DetailJob from "@/components/detail-job";
import LoadingDots from "@/components/loading-dots";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router, usePage } from "@inertiajs/react";
import { DollarSign, Filter, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function JobInternshipPage({ job_vacancies, job_vacancy }: any): any {
  const [isLoading, setLoading] = useState(false);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailJob, setDetailJob]: any = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(job_vacancies.next_page_url);
  const [jobs, setJobs] = useState(job_vacancies.data);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [searchJobText, setSearchJobText] = useState('');
  const [jobType, setJobType] = useState('all');
  const [employmentType, setEmploymentType] = useState('all');
  const [salaryStart, setSalaryStart]: any = useState(null);
  const [salaryEnd, setSalaryEnd]: any = useState(null);

  useEffect(() => {
    // if there is jobId in the URL, fetch the job details
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = urlParams.get('jobId');
    if (jobId) {
      setShowDetail(true);
      // set detailjob
      setDetailJob(job_vacancy);
    }
  }, []);


  const getDetailJob = (jobVacancy: any) => {
    setShowDetail(true);
    setLoading(true);
    router.get(`/job-vacancies?jobId=${jobVacancy.id}&${getFilterString()}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['job_vacancy'],
      onSuccess: (page) => {
        const job = (page.props.job_vacancy);
        setDetailJob(job);
        setLoading(false);
      },
    });
  };

  const loadMore = () => {
    if (!nextPageUrl || loadingInfiniteScroll) {
      return;
    }
    setLoadingInfiniteScroll(true);
    router.get(`${nextPageUrl}&${getFilterString()}`, {}, {
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

  const filterJobs = () => {
    const filterString = getFilterString();

    router.get(`/job-vacancies?${filterString}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['job_vacancies'],
      onSuccess: (page) => {
        const jobVacancies = page.props.job_vacancies as any;
        setJobs(jobVacancies.data);
        setNextPageUrl(jobVacancies.next_page_url);
        console.log(searchJobText)
        setShowDetail(false);
      },
    });
  };

  const getFilterString = () => {
    const params = new URLSearchParams();
    if (searchJobText) params.append('search', searchJobText);
    if (jobType && jobType !== 'all') params.append('jobType', jobType);
    if (employmentType && employmentType !== 'all') params.append('employmentType', employmentType);
    if (salaryStart) params.append('salaryStart', salaryStart);
    if (salaryEnd) params.append('salaryEnd', salaryEnd);

    return params.toString(); // hasil: search=foo&jobType=remote
  };


  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
      <div className="px-3 flex gap-4">
        <div className="w-2/5">
          <div className="flex justify-between items-end">
            <p>List Loker & Magang</p>

            <Dialog>
              <DialogTrigger>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex gap-2 items-center"><Filter /> Filter </DialogTitle>
                  <DialogDescription>
                    Filter job vacancies based on your preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <Label htmlFor="job-title" className="block mb-2">Judul Pekerjaan</Label>
                  <Input
                    type="text"
                    id="job-title"
                    className="bg-background"
                    placeholder="Masukkan judul pekerjaan"
                    value={searchJobText}
                    onChange={(e) => setSearchJobText(e.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="job-type" className="block mb-2">Lokasi</Label>
                      <Select value={jobType} defaultValue="all" onValueChange={(value) => setJobType(value)}>
                        <SelectTrigger >
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="on_site">On Site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="employment" className="block mb-2">Sistem kerja</Label>
                      <Select defaultValue="all" onValueChange={(value) => setEmploymentType(value)}>
                        <SelectTrigger >
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="full_time">Fulltime</SelectItem>
                          <SelectItem value="part_time">Part Time</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* input range salary */}
                    {/* <div>
                      <Label htmlFor="salary-start" className="block mb-2">Gaji awal</Label>
                      <Input
                        type="number"
                        id="salary-start"
                        className="bg-background"
                        placeholder="Masukkan rentang gaji awal"
                        onChange={(e) => setSalaryStart(e.target.value)}
                        // onChange={(e) => setSalaryStart(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="salary-end" className="block mb-2">Gaji akhir</Label>
                      <Input
                        type="text"
                        id="salary-end"
                        className="bg-background"
                        placeholder="Masukkan rentang gaji akhir"
                        onChange={(e) => setSalaryEnd(e.target.value)}
                        // onChange={(e) => setSalaryEnd(e.target.value)}
                      />
                    </div> */}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose className="w-full" onClick={filterJobs}>
                    <Button className="w-full">
                      Simpan
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Separator className="my-2" />

          {/* grid-cols-2 for alumnis card */}
          <div className="grid grid-cols-1 gap-3">
            {jobs.map((jobVacancy: any) => (
              <Card className="bg-background" key={jobVacancy.id}>
                <CardContent>
                  <div className="flex gap-2">
                    <div>
                      <p className="text-xl font-semibold">{jobVacancy.job_title} - {jobVacancy.employment_type_formatted}</p>
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
                      <p>Kualifikasi</p>
                      {/* render html */}
                      <div className="text-sm" dangerouslySetInnerHTML={{ __html: jobVacancy.qualifications }} />
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button onClick={() => goToJobApplication(jobVacancy.apply_link)}>Lamar Sekarang</Button>
                  <Button variant='outline' onClick={() => getDetailJob(jobVacancy)}>Lihat Detail</Button>
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
            <DetailJob detailJob={detailJob} setShowDetail={setShowDetail} goToJobApplication={goToJobApplication} />
          ) : (
            <div className="w-3/5 h-screen sticky top-16">
              <Skeleton className="h-full w-full" />
            </div>
          )

        ) : (
          <div className="w-3/5">
            <div className="sticky top-24 z-10">
              <p className="text-2xl mx-auto font-semibold text-center mt-4">Klik "Lihat detail" <br /> Tampilkan disini</p>
            </div>
          </div >
        )}
      </div >
    </AppLayout >
  )
}