type ProgressBarProps = {
  totalSteps: number;
  currentStep: number;
  bgColor?: string;
  progressColor?: string;
}

function ProgressBar({totalSteps, currentStep, bgColor = "white", progressColor = "black"} : ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div className={`w-full h-2 rounded-full border overflow-hidden`} style={{backgroundColor: bgColor}}>
      <div className={`h-full rounded-full transition-all ease-in-out duration-300`} style={{backgroundColor: progressColor, width: `${progress}%` }}></div>
    </div>
  );
}

export default ProgressBar;