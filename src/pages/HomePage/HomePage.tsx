import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { BASE_URL } from "@/constants";

export const HomePage = () => {
  return (
    <Card className="w-full min-w-3xl">
      <CardHeader className="text-start">
        <Typography.H4 className="pb-2"> Phạm Trung Kiên </Typography.H4>
        <img
          src={`${BASE_URL}/kien-with-flower.jpg`}
          alt="Kien at Nabana no Sato flower garden, Japan"
          className="w-180 mx-auto shadow-2xl rounded-sm"
        />
        <Typography.Muted className="mx-auto font-thin text-gray-500">
          Kien at Nabana no Sato, Japan in Jan, 2023
        </Typography.Muted>
      </CardHeader>
      <CardContent className="flex flex-col text-start gap-2">
        {/* Who Am I */}
        <Typography.Large>Who am I</Typography.Large>
        <Typography.Small className="font-thin leading-5">
          I'm Kien Pham, a Software Engineer at Nanoputian. I develop and
          monitor integration solutions across Workforce Management, Timesheets,
          Payroll, HRIS, and ERP ecosystem. Besides, I'm also responsible for
          building and improving the company's internal products. It seems like
          a boring job; however, I think I actually enjoy it! Building
          integrations is like solving ad-hoc communication problems for
          systems, and once you get them talking to each other, you tend to gain
          some sort of satisfaction and have some fun.
        </Typography.Small>
        <Typography.Small className="font-thin leading-5">
          My early passion in high school was doing Competitive Programming.
          Yes, if you are not familiar with the term, it's somewhat similar to
          Leetcode or SWE interview questions. I love the satisfaction after
          solving a problem, and this satisfaction gradually became a love for
          beautiful algorithms and techniques. Thinking back, I believe such an
          early exposure to a subset of Computer Science definitely sparked my
          curiosity about the broader universe of computing.
        </Typography.Small>
        <Typography.Small className="font-thin leading-5">
          I graduated with a bachelor of Computer Science from Queensland
          University of Technology, where I spent a few semester working as a
          research assistant. After graduating, I used to have the thought of
          doing a PhD or Master in Quantum Computing or Computer Science but
          unfortunately, this plan is cancelled or postponed to the far future.
          There are things that I need to do first.
        </Typography.Small>

        {/* What is this site */}
        <Typography.Large className="pt-4">What is this site</Typography.Large>
        <Typography.Small className="font-thin leading-5">
          This is my log book, where I store my thoughts and comments on various
          aspects of life. Expect reviews of books, solutions for interesting
          problems, or at least interesting to me, discussions on Computer
          Science topics, and maybe beautiful images.
        </Typography.Small>

        {/* How to contact me */}
        <Typography.Large className="pt-4">How to contact me</Typography.Large>
        <Typography.Small className="font-thin leading-5">
          If you have any questions, want to discuss further on a topic, or
          simply just want to say hi. You can email me directly or connect with
          me on LinkedIn through various links I placed on my website. Please
          feel encouraged to do any of the above!
        </Typography.Small>
      </CardContent>
    </Card>
  );
};
