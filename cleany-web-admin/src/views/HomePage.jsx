import Content from "../components/Content";
import AddNewProduct from "../components/Content";
import SideBar from "../components/SideBar";

export default function HomePage() {
  return (
    <div className="bg-white w-screen h-screen flex flex-row">
      <div class="basis-1/6 bg-[#2D9CDB]">
        <SideBar />
      </div>
      <div class="basis-5/6 flex flex-row w-full">
        <Content />
      </div>
    </div>
  );
}
