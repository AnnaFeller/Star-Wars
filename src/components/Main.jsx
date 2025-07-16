
import Home from "./Home.jsx";
import AboutMe from "./About Me.jsx";
import {navItems} from "../utils/constant.js";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {useContext} from "react";
import {StarContext} from "../utils/context.js";


const Main = () => {
const{page} = useContext(StarContext)
    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>
        default:
            return <Home/>
    }
};

export default Main;