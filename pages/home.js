import { Container, Row, Col, Card, Button } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import Image from "next/image"
import BarCharts from "../components/BarCharts"
import Head from "next/head"

export default function Dashboard() {
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
        <title>Home</title>
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
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <div className='banner d-flex flex-row justify-content-between'>
                            <div className="section">
                                <div>Balance</div>
                                <h3>Rp120.000</h3>
                                <div>+62 813-9387-7946</div>
                            </div>
                            <div className='section text-center'>
                                <div className='mb-2'>
                                    <button className='button'>Transfer</button> 
                                </div> 
                                <div>
                                    <button className='button'>Topup</button>  
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Row>
                        <Col xs={7}>
                          <Card className="position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mt-3">
                            <BarCharts data={[10,50,200,300]} labels={['1','2','3','4']} income={0} expense={0} />
                          </Card>
                        </Col>
                        <Col xs={5}>
                            <Card className="position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mt-3">
                                <div>Transaction History</div>
                                <Row>
                                    <Col md={3}>
                                        <Image src="/images/prof-1.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Samuel Suhi</div>
                                            <div>Accept</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp50.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Image src="/images/netflix.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Netflix</div>
                                            <div>Transfer</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>- Rp149.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Image src="/images/prof-2.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column ">
                                            <div>Christine Marsha</div>
                                            <div>Accept</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp150.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Image src="/images/logo-history.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Robert Chandler</div>
                                            <div>Top Up</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp249.000</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                      </Row>
                </Col>
            </Row>
        </Container>
        </>
  )
}
