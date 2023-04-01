import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Navbar.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

function BrandExample() {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 900,
            delay: 300,
        }, [])
    })


    return (
        <>
            <Navbar className='mainNavbarContainer' variant="dark">
                <Container>
                    <Navbar.Brand data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000" href="#home">
                        {/* <img
                            src=""
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /> */}
                        Frontend
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;