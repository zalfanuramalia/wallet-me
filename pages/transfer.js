import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import {BsSearch} from "react-icons/bs"
import Image from "next/image"

const transfer = () => {
    return (
        <>
        <style jsx>
        {`
            .radius-1 {                
                border-radius: 10px;
                width: 100%
            }
            
        `}
        </style>
        <NavbarComponent />
        <Container>
            <Row>
                <Col xl={3}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                        <div className="px-5 mt-3">Search Receiver</div>
                        <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative'>
                            <div className="position-absolute px-2"><BsSearch /></div>                            
                            <input type="text" className='px-5 py-2 bg-color5 radius-1' placeholder= 'Search receiver here' />
                        </div>
                        <div className="px-5 mb-5">
                            <Card className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                <Row className="px-5 mt-3">
                                    <Col md={2}>
                                        <Image src="/images/prof-1.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Samuel Suhi</div>
                                            <div>+62 813-8492-9994</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                <Row className="px-5 mt-3">
                                    <Col md={2}>
                                        <Image src="/images/prof-3.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Momo Taro</div>
                                            <div>+62 812-4343-6731</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                <Row className="px-5 mt-3">
                                    <Col md={2}>
                                        <Image src="/images/prof-4.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Jessica Keen</div>
                                            <div>+62 811-3452-5252</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                <Row className="px-5 mt-3">
                                    <Col md={2}>
                                        <Image src="/images/prof-5.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Michael Le</div>
                                            <div>+62 810-4224-4613</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default transfer