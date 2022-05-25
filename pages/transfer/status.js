import React from 'react'
import Head from 'next/head'
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap'
import NavbarComponent from '../../components/NavbarHome'
import Footer from '../../components/Footer'
import confirmation from '../../styles/confirmation.module.scss'
import Image from 'next/image'

const status = () => {
    return (
        <>
        <Head>
            <title>Status</title>
            <meta name="description" content="Next Wallet your future wallet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <div className={confirmation.information}>
                <Container className="pt-3">
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Amount</div>
                            <div className="fs-4">Rp100.000</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Balance Left</div>
                            <div className="fs-4">Rp20.000</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Date&Time</div>
                            <div className="fs-4">May 11, 2020 - 12.20</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Notes</div>
                            <div className="fs-4">For buying some socks</div>
                        </div>
                    </Row>
                    <div className="fs-5 ms-3 fw-bold">Transfer</div>
                    <Row className={`${confirmation.list} mb-5 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/prof-6.png" width={50} height={50} alt='profil'/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Samuel Suhi</div>
                            <div className="fs-6">+62 813-8492-9994</div>
                        </Col>
                    </Row>
                    <div className="text-end ">
                        <Button className="btn-primary me-3 mb-4">Download PDF</Button>
                        <Button className="btn-primary mb-4">Back to Home</Button>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default status