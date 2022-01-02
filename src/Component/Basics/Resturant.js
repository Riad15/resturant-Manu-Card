import React, { useState } from 'react'
import "./Style.css"
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from './Navbar';

const Resturent = () => {

    const [MenuData, SetMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        SetMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} />
            <MenuCard MenuData={MenuData} />
        </>
    )
}

export default Resturent