import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useForm, usePage } from '@inertiajs/react'
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { FormEventHandler } from "react";
import { router } from "@inertiajs/react";

type EducationEvaluationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  isSubmitted?: boolean;
};

export default function EducationEvaluation({ currentPage, setCurrentPage, totalPages, isSubmitted }: EducationEvaluationProps) {
  const handleSubmitTracerStudy = (e: React.FormEvent) => {
    e.preventDefault();

    const formValues = {
      full_name: localStorage.getItem('full_name') ?? '',
      nim: localStorage.getItem('nim') ?? '',
      enrollment_year: localStorage.getItem('enrollment_year') ?? '',
      graduation_year: localStorage.getItem('graduation_year') ?? '',
      undergraduate_thesis_title: localStorage.getItem('undergraduate_thesis_title') ?? '',
      address: localStorage.getItem('address') ?? '',
      active_phone_number: localStorage.getItem('active_phone_number') ?? '',
      email: localStorage.getItem('email') ?? '',
      github_name: localStorage.getItem('github_name') ?? '',
      linkedin_name: localStorage.getItem('linkedin_name') ?? '',
      instagram_name: localStorage.getItem('instagram_name') ?? '',
      continuing_study: localStorage.getItem('continuing_study') ?? '',
      institution_name: '',
      major: '',
      education_level: '',
      is_further_study_related_to_major: '',
      continuing_working: localStorage.getItem('continuing_working') ?? '',
      company_name: '',
      company_address: '',
      job_position: '',
      company_business_field: '',
      wait_time_first_job: '',
      is_job_related_to_major: '',
      monthly_salary: '',
      study_satisfaction: localStorage.getItem('study_satisfaction') ?? '',
      curriculum_suitability: localStorage.getItem('curriculum_suitability') ?? '',
      facilities_satisfaction: localStorage.getItem('facilities_satisfaction') ?? '',
      competency_suitability: localStorage.getItem('competency_suitability') ?? '',
      suggestion: localStorage.getItem('suggestion') ?? '',
    };

    if (formValues.continuing_study === 'yes') {
      formValues.institution_name = localStorage.getItem('institution_name') ?? '';
      formValues.major = localStorage.getItem('major') ?? '';
      formValues.education_level = localStorage.getItem('education_level') ?? '';
      formValues.is_further_study_related_to_major = localStorage.getItem('is_further_study_related_to_major') ?? '';
    }

    if (formValues.continuing_working === 'yes') {
      formValues.company_name = localStorage.getItem('company_name') ?? '';
      formValues.company_address = localStorage.getItem('company_address') ?? '';
      formValues.job_position = localStorage.getItem('job_position') ?? '';
      formValues.company_business_field = localStorage.getItem('company_business_field') ?? '';
      formValues.wait_time_first_job = localStorage.getItem('wait_time_first_job') ?? '';
      formValues.is_job_related_to_major = localStorage.getItem('is_job_related_to_major') ?? '';
      formValues.monthly_salary = localStorage.getItem('monthly_salary') ?? '';
    }

    router.post(route('tracer-study.post'), formValues, {
      onError: (err) => console.log(err)
    });
  };

  const { tracer } = usePage().props;

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Evaluasi Pendidikan</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="study_satisfaction">Seberapa puas Anda dengan pendidikan yang Anda terima di   Program Studi Teknik Komputer UPI?<span className="text-red-500">*</span></label>
          <RadioGroup disabled={isSubmitted} defaultValue={localStorage.getItem('study_satisfaction') ?? ''} className="flex" id="study_satisfaction" onValueChange={(val) => {
            localStorage.setItem('study_satisfaction', val);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="4" />
              <Label htmlFor="4">Sangat Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="3" />
              <Label htmlFor="3">Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="2" />
              <Label htmlFor="2">Tidak Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="1" />
              <Label htmlFor="1">Sangat Tidak Puas</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="curriculum_suitability">Apakah kurikulum yang diajarkan sesuai dengan kebutuhan industri?<span className="text-red-500">*</span></label>
          <RadioGroup disabled={isSubmitted} defaultValue={localStorage.getItem('curriculum_suitability') ?? ''} className="flex" id="curriculum_suitability" onValueChange={(val) => {
            localStorage.setItem('curriculum_suitability', val);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="4_c" />
              <Label htmlFor="4_c">Sangat Sesuai</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="3_c" />
              <Label htmlFor="3_c">Sesuai</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="2_c" />
              <Label htmlFor="2_c">Tidak Sesuai</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="1_c" />
              <Label htmlFor="1_c">Sangat Tidak Sesuai</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="facilities_satisfaction">Bagaimana penilaian Anda terhadap fasilitas yang disediakan oleh universitas?<span className="text-red-500">*</span></label>
          <RadioGroup disabled={isSubmitted} defaultValue={localStorage.getItem('facilities_satisfaction') ?? ''} className="flex" id="facilities_satisfaction" onValueChange={(val) => {
            localStorage.setItem('facilities_satisfaction', val);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="4_f" />
              <Label htmlFor="4_f">Sangat Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="3_f" />
              <Label htmlFor="3_f">Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="2_f" />
              <Label htmlFor="2_f">Tidak Puas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="1_f" />
              <Label htmlFor="1_f">Sangat Tidak Puas</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="competency_suitability">Apakah Anda merasa keterampilan yang diajarkan sesuai dengan pekerjaan Anda saat ini?<span className="text-red-500">*</span></label>
          <RadioGroup disabled={isSubmitted} defaultValue={localStorage.getItem('competency_suitability') ?? ''} id="competency_suitability" onValueChange={(val) => {
            localStorage.setItem('competency_suitability', val);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Ya</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">Tidak</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="suggestion">Saran dan Masukan untuk Program Studi Teknik Komputer (opsional)</Label>
          <Textarea
            disabled={isSubmitted}
            id="suggestion"
            autoComplete="suggestion"
            defaultValue={localStorage.getItem('suggestion') ?? ''}
            onChange={(e) => localStorage.setItem('suggestion', e.target.value)}
            placeholder=""
          />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 justify-end">
        <Button variant='outline' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Kembali</Button>
        <form onSubmit={handleSubmitTracerStudy}>
          <Button variant="default" disabled={isSubmitted}>
            Simpan
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}