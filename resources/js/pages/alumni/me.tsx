import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUp, Bot, BriefcaseBusiness, Car, Code, Flame, Layers, Pencil, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layer } from "recharts";
import AskQuestion from "@/components/ask-question";
import ForumReply from "@/components/forum-reply";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function MePage() {

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Me" />
      <div className="mx-4">
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Profil Saya</h2>
              <div>
                <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
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
                <h1>Name</h1>
                {/* graduation year */}
                <p className="text-sm text-muted-foreground">Teknik Komputer, Universitas XYZ</p>
                {/* active phone number */}
                <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>                
                {/* date of birth */}
                <p className="text-sm text-muted-foreground">Tanggal Lahir: 1 Januari 1990</p>
                
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Tentang Saya</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>

          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae aliquam, quisquam iste at voluptas in reiciendis illum quam? Possimus cum suscipit iste voluptatum neque esse omnis magnam. Recusandae, optio?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi vel minima non, debitis exercitationem nemo voluptatem? Odio neque ratione quo eius praesentium doloribus? Porro quaerat nihil sed labore magnam.</p>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Keterampilan</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
            
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae aliquam, quisquam iste at voluptas in reiciendis illum quam? Possimus cum suscipit iste voluptatum neque esse omnis magnam. Recusandae, optio?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi vel minima non, debitis exercitationem nemo voluptatem? Odio neque ratione quo eius praesentium doloribus? Porro quaerat nihil sed labore magnam.</p>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Pengalaman Kerja</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* timeline pengalaman kerja */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/company1.jpg" alt="Company 1" />
                  <AvatarFallback>CP1</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Software Engineer at Company 1</h3>
                  <p className="text-sm text-muted-foreground">Jan 2020 - Present</p>
                  {/* sub penjelasan poin poin */}
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Developed and maintained web applications using React and Node.js</li>
                    <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
                    <li>Participated in code reviews and contributed to team knowledge sharing</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/company2.jpg" alt="Company 2" />
                  <AvatarFallback>CP2</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Frontend Developer at Company 2</h3>
                  <p className="text-sm text-muted-foreground">Jun 2018 - Dec 2019</p>
                  <ul className="list-disc pl-5 mt-1 text-sm text-muted-foreground">
                    <li>Implemented responsive web designs using HTML, CSS, and JavaScript</li>
                    <li>Worked closely with designers to create user-friendly interfaces</li>
                    <li>Optimized web applications for maximum speed and scalability</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Pendidikan</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/university.jpg" alt="University" />
                  <AvatarFallback>UNI</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Bachelor of Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Teknik Komputer, Universitas XYZ</p>
                  <p className="text-sm text-muted-foreground">Graduated: 2018</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Proyek</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/project1.jpg" alt="Project 1" />
                  <AvatarFallback>PR1</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Project Management Tool</h3>
                  <p className="text-sm text-muted-foreground">A web application for managing projects and tasks.</p>
                  <Button variant="link" onClick={() => router.visit('/projects/1')}>View Project</Button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/project2.jpg" alt="Project 2" />
                  <AvatarFallback>PR2</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">E-commerce Website</h3>
                  <p className="text-sm text-muted-foreground">An online store built with React and Node.js.</p>
                  <Button variant="link" onClick={() => router.visit('/projects/2')}>View Project</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Sertifikasi</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/certificate1.jpg" alt="Certificate 1" />
                  <AvatarFallback>C1</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Certified React Developer</h3>
                  <p className="text-sm text-muted-foreground">Issued by XYZ Institute</p>
                  <p className="text-sm text-muted-foreground">Date: Jan 2022</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/certificate2.jpg" alt="Certificate 2" />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Full Stack Web Development</h3>
                  <p className="text-sm text-muted-foreground">Issued by ABC Academy</p>
                  <p className="text-sm text-muted-foreground">Date: Jun 2021</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full mt-4 mb-8">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <h2 className="text-lg font-semibold">Penghargaan</h2>
              <Button variant="outline" size="sm" onClick={() => router.visit('/profile/edit')}>
                <Pencil />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/award1.jpg" alt="Award 1" />
                  <AvatarFallback>A1</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Best Developer Award</h3>
                  <p className="text-sm text-muted-foreground">Awarded by Tech Conference 2023</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/avatars/award2.jpg" alt="Award 2" />
                  <AvatarFallback>A2</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Innovation in Tech Award</h3>
                  <p className="text-sm text-muted-foreground">Awarded by XYZ Organization</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* card about */}

    </AppLayout>
  )
}
