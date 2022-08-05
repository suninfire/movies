import {Outlet} from "react-router";
import ReactSwitch from "react-switch";
import {createContext, useState} from "react";

import Header from "../../Components/Header/Header";
import MoviesList from "../../Components/Movies/MovieList/MoviesList";
import Genres from "../../Components/Movies/MovieList/Genres/Genres";
import "./movies.page.style.css"


export default function MoviesPage() {

    const ThemeContext = createContext(null);

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={'app'} id={theme}>
                <div className="switch">
                    <ReactSwitch
                        onColor="#080707"
                        onHandleColor="#424241"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                        onChange={toggleTheme} checked={theme === "dark"} />
                </div>

        <div className={'page'}>
            <Header/>
            <Outlet/>
           <div className={'mg'}> <Genres/>
               <MoviesList/>
           </div>
        </div>

</div>
</ThemeContext.Provider>
    );
}