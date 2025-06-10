import { Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function DetailAlumniCard({ alumni, isPreview = false }: { alumni?: any, isPreview?: boolean }) {
  if(!alumni) {
    return (
      <div className="sticky top-16 z-10">
        <Card className="bg-background h-[calc(100vh-4rem)] flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Pilih alumni untuk melihat detailnya.</p>
        </Card>
      </div>
    );
  }
  return (
    <div className="sticky top-16 z-10">
      <Card className="bg-background overflow-y-scroll h-[calc(100vh-4rem)] pb-0">
        {isPreview && (
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <p className="text-[5rem] font-extrabold text-muted-foreground -rotate-45 opacity-30 select-none">
              PREVIEW
            </p>
          </div>
        )}
        <CardContent >
          <div className="mx-auto flex flex-col items-center gap-2">
            <Avatar className="h-18 w-18">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-xl font-semibold">{alumni.fullname}</p>
            <p className="text-sm">Lulus pada {alumni.graduation_year}</p>
          </div>

          <div>
            <p className="my-2 font-semibold">Dekripsi Singkat</p>
            {alumni.short_description ? (
              <p className="text-sm">{alumni.short_description}</p>
            ) : (
              <p className="text-sm text-muted-foreground">Tidak ada informasi.</p>
            )}
          </div>

          <div className="mt-4">
            <p className="my-2 font-semibold">Informasi Kontak</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <Phone />
                {alumni.active_phone_number}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="my-2 font-semibold">Pengalaman kerja</p>
            <div className="flex flex-col gap-1">
              {alumni.experiences.length > 0 ? (
                alumni.experiences.map((experience: any) => (
                  <div>
                    <p className="font-medium">{experience.company_name} (2020 - 2025)</p>
                    <p className="text-sm">{experience.job_title}</p>
                  </div>
                ))) : (
                <p className="text-sm text-muted-foreground">Tidak ada pengalaman yang ditambahkan.</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="my-2 font-semibold">Pendidikan</p>
            <div className="flex flex-col gap-1">
              {alumni.educations.length > 0 ? (
                alumni.educations.map((education: any) => (
                  <div>
                    <p className="font-medium">{education.institution_name} ({education.start_year} - {education.end_year})</p>
                    <p className="text-sm">{education.degree} - {education.major}</p>
                  </div>
                ))) : (
                <p className="text-sm text-muted-foreground">Tidak ada pendidikan yang ditambahkan.</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="my-2 font-semibold">Proyek</p>
            <div className="flex flex-col gap-1">
              {alumni.projects.length > 0 ? (
                alumni.projects.map((project: any) => (
                  <div>
                    <p className="font-medium">{project.project_name}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                ))) : (
                <p className="text-sm text-muted-foreground">Tidak ada proyek yang ditambahkan.</p>
              )}
            </div>
          </div>

        </CardContent>

        <div className="sticky bottom-0 p-3 bg-background border mt-auto">

        </div>
      </Card>
    </div>
  );
}