import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function TracerStudyPage() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />
      <div className="flex flex-col gap-4 px-5">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-xl">Tracer Study Form</h1>
            <p>Help us improve by sharing your progress after graduation.</p>
          </div>

          <div className="sticky top-8 z-10">
            <p>Status:  <Badge>In Progress</Badge></p>
          </div>
        </div>

        {/* timeline progression steps */}
        <div className="flex flex-row gap-4 w-full justify-around mx-auto mt-8">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 bg-foreground border rounded-full flex items-center justify-center text-black font-semibold text-xl">1</div>
            <span>Personal Info</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center text-semibold text-xl">2</div>
            <span>Media Sosial</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center text-semibold text-xl">3</div>
            <span>Studi Lanjut</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center text-semibold text-xl">3</div>
            <span>Karir</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-12 bg-background border rounded-full flex items-center justify-center text-semibold text-xl">3</div>
            <span>Evaluasi Pendidikan</span>
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto mt-12">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label>Nama Lengkap</Label>
              <Input placeholder="Ex. Sandi Setiawan" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Nomor Induk Mahasiswa (NIM)</Label>
              <Input placeholder="Ex. 2309xxx" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Tahun Masuk</Label>
              <Input placeholder="Ex. 2020" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Tahun Lulus</Label>
              <Input placeholder="Ex. 2024" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Judul Skripsi</Label>
              <Input placeholder="Ex. Rancang Bangun xxx" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Alamat</Label>
              <Input placeholder="Ex. Jl. Panyileukan Gg. Sukarsari" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Nomor Telepon</Label>
              <Input placeholder="Ex. 08293992xxx" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Email</Label>
              <Input placeholder="Ex. sandi.setiawan@upi.edu" />
            </div>
          </CardContent>

          <CardFooter className="flex gap-2 justify-end">
            <Button variant='outline'>Kembali</Button>
            <Button variant='default'>Lanjut</Button>
          </CardFooter>
        </Card>

        <Alert variant='default' className="my-12">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Please complete all required fields to proceed to next step
          </AlertDescription>
        </Alert>
      </div>
    </AppLayout>
  );
}