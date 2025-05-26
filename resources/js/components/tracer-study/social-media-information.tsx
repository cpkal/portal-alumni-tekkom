import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { usePage } from "@inertiajs/react";

type SocialMediaInformationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  isSubmitted?: boolean;
};

export default function SocialMediaInformation({ currentPage, setCurrentPage, totalPages, isSubmitted }: SocialMediaInformationProps) {

  const { tracer } : any = usePage().props;

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Media Sosial</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="github_name">Nama akun Github</Label>
          <Input
            disabled={isSubmitted}
            id="github_name"
            type="text"
            autoComplete="github_name"
            defaultValue={isSubmitted ? tracer.github_name : localStorage.getItem('github_name') ?? ''}
            onChange={(e) => localStorage.setItem('github_name', e.target.value)}
            required

            placeholder="Ex. john_doe"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="linkedin_name">Nama akun LinkedIn</Label>
          <Input
            disabled={isSubmitted}
            id="linkedin_name"
            type="text"
            autoComplete="linkedin_name"
            defaultValue={isSubmitted ? tracer.linkedin_name : localStorage.getItem('linkedin_name') ?? ''}
            onChange={(e) => localStorage.setItem('linkedin_name', e.target.value)}
            placeholder="Ex. john_doe"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="instagram_name">Nama akun Instagram</Label>
          <Input
            disabled={isSubmitted}
            id="instagram_name"
            type="text"
            autoComplete="instagram_name"
            defaultValue={isSubmitted ? tracer.instagram_name : localStorage.getItem('instagram_name') ?? ''}
            onChange={(e) => localStorage.setItem('instagram_name', e.target.value)}
            placeholder="Ex. 2020"
          />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 justify-end">
        <Button variant='outline' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Kembali</Button>
        <Button variant="default" disabled={currentPage === totalPages} onClick={() => {
          setCurrentPage(currentPage + 1)
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Lanjut
        </Button>
      </CardFooter>
    </Card>
  );
}