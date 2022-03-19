import React from 'react'
import Head from 'next/head'
import { Container, Form, Row, Col, Card } from 'react-bootstrap'
import HistoryBar from '../components/HistoryBar'
import NavbarComponent from '../components/NavbarHome'
import SidePart from '../components/SidePart'
import histories from '../styles/HistoryBar.module.scss'

const history = () => {
    return (
        <>
        <Head>
        <title>History</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <Container className='round-container white-bg'>
            <Row>
                <Col xl={3}>
                    <Card className={`${histories.information} mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                        <SidePart />
                    </Card>                
                </Col>
                <Col xl={9}>
                    <Card className={`${histories.information} mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                        <Row className='mt-4 px-5'>
                            <Col xl={9}>
                                <div>
                                    <h4>Transaction History</h4>
                                </div>
                            </Col>
                            <Col xl={3}>
                                <Form.Select className={histories.select}>
                                    <option>--Select Filter--</option>
                                    <option>Type</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <div className='mx-5 my-3'>
                            <HistoryBar image="/images/prof-1.png" name="Samuel Suhi" type="Accept" nominal={50000} />
                            <HistoryBar image="/images/netflix.png" name="Netflix" type="Transfer" nominal={149000} />
                            <HistoryBar image="/images/prof-2.png" name="Christine Marsha" type="Accept" nominal={150000} />
                            <HistoryBar image="/images/logo-history.png" name="Logo" type="Top Up" nominal={249000} />
                            <HistoryBar image="/images/prof-1.png" name="Samuel Suhi" type="Accept" nominal={50000} />
                            <HistoryBar image="/images/prof-1.png" name="Samuel Suhi" type="Accept" nominal={50000} />
                        </div>                        
                    </Card>            
                </Col>
            </Row>        
      </Container>
      </>
    )
}

export default history