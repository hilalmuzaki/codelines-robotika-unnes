import { Outlet } from "react-router-dom";
import PrimaryNav from "../navigations/PrimaryNav";

export default function PrimaryLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-green-100 text-black">
      <PrimaryNav />
      <main className="flex flex-1 flex-col pt-[60px] pb-20 gap-[36px] lg:gap-[64px]">
        <Outlet />
      </main>
    </div>
  );
}