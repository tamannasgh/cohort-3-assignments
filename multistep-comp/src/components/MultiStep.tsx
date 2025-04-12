type MultiStepProps = {
  children: React.ReactNode;
}

function MultiStep({children}: MultiStepProps) {
  return (
    <div>
      <h1>MultiStep Component</h1>
      {children}
    </div>
  );
}

export default MultiStep;