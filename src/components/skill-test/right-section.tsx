import { QuestionAnalysis } from "./question-analysis";
import { SyllabusAnalysis } from "./syllabus-analysis";

export const RightSection = () => {
  return (
    <section className="lg:w-2/5 w-full h-full flex flex-col gap-4">
      <SyllabusAnalysis />
      <QuestionAnalysis />
    </section>
  );
};
