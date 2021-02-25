import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 mt-10 flex gap-2 items-center justify-center bg-white shadow-lg absolute bottom-0 w-full text-gray-600 text-sm">
      <div>Copyright © 2021</div>
      <div>
        <a
          href="https://github.com/kukuhpribadi/tambora-admin-template"
          className="font-bold"
          target="_blank"
        >
          source code <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
