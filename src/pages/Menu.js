import React from 'react';
import MenuItem from '../components/MenuItem';
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";

function Menu() {
    return (
        <div className='menu'>
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return <MenuItem
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price} key={key} />
                })}
            </div>
        </div>
    );
}

export default Menu;
