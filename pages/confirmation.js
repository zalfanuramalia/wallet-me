import { Col, Container, Row, Card } from "react-bootstrap";
import NavbarComponent from "../components/NavbarHome";
import confirmations from "../styles/confirmation.module.scss";
import Image from 'next/image';
import { Button } from "react-bootstrap";
import SidePart from "../components/SidePart";
import Footer from "../components/Footer"
import Head from "next/head";

const confirmation= () =>{
    return (     
        <>  
            <Head>
            <title>Confirmation</title>
            <meta name="description" content="Next Wallet your future wallet" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarComponent />
            <Container>
                <Row>
                    <Col xl={3}>
                        <Card className={`${confirmations.information} mt-5 py-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>                        
                            <SidePart />
                        </Card>
                    </Col>
                    <Col xl={9}>                    
                    <Card className={`${confirmations.information} px-4 mt-5 py-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                        <div className="fs-5 mb-3 mx-3 py-2 fw-bold">Transfer to</div>
                        <Card className={`${confirmations.info} py-2 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                            <Row className="px-5 mt-3">
                                <Col xl={2} xs={6}>
                                    <Image src="/images/prof-6.png"  width={70} height={70} alt="profile"  />
                                </Col>
                                <Col xl={10} xs={6}>
                                    <div className="d-flex flex-column justify-content-center mt-2">
                                        <div className="fw-bold">Samuel Suhi</div>
                                        <div>+62 813-8492-9994</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>                        
                        <div className="fs-5 mb-3 mx-3 fw-bold">Details</div>
                        <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                            <Row className="px-5 mt-1">
                                <Col>
                                    <div className="d-flex flex-column justify-content-center py-2">
                                        <div className="fs-6 py-1">Amount</div>
                                        <div className="fw-bold fs-5 py-1">Rp.100.000</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                            <Row className="px-5 mt-1">
                                <Col>
                                    <div className="d-flex flex-column justify-content-center py-2">
                                        <div className="fs-6 py-1">Balance Left</div>
                                        <div className="fw-bold fs-5 py-1">Rp.20.000</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                            <Row className="px-5 mt-1">
                                <Col>
                                    <div className="d-flex flex-column justify-content-center py-2">
                                        <div className="fs-6 py-1">Date & Time</div>
                                        <div className="fw-bold fs-5 py-1">May 11, 2020 - 12.20</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                            <Row className="px-5 mt-1">
                                <Col>
                                    <div className="d-flex flex-column justify-content-center py-2">
                                        <div className="fs-6 py-1">Notes</div>
                                        <div className="fw-bold fs-5 py-1">For buying some socks</div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <div className="text-end me-3 mb-3 mt-3">
                            <Button className="btn-primary bg-color4">Continue</Button>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
                
            <Footer />
        </>  
    )
}

export default confirmation