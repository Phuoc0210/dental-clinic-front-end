import React from "react";
import { Slider } from "../../data";
import { LoGo } from "../../data";
import  {banggia}  from "../../data";
import Time from "../homepage/Time/Time";
import './ListPrice.css'

export default function PricePage() {
    return (
        <>
            <img className="SliderDV" src={Slider.SliderPrice} alt="" />
            <h1 className=" TitleDV">
                <center>
                    BẢNG GIÁ DỊCH VỤ
                </center>
            </h1>
            <div className="content">
                <img className="Logo" src={LoGo.ImgLogo} alt='LoGo' />
            </div>
            <div className="content">
                <img class="banggia" src={banggia} alt=""/>
            </div>
            <Time/>
        </>
    )
}
