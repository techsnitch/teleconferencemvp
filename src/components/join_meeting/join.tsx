import React, { Component} from "react";
import "./styles.css";

export default class Join extends Component {
    render(){
        return(
            <div>
                <form action="">
                    <div className="main">
                        <h3>Join Meeting</h3>
                        <h5>Input Meeting link</h5>
                        <input type="text" placeholder="Enter text"></input>
                        <h5>Your ID or nick-name</h5>
                        <input type="text" placeholder="Rilwan"></input>
                    </div>

                    <div className="check">
                    <input type="checkbox" name="Remember" id=""></input>
                    <label htmlFor="Remember">Remember Me</label><br></br>
                    <input type="checkbox" name="audio" id=""></input>
                    <label htmlFor="audio">Disconnet audio</label><br></br>
                    <input type="checkbox" name="video" id=""></input>
                    <label htmlFor="video">Disconnet video</label><br></br>
                    </div>

                    <input type="submit" value="Join" id="submit"></input>
                    <button id="cancel"> Cancel</button>
                </form>
            </div>
        );
    }
}