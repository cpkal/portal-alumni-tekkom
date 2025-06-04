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

export interface AddEducationForm {
  institution_name: string;
  degree?: string;
  major?: string;
  start_year?: string;
  end_year?: string;
  gpa?: string;
  activities?: string;
  description?: string;
}

export function AddEducationModal({ show, user }: { show: boolean, user: any }) {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const { data, setData, post, processing, errors, reset } = useForm<Required<AddEducationForm>>({
    institution_name: '',
    degree: '',
    major: '',
    start_year: '',
    end_year: '',
    gpa: '',
    activities: '',
    description: '',

  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('profile.me.education.store'), {
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
            <DialogTitle>Tambah Pendidikan</DialogTitle>
            <DialogDescription>Jelaskan pendidikan anda.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="institution_name">Nama Institusi</Label>
              <Input
                id="institution_name"
                value={data.institution_name}
                onChange={(e) => setData('institution_name', e.target.value)}
                placeholder="Nama Institusi"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="degree">Gelar</Label>
              <Input
                id="degree"
                value={data.degree}
                onChange={(e) => setData('degree', e.target.value)}
                placeholder="Gelar"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="major">Jurusan</Label>
              <Input
                id="major"
                value={data.major}
                onChange={(e) => setData('major', e.target.value)}
                placeholder="Jurusan"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="start_year">Tahun Mulai</Label>
              <Input
                id="start_year"
                type="date"
                value={data.start_year}
                onChange={(e) => setData('start_year', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="end_year">Tahun Selesai</Label>
              <Input
                id="end_year"
                type="date"
                value={data.end_year}
                onChange={(e) => setData('end_year', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="gpa">IPK</Label>
              <Input
                id="gpa"
                value={data.gpa}
                onChange={(e) => setData('gpa', e.target.value)}
                placeholder="IPK"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="activities">Kegiatan</Label>
              <Input
                id="activities"
                value={data.activities}
                onChange={(e) => setData('activities', e.target.value)}
                placeholder="Kegiatan di kampus"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                placeholder="Deskripsi pendidikan"
                className="mt-2"
              />
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

