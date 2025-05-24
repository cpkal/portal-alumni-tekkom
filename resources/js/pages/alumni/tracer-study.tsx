import { Card, CardContent, CardFooter } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import PersonalInformation from "@/components/tracer-study/personal-information";
import ProgressStepper from "@/components/tracer-study/progress-stepper";
import SocialMediaInformation from "@/components/tracer-study/social-media-information";
import FurtherStudy from "@/components/tracer-study/further-study";
import CareerInformation from "@/components/tracer-study/career-information";
import EducationEvaluation from "@/components/tracer-study/education-evaluation";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function TracerStudyPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Assuming there are 5 steps in the tracer study

  useEffect(() => {
    console.log(currentPage)
  }, [currentPage]);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />
      <div className="flex flex-col gap-4 px-5">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-xl">Tracer Study Form</h1>
            <p>Help us improve by sharing your progress after graduation.</p>
          </div>

          <div className="sticky top-8 z-10">
            <p>Status:  <Badge>Not Submitted</Badge> </p>
          </div>
        </div>

        {/* timeline progression steps */}
        <ProgressStepper currentPage={currentPage} />
      </div>

      <div className="w-2/3 mx-auto mt-12">

        {currentPage === 1 ? (
          <PersonalInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        ) : currentPage === 2 ? (
          <SocialMediaInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        ) : currentPage === 3 ? (
          <FurtherStudy currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        ) : currentPage === 4 ? (
          <CareerInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        ) : currentPage === 5 ? (
          <EducationEvaluation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        ) : ''}

        <Alert variant='default' className="my-12">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Please complete all required fields to proceed to next step
          </AlertDescription>
        </Alert>
      </div>
    </AppLayout>
  );
}