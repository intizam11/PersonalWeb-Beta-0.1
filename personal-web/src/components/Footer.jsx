import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../css/Footer.css'


export default function Footer() {
    return (
        <div >
            <MDBFooter className='text-center text-lg-start text-muted mainContainerFooter'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500" className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500">
                        <a href='https://www.facebook.com/TKRO.CHE?mibextid=LQQJ4d' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='facebook-f' />
                        </a>
                        {/* <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a> */}
                        <a href='https://www.google.com/' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='google' />
                        </a>
                        <a href='https://instagram.com/almanaru_?igshid=YmMyMTA2M2Y=' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                        <a href='https://www.linkedin.com/in/intizam-khozim-almanar/' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='linkedin' />
                        </a>
                        <a href='https://github.com/intizam11' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='github' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            {/* <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </MDBCol> */}

                            <MDBCol
                                md='2' lg='2' xl='2' className='mx-auto mb-4'
                                data-aos="fade-up">
                                <h6
                                    className='text-uppercase fw-bold mb-4 titleFooter'
                                >Programing language</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Go language
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Javascript
                                    </a>
                                </p>
                                {/* <p>
                                <a href='#!' className='text-reset'>
                                    Vue
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laravel
                                </a>
                            </p> */}
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4' data-aos="fade-up">
                                <h6 className='text-uppercase fw-bold mb-4 titleFooter'>Library / Framework</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Echo
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React Js
                                    </a>
                                </p>
                                {/* <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p> */}
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' data-aos="fade-up">
                                <h6 className='text-uppercase fw-bold mb-4 titleFooter'>Contact</h6>
                                {/* <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                New York, NY 10012, US
                            </p> */}
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    intizamkz@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> +6281325322317
                                </p>
                                {/* <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p> */}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div
                    data-aos="fade-up"
                    className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright
                    <a className='text-reset fw-bold' href='/'>

                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}