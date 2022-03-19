import { Container, Row, Col, Card, Button } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import Image from "next/image"
import { VscEdit } from "react-icons/vsc"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import profiles from '../styles/profil.module.scss'
import Head from "next/head"

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
        <Head>
        <title>Profile</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
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
                        <div className="d-flex flex-row justify-content-center px-3 mt-1 mb-2">
                            <span><VscEdit /></span>
                            <div className="px-3">Edit</div>
                        </div>
                        <div className="text-center mt-3 text-name">Robert Chandler</div>
                        <div className="text-center mt-1 mb-3 text-phone text-color3">+62 813-9387-7946</div>
                        <div className="text-center">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/personal-information">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Personal Information</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/change-password">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Change Password</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/change-pin">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Change Pin</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 mb-5 text-color4 bg-color1 ${profiles.btnlogin}`}>
                                <div className="d-flex flex-row justify-content-between">Logout</div>
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default profile