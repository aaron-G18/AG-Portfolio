import React from "react";
import "./style.css";
import BottomLinks from "../links/links";

export default function frontPage(props) {
  // functions


  return (
    <div class="animated-title">
        <div class="text-top">
            <div>
                <img className="aaron-suit" src="./images/Aaron_Suit_Cropped.jpg" alt="aaron in suit" />
                <span>Aaron Garner</span>
            </div>
        </div>
        <div class="text-bottom">
            <div>
                {/* for the win! */}
                <BottomLinks />
            </div>
        </div>
    </div>
  );
}
