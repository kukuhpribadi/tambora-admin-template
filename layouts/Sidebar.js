import LinkSidebar from "../components/LinkSidebar";
import {
  faFileAlt,
  faHome,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-red-500 flex flex-col items-center gap-10">
      {/* brand */}
      <div className=" h-16 w-full flex items-center justify-center">
        <h1 className="font-bold text-white text-3xl">tambora.</h1>
      </div>
      {/* menu wrapper */}
      <div className=" w-full flex flex-col gap-7">
        {/* menu */}
        <LinkSidebar icon={faHome} nama="beranda" />
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
