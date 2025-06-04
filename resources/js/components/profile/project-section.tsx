import { Pencil, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { router } from "@inertiajs/react";

export default function ProjectSection({
  user,
  editProject,
  setEditProject,
}: any) {
  const handleAddProject = () => {
    setEditProject(true);
  };

  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">Proyek</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => setEditProject(!editProject)}>
              <Pencil />
            </Button>
            <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.project.add'), {}, { preserveScroll: true })}>
              <Plus />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {user.alumni.projects && user.alumni.projects.length > 0 ? (
            user.alumni.projects.map((proj: any) => (
              <div className="flex items-center space-x-4" key={proj.id}>
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/project.jpg" alt="Project" />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{proj.project_name}</h3>
                  <p className="text-sm text-muted-foreground">{proj.description}</p>
                  {editProject && (
                    <div className="mt-2">
                      <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.project.edit', { id: proj.id }), {}, { preserveScroll: true })}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" className="ml-2" onClick={() => router.delete(route('profile.me.project.delete', { id: proj.id }), { preserveScroll: true })}>
                        Hapus
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Belum ada proyek yang ditambahkan.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}