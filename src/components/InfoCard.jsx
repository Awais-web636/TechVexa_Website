import React from "react";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className=" text-white rounded-lg p-4 flex flex-col">
      <div className="text-yellow-300 text-4xl mb-2">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm ">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;