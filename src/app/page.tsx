import DarkAndLightButton from "@/components/DarkAndLightButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full transition-all p-1.5 sm:p-4 pt-10 sm:pt-12 bg-stone-100 dark:bg-stone-900">
      <div className="border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex  justify-between gap-3 ">
          <p className="text-xl font-semibold">DevInfo</p>
          <DarkAndLightButton />
        </section>
      </div>
    </div>
  );
}
