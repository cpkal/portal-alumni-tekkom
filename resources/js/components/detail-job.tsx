import { Building, Clock, DollarSign, DoorOpen, MapPin, Verified, X } from "lucide-react";
import { Button } from "./ui/button";

export default function DetailJob({ detailJob, setShowDetail, goToJobApplication }: any) {
  return (
    <div className="w-3/5">
      <div className="sticky top-16 z-10 overflow-y-scroll h-[calc(100vh-4rem)] pb-0">
        <div className="relative">
          <X className="absolute top-2 right-2 bg-background rounded-full hover:cursor-pointer" onClick={() => setShowDetail(false)} />
          <img className="rounded-t-md" src={detailJob.job_banner ? '/storage/' + detailJob.job_banner : 'https://placehold.co/940x336'} alt="" />
        </div>
        <div className="my-4">
          <p className="text-2xl font-medium">{detailJob?.job_title}</p>
          <p className="flex gap-2">{detailJob?.company_name} <Verified /> </p>

          <div className="flex flex-col gap-2 mt-3">
            <div className="flex gap-2">
              <MapPin />
              <p>{detailJob?.location}</p>
            </div>
            <div className="flex gap-2">
              <Building />
              <p>{detailJob?.job_title}</p>
            </div>
            <div className="flex gap-2">
              <Clock />
              <p>{detailJob?.employment_type_formatted}</p>
            </div>
            <div className="flex gap-2">
              <DoorOpen />
              <p>{detailJob?.job_type_formatted}</p>
            </div>
            <div className="flex gap-2">
              <DollarSign />
              <p>{detailJob?.salary_start_rupiah} - {detailJob?.salary_end_rupiah} {detailJob?.salary_period}</p>
            </div>

            <div>
              <p className="my-2 font-semibold">Qualifications</p>
              {detailJob?.qualifications}
            </div>

            <div>
              <p className="my-2 font-semibold">About</p>
              {detailJob?.job_description}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 p-3 bg-background border mt-auto">
          <Button className="w-full" onClick={() => goToJobApplication(detailJob?.apply_link)}>
            Lamar Sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}