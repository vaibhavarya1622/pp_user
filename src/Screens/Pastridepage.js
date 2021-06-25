import React from 'react'
import Header from "./../Components/Myheader/Headerpastride";
import Pastridelist from "../Components/Googlemaps/Pastrideslist"
const Pastridepage = () => {
    return (
        <div>
        <Header location="pastride"/>
            <Pastridelist/>
        </div>
    )
}

export default Pastridepage
