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

export interface AddProjectForm {
  project_name: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}

export function AddProjectModal({ show, user }: { show: boolean, user: any }) {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const { data, setData, post, processing, errors, reset } = useForm<Required<AddProjectForm>>({
    project_name: '',
    description: '',
    start_date: '',
    end_date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('profile.me.project.store'), {
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
              <Label htmlFor="institution_name">Nama Proyek</Label>
              <Input
                id="project_name"
                value={data.project_name}
                onChange={(e) => setData('project_name', e.target.value)}
                placeholder="Nama Proyek"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                placeholder="Deskripsi Proyek"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="start_date">Tanggal Mulai</Label>
              <Input
                type="date"
                id="start_date"
                value={data.start_date}
                onChange={(e) => setData('start_date', e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="end_date">Tanggal Selesai</Label>
              <Input
                type="date"
                id="end_date"
                value={data.end_date}
                onChange={(e) => setData('end_date', e.target.value)}
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

