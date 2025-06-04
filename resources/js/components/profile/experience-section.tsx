import { Pencil, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { router } from "@inertiajs/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ExperienceSection({ user, editExperience, setEditExperience }: { user: any, editExperience: boolean, setEditExperience: (value: boolean) => void }) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">Pengalaman Kerja</h2>
          <div className="flex space-x-2">
            <Button variant={editExperience ? 'default' : 'outline'} size="sm" onClick={() => setEditExperience(!editExperience)}>
              <Pencil />
            </Button>
            <Button variant='outline' size="sm" onClick={() => router.get(
              route('profile.me.experience.add'),
              {},
              {
                preserveScroll: true,
              }
            )}>
              <Plus />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* timeline pengalaman kerja */}
        <div className="space-y-4">

          {user.alumni.experiences && user.alumni.experiences.length > 0 ? (
            user.alumni.experiences.map((experience: any) => (
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/company1.jpg" alt="Company 1" />
                  <AvatarFallback>CP1</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{experience.company_name} {`(${experience.employment_type})`}  {editExperience && (
                    // button edit or delete
                    <>
                      <Button variant="outline" className="ml-2" onClick={() => router.get(route('profile.me.experience.edit', { id: experience.id }), {}, { preserveScroll: true })}>
                        Edit
                      </Button>
                      <Button variant="destructive" className="ml-2" onClick={() => router.delete(route('profile.me.experience.delete', { id: experience.id }), { preserveScroll: true })}>
                        Hapus
                      </Button>
                    </>
                  )}</h3>
                  <p className="text-sm text-muted-foreground">{experience.start_date} - {experience.end_date ?? 'sekarang'}</p>
                  {/* sub penjelasan poin poin */}
                  <p>{experience.job_description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Belum ada pengalaman kerja yang ditambahkan.</p>
          )}

        </div>
      </CardContent>
    </Card>
  )
}