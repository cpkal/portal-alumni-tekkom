import LoadingDots from "@/components/loading-dots";
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
import { Building, Calendar, Clock, Filter, Phone, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function EventsPage({ events }: any): any {
  const [isLoading, setLoading] = useState(false);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailEvent, setDetailEvent]: any = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(events.next_page_url);
  const [acara, setAcara] = useState(events.data);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const [searchEventText, setSearchEventText] = useState('');
  const [eventType, setEventType] = useState('all');

  // flash success
  useEffect(() => {
    if (events.flash?.success) {

    }
  }, [events.flash]);

  const getDetailEvent = (event: any) => {
    setShowDetail(true);
    setLoading(true);
    router.get(`/events?eventId=${event.id}&${getFilterString()}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['event'],
      onSuccess: (page) => {
        const x = (page.props.event);
        setDetailEvent(x);
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
      only: ['events'],
      onSuccess: (page) => {
        const newData = (page.props.events as any).data;
        const newNext = (page.props.events as any).next_page_url;
        setAcara((prev: any) => [...prev, ...newData]);
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

  const filterEvents = () => {
    const filterString = getFilterString();

    router.get(`/events?${filterString}`, {}, {
      preserveState: true,
      preserveScroll: true,
      only: ['events'],
      onSuccess: (page) => {
        const x = page.props.events as any;
        setAcara(x.data);
        setNextPageUrl(x.next_page_url);
        setShowDetail(false);
      },
    });
  };

  const getFilterString = () => {
    const params = new URLSearchParams();
    if (searchEventText) params.append('search', searchEventText);
    if (eventType && eventType !== 'all') params.append('eventType', eventType);

    return params.toString(); // hasil: search=foo&jobType=remote
  };

  const registerEventNow = (eventId: number) => {
    if (!eventId) {
      return;
    }
    // post 
    router.post('/events/register', { event_id: eventId }, {
      preserveScroll: true,
      onSuccess: () => {
        router.reload();
      },
      onError: (error) => {
        console.error('Error registering for event:', error);
      },
    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
      <div className="px-3 flex gap-4">
        <div className="w-3/5">
          <div className="flex justify-between items-end">
            <p>Showing Events</p>
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
                    placeholder="Masukkan nama event"
                    value={searchEventText}
                    onChange={(e) => setSearchEventText(e.target.value)}
                  />
                  <Label htmlFor="job-type" className="block mb-2">Lokasi</Label>
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
                  </Select>
                </div>
                <DialogFooter>
                  <DialogClose className="w-full" onClick={filterEvents}>
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

            {acara.map((a: any) => {
              return (
                <Card className="bg-background pt-0 flex flex-col justify-between" key={a.id}>
                  {/* add background image to card */}
                  <div>
                    <img className="rounded-t-md" src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" />
                  </div>
                  <CardContent>
                    <div className="flex gap-2">
                      <div>
                        <p className="text-xl font-semibold">{a.event_name}</p>
                        <p className="text-sm">{a.event_description}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                      <div className="flex gap-2">
                        <Building />
                        <p className="text-sm">{a.event_location}</p>
                      </div>
                      <div className="flex gap-2">
                        <Calendar className="text-sm" />
                        <p className="text-sm">{a.event_date}</p>
                      </div>
                      {/* <div className="flex gap-2">
                        <Clock className="text-sm" />
                        <p className="text-sm">08.00 WIB - selesai</p>
                      </div> */}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    {a.is_registered ? (
                      <Button variant='secondary' disabled>
                        Terdaftar
                      </Button>
                    ) : (
                      <Button onClick={() => registerEventNow(a.id)}>
                        Daftar Sekarang
                      </Button>
                    )}
                    <Button variant='outline' onClick={() => getDetailEvent(a)}>View details</Button>
                  </CardFooter>
                </Card>
              )
            })}

          </div>

          {loadingInfiniteScroll && <LoadingDots />}
          <div ref={loaderRef} className="h-10" />
        </div>

        <div className="w-2/5">
          {showDetail ? (
            !isLoading ? (
              <div className="sticky top-16 z-10">
                <Card className="bg-background py-0 overflow-y-scroll h-[calc(100vh-4rem)]">
                  <div>
                    <img className="rounded-t-md" src="https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" />
                  </div>
                  <CardContent>
                    <div className="mx-auto flex flex-col items-center gap-2">
                      <p className="text-xl font-semibold">{detailEvent.event_name}</p>
                      <p className="flex gap-2 text-sm items-center"> <Building />{detailEvent.event_location}</p>
                      <p className="text-sm flex gap-2 items-center"><Calendar /> 25 Mei 2025</p>
                      <p className="text-sm flex gap-2 items-center"><Clock /> 08.00 WIB - selesai</p>
                    </div>

                    <div>
                      <p className="my-2 font-semibold">About</p>
                      {detailEvent.event_description}
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
                    {detailEvent.is_registered ? (
                      <Button variant='secondary' className="w-full" disabled>
                        Terdaftar
                      </Button>
                    ) : (
                      <Button className="w-full" onClick={() => registerEventNow(detailEvent.id)}>
                        Daftar Sekarang {detailEvent.is_registered}
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
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
      </div>
    </AppLayout>

  )
}