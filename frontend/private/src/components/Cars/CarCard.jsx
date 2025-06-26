import React from "react";
import "../../styles/CarCard.css"
import { FiEdit2 } from "react-icons/fi";
import { CgTrashEmpty } from "react-icons/cg";

const CarCard = ({
  price,
  brand,
  model,
  year,
  plate,
  acquisitionDate,
  image,
}) => {
  return (
    <div className="car-card">

      <div className="car-header">
        <span className="car-price">${price}</span>
      </div>

      <div className="car-card-img-container">
        <img src="https://blob.midwaycarrental.com/mrac-media/2021/02/FerrariF8Spider_640x480-1.png" alt={`${brand} ${model}`} className="car-image" />
      </div>

      <div className="car-body">
        <h3 className="car-title">
          {brand} {model} {year}
        </h3>
        <p className="car-info">
          Matrícula: <span>{plate}</span>
        </p>
        <p className="car-info">
          Adquirido el <span>{acquisitionDate}</span>
        </p>
      </div>

      <div className="car-buttons">
        <button className="btn-edit">
          <FiEdit2 size={14} />
        </button>
        <button className="btn-delete">
          <CgTrashEmpty size={16} />
        </button>
      </div>
    </div>
  );
};

export default CarCard;