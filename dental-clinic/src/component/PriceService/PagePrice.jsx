import React from "react";
import { Slider } from "../../data";
import { LoGo } from "../../data";
import  {banggia}  from "../../data";
import './ListPrice.css'

export default function PricePage() {
    return (
        <div className="wrapperPrice">
            <img className="SliderDV" src={Slider.SliderPrice} alt="" />
            <h1 className=" TitleDV">
                <center>
                    BẢNG GIÁ DỊCH VỤ
                </center>
            </h1>
            <div className="content">
                <img class="banggia" src={banggia} alt=""/>
            </div>
        </div>
    )
}
