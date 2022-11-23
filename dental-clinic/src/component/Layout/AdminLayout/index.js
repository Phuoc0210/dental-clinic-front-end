import React from "react";
import Header from "../../Header";
import Navbar from "../../Navbar";

function AdminLayout( {children} ) {
    return(
        <div>
            <Header/>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout