import Image from "next/image";
import Payment from "../components/Payment";
import NumberPicker from "@/components/NumberPicker";
import Stepper from "@/components/giveway/Stepper";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-3 md:col-span-3 lg:col-span-2">
          <Image className="h-screen object-cover" src="/autumn1080p.jpg" height={1080} width={1920} />
        </div>
        <div className="m-4 p-4 col-span-3 lg:col-span-1">
          <Stepper />
        </div>
      </div>
    </div>
  );
}