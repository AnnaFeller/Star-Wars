import React from 'react';
import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constant.js";

const Navigation = ({changePage}) => {
    return (
        <nav>
            <ul className="fixed top-1 left-12 flex gap-1">
                {/*gap=отступ*/}
                {navItems.map(item => <NavItem changePage={changePage} itemTitle={item} key={item} />)}


                {/*<NavItem itemTitle='Home'/>*/}
                {/*<NavItem itemTitle='About me'/>*/}
                {/*<NavItem itemTitle='Star Wars'/>*/}
                {/*<NavItem itemTitle='Contact'/>*/}
            </ul>
        </nav>
    );
};

export default Navigation;