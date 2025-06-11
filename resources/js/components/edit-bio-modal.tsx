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

export interface EditBioForm {
  profile_image: File | string; // File for new upload, or string for existing image URL
  full_name: string;
  active_phone_number: string;
}

export function EditBioModal({ show, user }: { show: boolean, user: any }) {
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  const { data, setData, post, processing, errors, reset } = useForm<Required<EditBioForm>>({
    profile_image: user?.alumni?.profile_image || '',
    full_name: user?.alumni?.fullname || '',
    active_phone_number: user?.alumni?.active_phone_number || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('profile.me.update'), {
      onSuccess: () => {
        reset();
        setOpen(false); // close modal
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Ubah informasi profil Anda.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* upload file */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                {data.profile_image && (
                  <img
                    src={
                      typeof data.profile_image === "string"
                        ? '/storage/' + data.profile_image
                        : URL.createObjectURL(data.profile_image)
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <Label htmlFor="profile_image">Foto Profil</Label>
                <Input
                  id="profile_image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setData('profile_image', e.target.files[0]);
                    }
                  }}
                />
              </div>
              {errors.profile_image && <p className="text-red-500 text-sm">{errors.profile_image}</p>}
            </div>
            <div>
              <Label htmlFor="full_name">Nama Lengkap</Label>
              <Input id="full_name" value={data.full_name} onChange={(e) => setData('full_name', e.target.value)} />
              {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
            </div>
            <div>
              <Label htmlFor="phone">No. Telepon</Label>
              <Input id="phone" value={data.active_phone_number} onChange={(e) => setData('active_phone_number', e.target.value)} />
              {errors.active_phone_number && <p className="text-red-500 text-sm">{errors.active_phone_number}</p>}
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

