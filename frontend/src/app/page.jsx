import Image from "next/image";
import Payment from "../components/Payment";
import "./app.css"

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 md:col-span-3 lg:col-span-2 h-screen">
        <Image className="h-screen object-cover" src="/autumn1080p.jpg" height={1080} width={1920} />
      </div>
      <div className="m-4 p-4 col-span-3 lg:col-span-1">
       <Payment />
      </div>
    </div>
  );z
}