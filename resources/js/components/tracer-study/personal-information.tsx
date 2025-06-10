import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

type PersonalInformationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  isSubmitted?: boolean;
};

type PersonalInformation = {
  full_name: string;
  nim: string;
  enrollment_year: string;
  graduation_year: string;
  undergraduate_thesis_title: string;
  address: string;
  active_phone_number: string;
  email: string;
};

export default function PersonalInformation({ currentPage, setCurrentPage, totalPages, isSubmitted }: PersonalInformationProps) {
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(true);

  const { tracer }: any = usePage().props;

  return (
    <Card>
      <CardHeader>
        <p className="text-xl font-semibold">Info Personal</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="full_name">Nama Lengkap<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="full_name"
            type="text"
            autoComplete="full_name"
            defaultValue={isSubmitted ? tracer.full_name : localStorage.getItem('full_name') ?? ''}
            onChange={(e) => localStorage.setItem('full_name', e.target.value)}
            required

            placeholder="Ex. Sandi Setiawan"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="nim">Nomor Induk Mahasiswa (NIM)<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="nim"
            type="text"
            autoComplete="nim"
            defaultValue={isSubmitted ? tracer.nim : localStorage.getItem('nim') ?? ''}
            onChange={(e) => localStorage.setItem('nim', e.target.value)}
            placeholder="Ex. 2309xxx"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="enrollment_year">Tahun Masuk<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="enrollment_year"
            type="text"
            autoComplete="enrollment_year"
            defaultValue={isSubmitted ? tracer.enrollment_year : localStorage.getItem('enrollment_year') ?? ''}
            onChange={(e) => localStorage.setItem('enrollment_year', e.target.value)}
            placeholder="Ex. 2020"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="graduation_year">Tahun Lulus<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="graduation_year"
            type="text"
            autoComplete="graduation_year"
            defaultValue={isSubmitted ? tracer.graduation_year : localStorage.getItem('graduation_year') ?? ''}
            onChange={(e) => localStorage.setItem('graduation_year', e.target.value)}
            placeholder="Ex. 2024"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="undergraduate_thesis_title">Judul Skripsi (opsional)</Label>
          <Input
            disabled={isSubmitted}
            id="undergraduate_thesis_title"
            type="text"
            defaultValue={isSubmitted ? tracer.undergraduate_thesis_title : localStorage.getItem('undergraduate_thesis_title') ?? ''}
            onChange={(e) => localStorage.setItem('undergraduate_thesis_title', e.target.value)}
            placeholder="Ex. Rancang Bangun xxx" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="address">Alamat<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="address"
            type="text"
            defaultValue={isSubmitted ? tracer.address : localStorage.getItem('address') ?? ''}
            onChange={(e) => localStorage.setItem('address', e.target.value)}
            placeholder="Ex. Jl. Panyileukan Gg. Sukarsari"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="active_phone_number">Nomor Telepon<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="active_phone_number"
            type="text"
            defaultValue={isSubmitted ? tracer.active_phone_number : localStorage.getItem('active_phone_number') ?? ''}
            onChange={(e) => localStorage.setItem('active_phone_number', e.target.value)}
            placeholder="Ex. 08231xxxx"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email<span className="text-red-500">*</span></Label>
          <Input
            disabled={isSubmitted}
            id="email"
            type="email"
            defaultValue={isSubmitted ? tracer.email : localStorage.getItem('email') ?? ''}
            onChange={(e) => localStorage.setItem('email', e.target.value)}
            placeholder="Ex. sandi.setiawan@upi.edu"
          />
        </div>
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