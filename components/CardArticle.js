import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardArticle = () => {
  return (
    <div className="shadow-md bg-white rounded-md p-5 flex flex-col gap-1">
      <div className="font-bold text-lg">Lorem ipsum dolor sit amet.</div>
      <div className="flex justify-between text-sm mb-2">
        <div>
          <div>
            22-02-21 by{" "}
            <span className="text-blue-500 font-semibold cursor-pointer">
              John Doe
            </span>
          </div>
        </div>
        <div className="flex gap-1 text-xs italic">
          <div>
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div>341 dilihat</div>
        </div>
      </div>
      <div className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        voluptas quam fugiat sequi cum veniam provident vitae a inventore sed
        laborum, quidem, est suscipit molestias nam. Eaque ullam dolore deleniti
        nihil omnis, commodi accusamus. Laboriosam cum nam nostrum tenetur
        cumque minima autem commodi nisi, aspernatur architecto consectetur
        rerum. Optio, amet!
      </div>
    </div>
  );
};

export default CardArticle;
