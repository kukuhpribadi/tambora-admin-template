import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 mt-10 flex items-center justify-center bg-white shadow-lg absolute bottom-0 w-full">
      <div className="text-gray-600 text-sm">
        Copyright © 2021 |
        <a
          href="https://github.com/kukuhpribadi/tambora-admin-template"
          className="font-bold"
          target="_blank"
        >
          {" "}
          source code <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
