import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

const BlogCardSkeleton = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className="w-full"
  >
    <Card className="h-full flex flex-col shadow-xl/20">
      <CardHeader className="flex flex-col text-start w-full gap-1">
        <Skeleton className="h-6 w-2/5 mb-2" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-5 w-14 rounded-full" />
      </CardContent>
    </Card>
  </motion.div>
);

export const BlogsPageSkeleton = () => (
  <div className="flex flex-row flex-wrap items-center gap-2">
    {Array.from({ length: 4 }, (_, i) => (
      <BlogCardSkeleton key={i} delay={i * 0.1} />
    ))}
  </div>
);
