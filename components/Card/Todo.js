import {
  faBug,
  faChalkboardTeacher,
  faEllipsisH,
  faEnvelope,
  faRunning,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="card bg-white shadow-md rounded-md overflow-hidden text-gray-600">
      {/* header */}
      <div className=" flex justify-between items-center px-5 h-16 ">
        <div className="font-bold ">Jadwal hari ini</div>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      </div>
      {/* body */}
      <div className="px-5 pt-2 pb-5  flex flex-col gap-5">
        {/* todo-list */}
        <TodoList
          aktifitas="Lari pagi"
          jam="06.00-07.00"
          warna="green"
          icon={faRunning}
        />
        <TodoList
          aktifitas="Cek email"
          jam="07.00-08.00"
          warna="red"
          icon={faEnvelope}
        />
        <TodoList
          aktifitas="Fix card header"
          jam="09.00-12.00"
          warna="yellow"
          icon={faBug}
        />
        <TodoList
          aktifitas="Rapat client"
          jam="13.00-14.30"
          warna="blue"
          icon={faUsers}
        />
        <TodoList
          aktifitas="Webinar"
          jam="19.00-selesai"
          warna="purple"
          icon={faChalkboardTeacher}
        />
      </div>
    </div>
  );
};

export default Todo;
