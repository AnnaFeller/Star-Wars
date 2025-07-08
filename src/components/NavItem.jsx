
const NavItem = ({itemTitle, changePage}) => {
    return (
        <li onClick={()=> changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default NavItem;

// добавляем промт если есть больше одного придмета , одинаковые только разные название