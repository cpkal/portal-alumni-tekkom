import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { Badge } from "@/components/ui/badge";
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

type TracerStudyPageProps = {
  tracer: any; // Replace with actual type
  is_user_has_submitted_tracer_study?: boolean;
};

export default function TracerStudyPage({ tracer, is_user_has_submitted_tracer_study }: TracerStudyPageProps) {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Assuming there are 5 steps in the tracer study  

  // if user has submitted tracer study, show alert


  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tracer Study" />

      {/* dialog if user has submitted to thanks for the participation */}


      <div className="flex flex-col gap-4 px-5">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-xl">Formulir Tracer Study</h1>

            <p>Bantu TEKKOM dengan sharing kegiatan setelah lulus</p>

          </div>


          <div className="sticky top-8 z-10">
            <p>
              Status: &nbsp;
              {is_user_has_submitted_tracer_study ? (
                <Badge className="bg-green-500">Submitted</Badge>
              ) : (
                <Badge>Not Submitted</Badge>
              )}
            </p>
          </div>
        </div>

        {/* timeline progression steps */}
        <ProgressStepper currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <div className="w-2/3 mx-auto mt-12">

        {is_user_has_submitted_tracer_study && (
          <Alert className="my-4">
            <AlertTitle>Terima kasih!</AlertTitle>
            <AlertDescription>
              Terima kasih telah mengisi Tracer Study. Partisipasi Anda sangat berharga bagi kami.
            </AlertDescription>
          </Alert>
        )}

        {currentPage === 1 ? (
          <PersonalInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} isSubmitted={is_user_has_submitted_tracer_study} />
        ) : currentPage === 2 ? (
          <SocialMediaInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} isSubmitted={is_user_has_submitted_tracer_study} />
        ) : currentPage === 3 ? (
          <FurtherStudy currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} isSubmitted={is_user_has_submitted_tracer_study} />
        ) : currentPage === 4 ? (
          <CareerInformation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} isSubmitted={is_user_has_submitted_tracer_study} />
        ) : currentPage === 5 ? (
          <EducationEvaluation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} isSubmitted={is_user_has_submitted_tracer_study} />
        ) : ''}

        {!is_user_has_submitted_tracer_study && (<Alert variant='default' className="my-12">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>Perhatian!</AlertTitle>
          <AlertDescription>
            Isi semua data yang diperlukan dengan benar sebelum melanjutkan ke halaman berikutnya. Pastikan semua informasi yang diberikan akurat dan lengkap.
          </AlertDescription>
        </Alert>
        )}
      </div>
    </AppLayout>
  );
}