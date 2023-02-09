import logoHome from "../assets/cleany-logo.png";
import {
  faHome,
  faFile,
  faMoneyBill,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBarMenu() {
  const sideBarMenuData = [
    {
      logo: faHome,
      title: "Home",
      style: "flex flex-row h-16 mt-5",
      logoColor: "white",
      textColor: "text-white ",
    },
    {
      logo: faFile,
      title: "Products",
      style:
        "bg-white flex flex-row h-16 mt-5 w-11/12 ml-auto mr-auto rounded-xl border-2 ",
      logoColor: "#2D9CDB",
      textColor: "text-[#2D9CDB]",
    },
    {
      logo: faMoneyBill,
      title: "Sales",
      style: "flex flex-row h-16 mt-5",
      logoColor: "white",
      textColor: "text-white ",
    },
    {
      logo: faGear,
      title: "Setting",
      style: "flex flex-row h-16 mt-5",
      logoColor: "white",
      textColor: "text-white ",
    },
  ];

  return (
    <div>
      <h1 className="text-xl ml-9 text-white font-bold">Menu</h1>
      {sideBarMenuData.map((e) => (
        <>
          <div className={e.style}>
            <div className="basis-2/5 flex">
              <div className="my-auto mx-auto">
                <FontAwesomeIcon icon={e.logo} color={e.logoColor} size="2x" />
              </div>
            </div>
            <div className="basis-3/5 mt-auto mb-auto text-2xl text-white font-bold">
              <h1 className={e.textColor}>{e.title}</h1>
            </div>
          </div>
        </>
      ))}
      {/* <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faFile} />
      <FontAwesomeIcon icon={faMoneyBill} />
      <FontAwesomeIcon icon={faGear} /> */}
    </div>
  );
}
