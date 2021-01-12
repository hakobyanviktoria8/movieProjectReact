import React from "react";
import "./Faq.css";
import {AccordionFaq} from "./AccaedionFaq";

export function Faq(props) {
    return(
        <div className={"Faq"}>
            <h2>Frequently asked questions</h2>
            <br/>

            <AccordionFaq/>
        </div>
    )
}