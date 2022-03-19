import { Container, Row, Col, Card, Button } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import Image from "next/image"
import { VscEdit } from "react-icons/vsc"
import { BsArrowRight } from "react-icons/bs"
import Footer from "../components/Footer"

const profile = () => {
    return (
        <>
        <style jsx>
        {`
            .radius {                
                border-radius: 25px;
            }
            .btn-login {
                border-color: none;
            }
            .profiles {
                font-family: Nunito-Sans;
            }
            .text-name {
                font-size: 25px;
                font-weight:700;
            }
            .text-phone {
                font-size: 16px;
                font-weight:400;
            }
        `}
        </style>
        <NavbarComponent />
        <Container className="profiles">
            <Row>
                <Col xl={3}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <div className="text-center mt-5">
                            <Image src='/images/profil.png' width={90} height={70} alt="profile" className="me-3 rounded-full"/>
                        </div>
                        <div className="d-flex flex-row justify-content-center px-3 mt-1">
                            <span><VscEdit /></span>
                            <div className="px-3">Edit</div>
                        </div>
                        <div className="text-center mt-3 text-name">Robert Chandler</div>
                        <div className="text-center mt-1 text-phone text-color3">+62 813-9387-7946</div>
                        <div className="mt-4 d-flex flex-row justify-content-center">
                            <Button className='bg-color1 text-color4 btn-login mt-1 d-flex flex-row justify-content-between align-items-center'>
                                <div>Personal Information</div>
                                <div><BsArrowRight /></div>
                            </Button>
                        </div>
                        <div className="mt-3 mb-3 d-flex flex-row justify-content-center">
                            <Button className='bg-color1 text-color4 btn-login mt-1 d-flex flex-row justify-content-between align-items-center'>
                                <div>Change Password</div>
                                <div><BsArrowRight /></div>
                            </Button>
                        </div>
                        <div className=" mb-3 d-flex flex-row justify-content-center">
                            <Button className='bg-color1 text-color4 btn-login mt-1 d-flex flex-row justify-content-between align-items-center'>
                                <div>Change Pin</div>
                                <div><BsArrowRight /></div>
                            </Button>
                        </div>
                        <div className="mb-5 d-flex flex-row justify-content-center">
                            <Button className='bg-color1 text-color4 btn-login mt-1 d-flex flex-row justify-content-between align-items-center'>
                                <div>Logout</div>
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default profile