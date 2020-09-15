import React from "react";
import "./style.css";
import SideLinks from "../sideLinks/sideLinks";

export default function frontPage(props) {
  // functions


  return (
    <div className="sidebar">
        <div class="animated-title">
            <div class="text-top">
                <div className="top-box">
                <span>Aaron Garner</span>
                    <img className="aaron-suit" src="./images/Aaron_Suit_Cropped.jpg" alt="aaron in suit" />
                </div>
            </div>
            <div class="text-bottom">
                <div className="bottom-content">
                    <SideLinks />
                </div>
            </div>
        </div>
    </div>
  );
}
