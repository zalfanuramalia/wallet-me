import React, {useEffect} from 'react'
import Head from 'next/head'
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap'
import NavbarComponent from '../../components/NavbarHome'
import Footer from '../../components/Footer'
import confirmation from '../../styles/confirmation.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'
import moment from 'moment'

const Status = () => {
    const {transfer, auth} = useSelector(state => state)
    const router = useRouter()

    useEffect(()=>{
        if(auth.token!==null){
           router.replace('/transfer/status');
        }else{
           router.replace('/');
        }
     },[auth.token, router]);
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
                            <div className="fs-4">Rp{transfer.dataTransfer!==null && Number(transfer.dataTransfer.amount).toLocaleString('id-ID')}</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Balance Left</div>
                            <div className="fs-4">Rp {auth.balance!==null && Number(auth.balance).toLocaleString('id-ID')}</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Date&Time</div>
                            <div className="fs-4">{moment(new Date().toString()).format('MMM DD YYYY - HH:MM')}</div>
                        </div>
                    </Row>
                    <Row className={`${confirmation.list} mb-3 ms-3`}>
                        <div>
                            <div className="fs-5 fw-bold">Notes</div>
                            <div className="fs-4">{transfer.dataTransfer!==null && transfer.dataTransfer.notes}</div>
                        </div>
                    </Row>
                    <div className="fs-5 ms-3 fw-bold">Transfer</div>
                    <Row className={`${confirmation.list} mb-5 ms-3`}>
                        <Col xs={2}>
                            <Image src={transfer.dataReceiver===null || transfer.dataReceiver.user==null || transfer.dataReceiver.user.picture===null || transfer.dataReceiver.user.picture==='undefiend' ? '/images/prof-6.png' : transfer.dataReceiver.user.picture} width={50} height={50} alt='profil'/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">{transfer.dataReceiver!==null && transfer.dataReceiver.user!==null && transfer.dataReceiver.user.fullName}</div>
                            <div className="fs-6">{transfer.dataReceiver!==null && transfer.dataReceiver.user!==null && transfer.dataReceiver.phone}</div>
                        </Col>
                    </Row>
                    <div className="text-end ">
                        <Button className="btn-primary me-3 mb-4">Download PDF</Button>
                        <Button className="btn-primary mb-4" onClick={()=>router.push('/home')}>Back to Home</Button>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Status