import { Pencil, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { router } from "@inertiajs/react";

export default function EducationSection({
  user,
  editEducation,
  setEditEducation,
}: any) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">Pendidikan</h2>
          <div className="flex space-x-2">
            <Button variant={editEducation ? 'default' : 'outline'} size="sm" onClick={() => setEditEducation(!editEducation)}>
              <Pencil />
            </Button>
            <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.education.add'), {}, { preserveScroll: true })}>
              <Plus />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {user.alumni.educations && user.alumni.educations.length > 0 ? (
            user.alumni.educations.map((edu: any) => (
              <div className="flex items-center space-x-4" key={edu.id}>
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/education.jpg" alt="Education" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{edu.institution_name} ({edu.degree})</h3>
                  <p className="text-sm text-muted-foreground">{edu.start_year} - {edu.end_year ?? 'sekarang'}</p>
                  <p className="text-sm text-muted-foreground">{edu.major}</p>
                  {editEducation && (
                    <div className="mt-2">
                      <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.education.edit', { id: edu.id }), {}, { preserveScroll: true })}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" className="ml-2" onClick={() => router.delete(route('profile.me.education.delete', { id: edu.id }), { preserveScroll: true })}>
                        Hapus
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Belum ada riwayat pendidikan yang ditambahkan.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}