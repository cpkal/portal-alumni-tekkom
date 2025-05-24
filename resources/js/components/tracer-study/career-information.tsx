import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

type CareerInformationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

export default function CareerInformation({ currentPage, setCurrentPage, totalPages }: CareerInformationProps) {
  const [isCurrentlyHaveJob, setJobStatus] = useState<string>('yes');

  useEffect(() => {
    setJobStatus(localStorage.getItem('continuing_working') ?? 'yes');
  }, []);

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Karir</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="continuing_working">Apakah Anda bekerja saat ini? (Ya/Tidak)</label>
          <RadioGroup defaultValue={localStorage.getItem('continuing_working') ?? 'yes'} id="continuing_working" onValueChange={(val) => {
            setJobStatus(val)
            localStorage.setItem('continuing_working', val);
          }}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" checked={isCurrentlyHaveJob === 'yes'} />
              <Label htmlFor="yes">Ya</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" checked={isCurrentlyHaveJob === 'no'} />
              <Label htmlFor="no">Tidak</Label>
            </div>
          </RadioGroup>
        </div>

        {isCurrentlyHaveJob == 'yes' ? (
          <>
            <div className="flex flex-col gap-3">
              <Label htmlFor="company_name">Nama Perusahaan/Instansi</Label>
              <Input
                id="company_name"
                type="text"
                autoComplete="company_name"
                defaultValue={localStorage.getItem('company_name') ?? ''}
                onChange={(e) => localStorage.setItem('company_name', e.target.value)}
                required

                placeholder="Ex. Harvard University"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="company_address">Alamat Perusahaan/Instansi</Label>
              <Input
                id="company_address"
                type="text"
                autoComplete="company_address"
                defaultValue={localStorage.getItem('company_address') ?? ''}
                onChange={(e) => localStorage.setItem('company_address', e.target.value)}
                placeholder="Ex. PT Cahaya xxx"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="job_position">Posisi/Jabatan</Label>
              <Input
                id="job_position"
                type="text"
                autoComplete="job_position"
                defaultValue={localStorage.getItem('job_position') ?? ''}
                onChange={(e) => localStorage.setItem('job_position', e.target.value)}
                placeholder="Ex. Magister / S2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="company_business_field">Bidang Usaha Perusahaan/Instansi</Label>
              <Input
                id="company_business_field"
                type="text"
                autoComplete="company_business_field"
                defaultValue={localStorage.getItem('company_business_field') ?? ''}
                onChange={(e) => localStorage.setItem('company_business_field', e.target.value)}
                placeholder="Ex. Magister / S2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="wait_time_first_job">Berapa lama setelah lulus Anda mendapatkan pekerjaan pertama?</Label>
              <Select defaultValue={localStorage.getItem('wait_time_first_job') ?? ''} onValueChange={(val) => {
                localStorage.setItem('wait_time_first_job', val);
              }}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Waktu tunggu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="1">Kurang dari 1 bulan</SelectItem>
                    <SelectItem value="2">1 – 3 bulan</SelectItem>
                    <SelectItem value="4">6 – 12 bulan</SelectItem>
                    <SelectItem value="3">3 – 6 bulan</SelectItem>
                    <SelectItem value="5">1 – 2 tahun</SelectItem>
                    <SelectItem value="6">2 tahun atau lebih</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <Input
                id="wait_time_first_job"
                type="text"
                autoComplete="wait_time_first_job"
                defaultValue={localStorage.getItem('wait_time_first_job') ?? ''}
                onChange={(e) => localStorage.setItem('wait_time_first_job', e.target.value)}
                placeholder="Ex. 3 Bulan"
              /> */}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="is_job_related_to_major">Apakah studi lanjut Anda relevan dengan bidang studi S1 Anda? (Ya/Tidak)</label>
              <RadioGroup defaultValue="yes" id="is_job_related_to_major" onValueChange={(val) => {
                localStorage.setItem('is_job_related_to_major', val);
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
              <Label htmlFor="monthly_salary">Pendapatan per Bulan</Label>
              <Input
                id="monthly_salary"
                type="text"
                autoComplete="monthly_salary"
                defaultValue={localStorage.getItem('monthly_salary') ?? ''}
                onChange={(e) => localStorage.setItem('monthly_salary', e.target.value)}
                placeholder="Ex. Rp5.000.000"
              />
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