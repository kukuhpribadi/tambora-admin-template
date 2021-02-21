import LinkSidebar from "../components/LinkSidebar";
import {
  faEnvelope,
  faFileAlt,
  faHome,
  faMountain,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-red-500 flex flex-col items-center gap-5">
      {/* brand */}
      <div className="h-16 lg:h-20 w-full flex items-center justify-center text-white ">
        <h1 className="font-extrabold hidden md:flex md:text-xl lg:text-4xl">
          tambora.
        </h1>
        <FontAwesomeIcon icon={faMountain} className="md:hidden" />
      </div>
      {/* menu wrapper */}
      <div className="w-full flex flex-col gap-7 text-lg md:text-sm lg:text-base">
        {/* menu */}
        <LinkSidebar icon={faHome} nama="beranda" />
        <LinkSidebar icon={faEnvelope} nama="pesan" notifIcon="15" />
        <LinkSidebar
          icon={faPuzzlePiece}
          nama="Komponen"
          childMenu={["badge", "button", "card", "search"]}
        />
        <LinkSidebar
          icon={faFileAlt}
          nama="halaman"
          childMenu={["blank", "404", "login", "register"]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
