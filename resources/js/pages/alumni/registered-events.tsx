import LoadingDots from "@/components/loading-dots";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  const [loading, setLoading] = useState(false);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Events" />
      <div className="px-3 flex flex-col gap-4">
        <div>
          <p className="text-3xl">Event Terdaftar</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Tanggal daftar</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event: any, idx: number) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{++idx}</TableCell>
                <TableCell>{event.event_name}</TableCell>
                <TableCell>{event.event_type}</TableCell>
                <TableCell>{new Date(event.registered_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  {event.status === 'registered' ? (
                    <span className="text-green-600">Terdaftar</span>
                  ) : (
                    <span className="text-red-600">Tidak Terdaftar</span>
                  )}
                </TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>

  )
}