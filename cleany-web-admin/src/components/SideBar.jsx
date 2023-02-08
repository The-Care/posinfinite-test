import logo from "../assets/cleany-logo.png";
import SideBarMenu from "./SideBarMenu";

export default function SideBar() {
  return (
    <div className="flex flex-col w-100 h-screen ">
      <div className="basis-40 h-100 flex flex-row">
        <div className="basis-4/12 mt-auto mb-auto mr-auto">
          <img
            className="rounded-full w-6/12 h-6/12 ml-auto mr-auto"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="basis-8/12 mt-auto mb-auto text-xl">
          <h1 className="font-bold text-white">Cleany Dashboard</h1>
        </div>
      </div>
      <div className="basis-full mt-5">
        <SideBarMenu />
      </div>
    </div>
  );
}
