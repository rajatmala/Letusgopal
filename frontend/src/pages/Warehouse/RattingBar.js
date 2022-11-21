import React from 'react';
// import { CDBRating, CDBContainer } from 'cdbreact';
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
const RatingBar = () =>
{
    return (
        <>
            <Rating emptySymbol={ <BsStar /> } fullSymbol={ <BsStarFill /> } />
        </>
    );
};
export default RatingBar;
