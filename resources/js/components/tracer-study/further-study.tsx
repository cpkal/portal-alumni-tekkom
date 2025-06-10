import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

type FurtherStudyProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  isSubmitted?: boolean;
};

export default function FurtherStudy({ currentPage, setCurrentPage, totalPages, isSubmitted }: FurtherStudyProps) {
  const [isContinuingFurtherStudy, setContinuingFurtherStudy] = useState<string>('yes');

  useEffect(() => {
    if(localStorage.getItem('continuing_study') === null) {
      localStorage.setItem('continuing_study', 'yes');
    }
    setContinuingFurtherStudy(localStorage.getItem('continuing_study') ?? 'yes');
  }, []);

  const { tracer } : any = usePage().props;

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Study Lanjut</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="continuing_study">Apakah Anda melanjutkan studi setelah lulus? (Ya/Tidak)</label>
          <RadioGroup disabled={isSubmitted} defaultValue={ isSubmitted ? (tracer.is_continuing_study ? 'yes' : 'no') : localStorage.getItem('continuing_study') ?? 'yes' } id="continuing_study" onValueChange={(val) => {
            setContinuingFurtherStudy(val)
            localStorage.setItem('continuing_study', val)
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" checked={isContinuingFurtherStudy === 'yes'} />
              <Label htmlFor="yes">Ya</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" checked={isContinuingFurtherStudy === 'no'} />
              <Label htmlFor="no">Tidak</Label>
            </div>
          </RadioGroup>
        </div>

        {isContinuingFurtherStudy == 'yes' ? (
          <>
            <div className="flex flex-col gap-3">
              <Label htmlFor="institution_name">Nama Institusi</Label>
              <Input
                disabled={isSubmitted}
                id="institution_name"
                type="text"
                autoComplete="institution_name"
                defaultValue={ isSubmitted ? tracer.institution_name : localStorage.getItem('institution_name') ?? ''}
                onChange={(e) => localStorage.setItem('institution_name', e.target.value)}
                required

                placeholder="Ex. Harvard University"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="major">Program Studi</Label>
              <Input
                disabled={isSubmitted}
                id="major"
                type="text"
                autoComplete="major"
                defaultValue={ isSubmitted ? tracer.major : localStorage.getItem('major') ?? ''}
                onChange={(e) => localStorage.setItem('major', e.target.value)}
                placeholder="Ex. Magister Fisika"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="education_level">Jenjang Pendidikan</Label>
              <Input
                disabled={isSubmitted}
                id="education_level"
                type="text"
                autoComplete="education_level"
                defaultValue={ isSubmitted ? tracer.education_level : localStorage.getItem('education_level') ?? ''}
                onChange={(e) => localStorage.setItem('education_level', e.target.value)}
                placeholder="Ex. Magister / S2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="is_further_study_related_to_major">Apakah studi lanjut Anda relevan dengan bidang studi S1 Anda? (Ya/Tidak)</label>
              <RadioGroup disabled={isSubmitted} defaultValue={ isSubmitted ? (tracer.is_further_study_related_to_major ? 'yes' : 'no') : localStorage.getItem('is_further_study_related_to_major') ?? ''} id="is_further_study_related_to_major" onValueChange={(val) => {
                localStorage.setItem('is_further_study_related_to_major', val);
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
          </>
        ) : ""}
      </CardContent>

      <CardFooter className="flex gap-2 justify-end">
        <Button variant='outline' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Kembali</Button>
        <Button variant="default" disabled={currentPage === totalPages} onClick={() => {
          setCurrentPage(currentPage + 1)
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Lanjut
        </Button>
      </CardFooter>
    </Card>
  );
}