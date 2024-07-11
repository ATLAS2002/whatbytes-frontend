import { ComparisonGraph } from "./comparison-graph";
import { QuickStats } from "./quick-stat";
import { TestInfo } from "./test-info";

export const LeftSection = () => {
  return (
    <section className="lg:w-3/5 w-full lg:h-full h-fit flex flex-col gap-4">
      <TestInfo />
      <QuickStats />
      <ComparisonGraph />
    </section>
  );
};
