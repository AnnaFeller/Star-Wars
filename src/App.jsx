
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./utils/constant.js";
import {StarContext} from "./utils/context.js";

function App() {
    const [page , setPage] = useState(navItems[0]);

    return (

        <div>
           <StarContext value={{page:page,changePage:setPage}}>
               <Header />
               <Main />
               <Footer/>
           </StarContext>

        </div>

    )
}

export default App
