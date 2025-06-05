import DetailAlumniCard from "@/components/detail-alumni-card";
import LoadingDots from "@/components/loading-dots";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Building, Filter, Linkedin, Mail, MapPin, RotateCcw, UserPlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function NetworkingPage({ alumnis }: { alumnis: any }) {
  const [isLoading, setLoading] = useState(false);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailAlumni, setDetailAlumni]: any = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(alumnis.next_page_url);
  const [alumni, setAlumni] = useState(alumnis.data);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [searchAlumniText, setSearchAlumniText] = useState('');
  // const [eventType, setEventType] = useState('all');

  // flash success
  useEffect(() => {
    if (alumnis.flash?.success) {

    }
  }, [alumnis.flash]);

  const getDetailAlumni = (alumni: any) => {
    setShowDetail(true);
    setLoading(true);
    router.get(`/my-networks?alumniId=${alumni.id}&${getFilterString()}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['alumni'],
      onSuccess: (page) => {
        const x = (page.props.alumni);
        setDetailAlumni(x);
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
      only: ['alumnis'],
      onSuccess: (page) => {
        const newData = (page.props.alumnis as any).data;
        const newNext = (page.props.alumnis as any).next_page_url;
        setAlumni((prev: any) => [...prev, ...newData]);
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

  const filterAlumnis = () => {
    const filterString = getFilterString();

    router.get(`/my-networks?${filterString}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['alumnis'],
      onSuccess: (page) => {
        const x = page.props.alumnis as any;
        setAlumni(x.data);
        setNextPageUrl(x.next_page_url);
        setShowDetail(false);
      },
    });
  };

  const getFilterString = () => {
    const params = new URLSearchParams();
    if (searchAlumniText) params.append('search', searchAlumniText);
    // if (eventType && eventType !== 'all') params.append('eventType', eventType);

    return params.toString(); // hasil: search=foo&jobType=remote
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Networking with Alumni" />
      <div className="px-3 flex gap-4">
        <div className="w-3/5">
          <div className="flex justify-between items-end">
            <p>Showing Alumni</p>
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
                  <Label htmlFor="alumni-name" className="block mb-2">Nama</Label>
                  <Input
                    type="text"
                    id="alumni-name"
                    className="bg-background"
                    placeholder="Masukkan nama alumni"
                    value={searchAlumniText}
                    onChange={(e) => setSearchAlumniText(e.target.value)}
                  />
                  {/* <Label htmlFor="job-type" className="block mb-2">Lokasi</Label>
                  <Select value={eventType} defaultValue="all" onValueChange={(value) => setEventType(value)}>
                    <SelectTrigger >
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="conference">Konferensi</SelectItem>
                    </SelectContent>
                  </Select> */}
                </div>
                <DialogFooter>
                  <DialogClose className="w-full" onClick={filterAlumnis}>
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
          <div className="grid grid-cols-2 gap-3">
            {alumnis.data.map((alumni: any) => (
              <Card className="bg-background" key={alumni.id} onClick={() => getDetailAlumni(alumni)}>
                <CardContent>
                  <div className="flex gap-2">
                    <Avatar className="h-18 w-18">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xl font-semibold">{alumni.fullname}</p>
                      <p className="text-sm">Lulus tahun {alumni.graduation_year}</p>
                    </div>
                  </div>

                  {/* <div className="flex flex-col gap-2 mt-3">
                    <div className="flex gap-2">
                      <Building />
                      <p className="text-sm">Achme Corp</p>
                    </div>
                    <div className="flex gap-2">
                      <MapPin className="text-sm" />
                      <p>New York, Los Angeles</p>
                    </div>
                  </div> */}
                </CardContent>

                <CardFooter className="flex gap-3">

                  <Button variant='outline' onClick={() => setShowDetail(!showDetail)}>View details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {loadingInfiniteScroll && <LoadingDots />}
          <div ref={loaderRef} className="h-10" />
        </div>

        <div className="w-2/5">
          {showDetail ? (
            !isLoading && detailAlumni ? (
              <DetailAlumniCard alumni={detailAlumni} isPreview={false} />
            ) : (
              <div className="w-full h-screen sticky top-16">
                <Skeleton className="h-full w-full" />
              </div>
            )
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