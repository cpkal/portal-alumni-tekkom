import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditBioModal } from "@/components/edit-bio-modal";
import { EditAboutMeModal } from "@/components/edit-about-me-modal";
import BioSection from "@/components/profile/bio-section";
import AboutMeSection from "@/components/profile/about-me-section";
import { useState } from "react";
import { AddExperienceModal } from "@/components/experience/add-experience-modal";
import { EditExperienceModal } from "@/components/experience/edit-experience-modal";
import ExperienceSection from "@/components/profile/experience-section";
import { AddEducationModal } from "@/components/education/add-education-modal";
import { EditEducationModal } from "@/components/education/edit-education-modal";
import EducationSection from "@/components/profile/education-section";
import { AddProjectModal } from "@/components/project/add-project-modal";
import { EditProjectModal } from "@/components/project/edit-project-modal";
import ProjectSection from "@/components/profile/project-section";
import DetailAlumniCard from "@/components/detail-alumni-card";


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function MePage({
  user,
  showEditBio,
  showEditShortDesc,
  showAddExperience,
  showEditExperience,
  showAddEducation,
  showEditEducation,
  education,
  experience,
  showAddProject,
  showEditProject,
  project
}:
  {
    user: any,
    showEditBio: boolean,
    showEditShortDesc: boolean,
    showAddExperience: boolean,
    showEditExperience: any,
    experience: any,
    showAddEducation: boolean,
    showEditEducation: boolean,
    education: any,
    showAddProject: boolean,
    showEditProject: boolean,
    project: any,
  }) {

  const [editExperience, setEditExperience] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editProject, setEditProject] = useState(false);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Me" />

      {showEditBio && (
        <EditBioModal show={showEditBio} user={user} />
      )}

      {showEditShortDesc && (
        <EditAboutMeModal show={showEditShortDesc} user={user} />
      )}

      {showAddExperience && (
        <AddExperienceModal show={showAddExperience} user={user} />
      )}

      {showEditExperience && (
        <EditExperienceModal show={showEditExperience} user={user} experience={experience} />
      )}

      {showAddEducation && (
        <AddEducationModal show={showAddEducation} user={user} />
      )}

      {showEditEducation && (
        <EditEducationModal show={showEditEducation} user={user} education={education} />
      )}

      {showAddProject && (
        <AddProjectModal show={showAddProject} user={user} />
      )}

      {showEditProject && (
        <EditProjectModal show={showEditProject} user={user} project={project} />
      )}

      <div className="flex">
        <div className="mx-4 w-2/3">
          <BioSection user={user} />
          <AboutMeSection user={user} />
          <ExperienceSection user={user} editExperience={editExperience} setEditExperience={setEditExperience} />
          <EducationSection user={user} editEducation={editEducation} setEditEducation={setEditEducation} />
          <ProjectSection user={user} editProject={editProject} setEditProject={setEditProject} />

          {/* <Card className="w-full mt-4">
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
        </Card> */}
        </div>

        <div className="w-1/3">
          <DetailAlumniCard alumni={user.alumni} isPreview={true} />
        </div>
      </div>

      {/* card about */}

    </AppLayout>
  )
}
