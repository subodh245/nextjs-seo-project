import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="h-[274px] w-full rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-full sm:w-[356px] rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] rounded-lg bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse" />
        </div>
      </section>
    </main>
  );
};

export default loading;
