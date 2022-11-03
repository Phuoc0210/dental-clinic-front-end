import React from "react";
import Consultant from "./Consultant/Consultant";
import Reason from "./Reason/Reason";
import SliderBanner from "./Slider/SliderBanner";

export default function HomepageIndex() {
  return (
    <>
      <SliderBanner />

      <Consultant />

      <Reason />
    </>
  );
}
