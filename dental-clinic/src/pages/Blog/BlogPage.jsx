import React from "react";
import ContentBlog from "./component/ContentBlog";
import Time from "../homepage/Time/Time";

export default function BlogPage() {
    return (
      <>
        {/* header */}
        <ContentBlog/>
        <Time/>
        {/* footer */}
      </>
    );
  }