import { Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function DetailAlumniCard({ user, isPreview = false }: { user?: any, isPreview?: boolean }) {
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
            <p className="text-xl font-semibold">{user.alumni.fullname}</p>
            <p className="text-sm">Graduated at {user.alumni.graduation_year}</p>
          </div>

          <div>
            <p className="my-2 font-semibold">About</p>
            {user.alumni.short_description ? (
              <p className="text-sm">{user.alumni.short_description}</p>
            ) : (
              <p className="text-sm text-muted-foreground">Tidak ada informasi.</p>
            )}
          </div>

          <div>
            <p className="my-2 font-semibold">Contact Information</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <Phone />
                {user.alumni.active_phone_number}
              </div>
            </div>
          </div>

          <div>
            <p className="my-2 font-semibold">Pengalaman kerja</p>
            <div className="flex flex-col gap-1">
              {user.alumni.experiences.length > 0 ? (
                user.alumni.experiences.map((experience: any) => (
                  <div>
                    <p className="font-medium">{experience.company_name} (2020 - 2025)</p>
                    <p className="text-sm">{experience.job_title}</p>
                  </div>
                ))) : (
                <p className="text-sm text-muted-foreground">Tidak ada pengalaman yang ditambahkan.</p>
              )}
            </div>
          </div>

          <div>
            <p className="my-2 font-semibold">Pendidikan</p>
            <div className="flex flex-col gap-1">
              {user.alumni.educations.length > 0 ? (
                user.alumni.educations.map((education: any) => (
                  <div>
                    <p className="font-medium">{education.institution_name} ({education.start_year} - {education.end_year})</p>
                    <p className="text-sm">{education.degree} - {education.major}</p>
                  </div>
                ))) : (
                <p className="text-sm text-muted-foreground">Tidak ada pendidikan yang ditambahkan.</p>
              )}
            </div>
          </div>

          <div>
            <p className="my-2 font-semibold">Projects</p>
            <div className="flex flex-col gap-1">
              {user.alumni.projects.length > 0 ? (
                user.alumni.projects.map((project: any) => (
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