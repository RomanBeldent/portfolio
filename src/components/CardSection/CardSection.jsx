import React from "react";
import Card from "../Card/Card";
import "./CardSection.scss";

const CardSection = () => {
    return (
        <div className="CardSection">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardSection;
