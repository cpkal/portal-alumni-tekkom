import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export interface AddExperienceForm {
  company_name: string;
  job_title?: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  job_description?: string;
  employment_type?: 'full_time' | 'part_time' | 'internship' | 'freelance';
}

export function AddExperienceModal({ show, user }: { show: boolean, user: any }) {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const { data, setData, post, processing, errors, reset } = useForm<Required<AddExperienceForm>>({
    company_name: '',
    job_title: '',
    start_date: '',
    end_date: '',
    location: '',
    job_description: '',
    employment_type: 'full_time', // default value
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('profile.me.experience.store'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setOpen(false); // close modal
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-y-auto max-h-[90vh]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Tambah Pengalaman</DialogTitle>
            <DialogDescription>Jelaskan pengalaman anda.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="full_name">Nama Perusahaan</Label>
              <Input
                id="company_name"
                value={data.company_name}
                onChange={(e) => setData('company_name', e.target.value)}
                placeholder="Nama Perusahaan"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="job_title">Jabatan</Label>
              <Input
                id="job_title"
                value={data.job_title}
                onChange={(e) => setData('job_title', e.target.value)}
                placeholder="Jabatan"
                className="mt-2"
              />
            </div>

            {/* checkbox still working */}
            {/* if checked there is no tanggal selesai */}

            <div>
              <Label htmlFor="start_date">Tanggal Mulai</Label>
              <Input
                id="start_date"
                type="date"
                value={data.start_date}
                onChange={(e) => setData('start_date', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="end_date">Tanggal Selesai</Label>
              <Input
                id="end_date"
                type="date"
                value={data.end_date}
                onChange={(e) => setData('end_date', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="location">Lokasi</Label>
              <Input
                id="location"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                placeholder="Lokasi"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="job_description">Deskripsi Pekerjaan</Label>
              <Textarea
                id="job_description"
                value={data.job_description}
                onChange={(e) => setData('job_description', e.target.value)}
                placeholder="Deskripsi Pekerjaan"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="employment_type" className="mb-2">Jenis Pekerjaan</Label>
              <Select
                
                onValueChange={(e) => setData('employment_type', e as 'full_time' | 'part_time' | 'internship' | 'freelance')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih sistem kerja" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="full_time">Full Time</SelectItem>
                  <SelectItem value="part_time">Part Time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={processing}>
              {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

