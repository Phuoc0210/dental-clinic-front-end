import React from "react";
import ContentService from "./component/service";
import Time from "../homepage/Time/Time";


export default function ServicePage() {
    return (
      <>
        {/* header */}
        <ContentService/>
        <Time/>
        {/* footer */}
      </>
    );
  }
  