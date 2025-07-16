import {useContext} from "react";
import {StarContext} from "../utils/context.js";

const NavItem = ({itemTitle}) => {
    const {changePage}  = useContext(StarContext)
    return (
        <li onClick={()=> changePage(itemTitle)} className="bg-red-color border-black border-2 rounded-md px-2 py-1 cursor-pointer hover:bg-yellow-500 hover:text-white">{itemTitle}</li>
    );
};

export default NavItem;

// добавляем промт если есть больше одного придмета , одинаковые только разные название