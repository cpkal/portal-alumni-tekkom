import { router } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function BioSection({ user }: { user: any }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">Profil Saya</h2>
          <div>
            <Button variant="outline" size="sm" onClick={() => router.get(route('profile.me.edit'))}>
              <Pencil />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 mx-4 py-2 items-center border-b border-border">
          {/* avatar */}
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatars/shadcn.jpg" alt="shadcn" />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h1>{user.alumni.fullname}</h1>
            <p className="text-sm text-muted-foreground">{user.alumni.active_phone_number}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}