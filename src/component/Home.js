import React from "react";

import './Home.css'


function Home() {
    return (
        <div className="home_main_container">
            <input className="encode_btn" type="file" id="encodefile" name="encodeFile" />
            <button>Decode</button>
        </div>
    )
}

export default Home