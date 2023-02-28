import React from "react";

import './Home.css'


function Home() {
    return (
        <div className="home_main_container">

            <div className="home_button_div">

                <div className="">
                    <label for='encodefile' className="encode_btn_label">Encode</label>
                    <input className="encode_btn" type="file" id="encodefile" name="encodeFile" />
                </div>
                

                <div>
                    <label for='decodefile' className="encode_btn_label">Decode</label>
                    <input className="encode_btn" type="file" id="decodefile" name="encodeFile" />
                </div>
            </div>
        </div>
    )
}

export default Home