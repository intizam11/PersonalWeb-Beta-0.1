import '../css/Home.css'
import '../css/Card.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import React from 'react';
import Footer from '../components/Footer'

// import backgroundImage from '../images/backgroundWave.svg'


export default function Home() {

    // style={{backgroundImage: `url(${backgroundImage})`}}
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 900,
            delay: 300,
        }, [])
    })




    return (
        <>
            <Navbar />
            <div className="mainContainerHome d-flex">
                <div className="mainContent container-md ">
                    <div className="innerMainContent  d-flex">
                        <div className="innerMainContentLeft">
                            <p data-aos="fade-up"
                                data-aos-duration="1000"
                                className='mainHomeName mt-5'>Hi, I'm Intizam</p>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className='mainHomeStatus'>Frontend Developer</p>

                            <p className='mainHomeBio'
                                data-aos="fade-up"
                                data-aos-duration="3000">
                                Coding enthusiast. Someone who love learn something new. especially about web programming and web design. happy to share about knowledge and learn from other.
                            </p>
                        </div>

                        <div className="innerMainContentRight">
                            <img className='imageRight' data-aos="zoom-in-left" src="/images/blob.svg" alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="mainContainerHome2">
                <h1 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className='mainTitleContainer2'>Project</h1>

                <div className="innerMainContentContainer2">
                    <div data-aos="zoom-in-up" className="cardContainer2">
                        <img className='cardImgContainer2' src="/images/newThumbNail.png" />
                        <div className='innerCardContent'>
                            <h2 className='cardTitileContainer2'>Hollyways</h2>
                            {/* <h3>Type: Residential rental</h3> */}
                            <p className='cardDetailContainer2'>
                                Hollyways is a website to help victims of natural disasters by providing donation services
                            </p>
                            <button className='cardButtonContainer2'>Show the property project</button>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />





        </>

    )
}