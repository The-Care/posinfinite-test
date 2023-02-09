import CreateProduct from "./CreateProduct";
import NavBar from "./NavBar";

export default function Content() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="basis-24 bg-white h-100">
        <NavBar />
      </div>
      <div className="basis-full h-screen ">
        <CreateProduct />
      </div>
    </div>
  );
}
