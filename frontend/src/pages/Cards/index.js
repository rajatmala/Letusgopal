import React from "react";
import StorageCard from "./StorageCard.js";


const CardSection = () =>
{
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="text-center mb-5">
                        <h5
                            className="text-primary text-uppercase mb-3"
                            style={ { letterSpacing: 5 } }
                        >
                            Storages
                        </h5>
                        <h1>Our Popular Warehouses</h1>
                    </div>
                    <div className="row">
                       <StorageCard/>
                       <StorageCard/>
                       <StorageCard/>
                       <StorageCard/>
                    </div>
                </div>
            </div>

        </>
    );
}
export default CardSection;
