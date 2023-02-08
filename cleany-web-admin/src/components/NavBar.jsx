import { faHome, faPeopleLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faPeopleLine}
          color="dark"
          size="2x"
          className="mt-7 mr-8"
        />
        <h1 className="mt-8 mr-8">John Doe</h1>
      </div>
    </div>
  );
}
