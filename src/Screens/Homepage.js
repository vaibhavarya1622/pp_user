import React from 'react'
import Header from "./../Components/Myheader/Header"
import HospitalList from './../Components/Homepage/HospitalList'
const Homepage = () => {
    return (
        <div>
            <Header location='home' />
            <HospitalList />
            {/* <HomePageComponent /> */}
        </div>
    )
}

export default Homepage
