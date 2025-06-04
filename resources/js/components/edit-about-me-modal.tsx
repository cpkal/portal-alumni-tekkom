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
import { Textarea } from "./ui/textarea";

export interface EditAboutMeForm {
  short_description: string;
}

export function EditAboutMeModal({ show, user }: { show: boolean, user: any }) {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const { data, setData, post, processing, errors, reset } = useForm<Required<EditAboutMeForm>>({
    short_description: user?.alumni?.short_description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('profile.me.shortdesc.update'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        setOpen(false); // close modal
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Ubah informasi profil Anda.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="full_name">Nama Lengkap</Label>
              <Textarea
                id="short_description"
                value={data.short_description}
                onChange={(e) => setData('short_description', e.target.value)}
                placeholder="Ceritakan tentang diri Anda, pengalaman, atau apa pun yang ingin Anda bagikan."
                rows={4}
              ></Textarea>
              {errors.short_description && <p className="text-red-500 text-sm">{errors.short_description}</p>}
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

