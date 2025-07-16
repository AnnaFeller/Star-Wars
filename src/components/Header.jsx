import Navigation from "./Navigation.jsx";



const Header = () => {
    return (
        <header className="rounded-t-3xl bg-grey-color">
           <Navigation  />
            {/*// передаем пропс по линии с хедер*/}
            <h1 className="text-center text-3xl py-6">Luke Skywalker</h1>
        </header>
    );
};

export default Header;