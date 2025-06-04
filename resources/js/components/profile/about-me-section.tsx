import { router } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Pencil } from "lucide-react";

export default function AboutMeSection({ user }: { user: any }) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">Tentang Saya</h2>
          <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.shortdesc.edit'))}>
            <Pencil />
          </Button>
        </div>

      </CardHeader>
      <CardContent>
        <div className="mx-4 py-2">
          <p className="text-sm text-muted-foreground">{user.alumni.short_description || 'Belum ada deskripsi.'}</p>
        </div>
      </CardContent>
    </Card>
  )
}