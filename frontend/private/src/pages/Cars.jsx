import React from "react";
import "../styles/Cars.css"
import { CgAdd } from "react-icons/cg";
import CarCard from "../components/Cars/CarCard";

const Cars = () => {
    return(
        <div className="cars-container">

            <h1>Vehículos</h1>

            <div className="add-car-icon">
            </div>

            <CarCard/>
            <p>  .</p>
            <CarCard/>
            <p>  .</p>    
            <CarCard/>

        </div>
    );
};

export default Cars;