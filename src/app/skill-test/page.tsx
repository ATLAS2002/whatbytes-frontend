import { LeftSection } from "@/components/skill-test/left-section";
import { RightSection } from "@/components/skill-test/right-section";

export default function Home() {
  return (
    <main className="bg-white h-fit w-full lg:p-8 lg:pl-12 p-4">
      <h1 className="lg:block hidden text-slate-700 text-lg font-sans mb-8">
        Skill Test
      </h1>
      <div className="w-full h-full flex lg:flex-row flex-col lg:gap-12 gap-4">
        <LeftSection />
        <RightSection />
      </div>
    </main>
  );
}
