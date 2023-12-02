import React, { useState } from 'react'
import './Home.css'
import I18n from "./../../utils/I18n";

function Home() {

    // const [lang, setLang] = useState("en");
    return (
        <div className='outerbox'>
            <h1>{I18n({ keyword: "WelcomeMessage" })}</h1>

            <p> {I18n({ keyword: "normalMessage" })}</p>

            <h3> {I18n({ keyword: "greetingMessage" })}</h3>




            <select className='btn'
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}>
                <option value="mr">Marathi</option>
                <option value="en">English</option>

                <option value="hi">Hindi</option>

            </select>

        </div>
    )
}

export default Home