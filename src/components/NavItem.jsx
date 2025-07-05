
const NavItem = ({itemTitle}) => { //добавляем промт если есть больше одного придмета , одинаковые только разные название
    return (
        <li className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;