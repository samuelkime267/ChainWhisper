import building from "@/assets/imgs/building.jpg";
import {
  ClipPathTest,
  FancyShape,
  StarDesign,
  StarDesignShort,
} from "@/components/icons";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen gap-8 flex-wrap">
      <div className="aspect-[4/5] w-96 p-3 bg-[#4c4b50] rounded-2xl flex items-center justify-center relative">
        <div className="relative aspect-[4/5] w-full h-auto overflow-hidden">
          <StarDesign className="absolute top-[1%] left-[1.5%] text-white size-8" />
          <StarDesignShort className="absolute top-0 right-0 text-white size-5" />
          <ClipPathTest src={building.src} className="w-full h-full" />
        </div>

        <div className="absolute left-0 bottom-0 w-full p-6">
          <div className="flex items-end justify-end flex-col gap-2 bg-white rounded-lg p-3">
            <h6 className="font-audio text-xl">
              This is the title that will be given to the anonymous message
            </h6>
            <p className="font-light text-xs">
              Lorem ipsum dolor sit amet consectetur. Convallis sit amet mauris
              amet neque. Diam eget pellentesque purus neque dictum massa. Quis
              gravida ullamcorper et et egestas sed convallis mauris volutpat.
              Purus massa magna diam mattis tristique at lobortis est.
            </p>
          </div>
        </div>
      </div>
      <div className="aspect-[4/5] w-96 p-3 bg-[#4c4b50] rounded-2xl flex items-center justify-center relative">
        <div className="relative aspect-[4/5] w-full h-auto overflow-hidden">
          <StarDesign className="absolute top-[1%] left-[1.5%] text-white size-8" />
          <StarDesignShort className="absolute top-0 right-0 text-white size-5" />
          <FancyShape className="w-full h-full text-white" />

          <div className="absolute left-0 bottom-0 w-full h-full">
            <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-3 relative">
              <div className="absolute top-[8%] right-[8%]">
                <StarDesign className="size-8 text-[#4c4b50]" />
              </div>

              <h6 className="font-audio text-4xl text-[#4c4b50]">
                ChainWhisper
              </h6>

              <div className="absolute bottom-0 left-0 w-full p-2 flex items-center justify-between">
                <div className="size-8 flex items-center justify-center rounded-full bg-[#4c4b50]">
                  <p className="!font-audio text-white">?</p>
                </div>

                <StarDesign className="size-8 text-[#4c4b50]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
