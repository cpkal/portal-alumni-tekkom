
type ProgressStepperProps = {
  currentPage: number;
};

export default function ProgressStepper({ currentPage } : ProgressStepperProps) {
  const circleStepActive = 'bg-foreground text-black';
  const circleStepInactive = 'bg-background text-foreground';

  return (
    <div className="flex flex-row gap-4 w-full justify-around mx-auto mt-8">
      <div className="flex flex-col gap-2 items-center">
        <div className={`${currentPage === 1 ? circleStepActive : circleStepInactive} w-12 h-12 border rounded-full flex items-center justify-center text-semibold text-xl`}>1</div>
        <span>Personal Info</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className={`${currentPage === 2 ? circleStepActive : circleStepInactive} w-12 h-12 border rounded-full flex items-center justify-center text-semibold text-xl`}>2</div>
        <span>Media Sosial</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className={`${currentPage === 3 ? circleStepActive : circleStepInactive} w-12 h-12 border rounded-full flex items-center justify-center text-semibold text-xl`}>3</div>
        <span>Studi Lanjut</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className={`${currentPage === 4 ? circleStepActive : circleStepInactive} w-12 h-12 border rounded-full flex items-center justify-center text-semibold text-xl`}>4</div>
        <span>Karir</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className={`${currentPage === 5 ? circleStepActive : circleStepInactive} w-12 h-12 border rounded-full flex items-center justify-center text-semibold text-xl`}>3</div>
        <span>Evaluasi Pendidikan</span>
      </div>
    </div>
  )
}