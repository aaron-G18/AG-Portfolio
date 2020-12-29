import React from "react";
import "./style.css";
import SideLinks from "../sideLinks/sideLinks";

export default function frontPage(props) {


  return (
    <div className="sidebar">
        <div className="animated-title">
            <div className="text-top">
                <div className="top-box">
                <span>Aaron Garner</span>
                    <img className="aaron-suit" src="./images/Aaron_Suit_Cropped.jpg" alt="aaron in suit" />
                </div>
            </div>
            <div className="text-bottom">
                <div className="bottom-content">
                    <SideLinks />
                </div>
            </div>
        </div>
    </div>
  );
}
