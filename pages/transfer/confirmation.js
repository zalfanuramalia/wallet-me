import { Col, Container, Row, Card } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarHome";
import confirmations from "../../styles/confirmation.module.scss";
import Image from 'next/image';
import { Button } from "react-bootstrap";
import SidePart from "../../components/SidePart";
import Footer from "../../components/Footer"
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import ModalsTransfer from "../../components/ModalsTransfer";
import OtpInput from "react-otp-input"
import { useEffect, useState } from "react";
import { dataTransfer, postProcessTransfer } from "../../redux/actions/transfer";
import { useRouter } from "next/router";

const Confirmation= () =>{
    const {auth, transfer} = useSelector(state=>state)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const [otp, setOtp] = useState('')

    useEffect(()=>{
        dispatch(dataTransfer(transfer?.dataTransfer?.amount, transfer?.dataReceiver?.user.id, transfer.dataTransfer.notes))
    }, [dispatch, transfer?.dataTransfer?.amount, transfer?.dataReceiver?.user.id, transfer.dataTransfer.notes])
   
   const handleConfirmationTransaction = (event)=>{
      event.preventDefault();
      const data = {
         amount : transfer?.dataTransfer?.amount,
         recipient : transfer?.dataReceiver?.user.id,
         pin : otp,
         notes : transfer?.dataTransfer.notes
      };
      dispatch(postProcessTransfer(data, auth.token));
      router.push('/transfer/status');
   };
  
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
                                            <div className="fw-bold">{transfer?.dataReceiver?.user.fullName}</div>
                                            <div>{transfer?.dataReceiver.phone}</div>
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
                                            <div className="fw-bold fs-5 py-1">Rp.{transfer?.dataTransfer!==null && parseFloat(transfer.dataTransfer?.amount).toLocaleString('id-ID')}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                                <Row className="px-5 mt-1">
                                    <Col>
                                        <div className="d-flex flex-column justify-content-center py-2">
                                            <div className="fs-6 py-1">Balance Left</div>
                                            <div className="fw-bold fs-5 py-1">Rp.{auth?.balance!==null && transfer?.dataTransfer!==null && transfer.dataTransfer?.amount!==null && (auth?.balance - parseFloat(transfer?.dataTransfer?.amount)).toLocaleString('id-ID')}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                                <Row className="px-5 mt-1">
                                    <Col>
                                        <div className="d-flex flex-column justify-content-center py-2">
                                            <div className="fs-6 py-1">Date & Time</div>
                                            <div className="fw-bold fs-5 py-1">{moment(new Date().toString()).format('MMM DD YYYY - HH:MM')}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className={`${confirmations.info} py-1 my-1 mx-3 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                                <Row className="px-5 mt-1">
                                    <Col>
                                        <div className="d-flex flex-column justify-content-center py-2">
                                            <div className="fs-6 py-1">Notes</div>
                                            <div className="fw-bold fs-5 py-1">{transfer?.dataTransfer!==null && transfer?.dataTransfer.notes}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <div className="text-end me-3 mb-3 mt-3">
                                <Button onClick={handleShow} className="btn-primary bg-color4">Continue</Button>
                                <ModalsTransfer show={show} functionShow={handleShow} close={handleClose} save={handleConfirmationTransaction} button="Continue" title="Enter PIN to Transfer">
                                <p>Enter your 6 digits PIN for confirmation to continue transferring money.</p>
                                <OtpInput 
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    isInputNum={true}
                                    containerStyle='flex justify-content-between mt-5 mb-5 mx-5'
                                    inputStyle={confirmations.otpInput}
                                    
                                />
                                </ModalsTransfer>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
                
            <Footer />
        </>  
    )
}

export default Confirmation
