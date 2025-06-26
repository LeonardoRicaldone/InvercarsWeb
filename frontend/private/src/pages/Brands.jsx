import React from "react";
//import "../../styles/Brands.css"
import { CgAdd } from "react-icons/cg";
import BrandCard from "../components/Brands/BrandCard";

const Brands = () => {
    return(
        <div className="brands-container">

            <h1>Marcas</h1>

            <div className="add-brand-icon">
                <CgAdd/>
            </div>

        </div>
    );
};

export default Brands;