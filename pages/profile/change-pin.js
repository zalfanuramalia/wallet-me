import Head from 'next/head'
import React from 'react'
import ProfileBar from '../../components/ChangePin'
import style from '../../styles/PersonalInformation.module.scss'
import { Row, Col, Card, Container } from 'react-bootstrap'
import NavbarComponent from '../../components/NavbarHome'
import OtpInput from 'react-otp-input';
import { useState } from 'react'
import createpin from '../../styles/change-pin.module.scss'

export default function PersonalInfo() {
  const [otp, setOtp] = useState('')
  return (
    <>
        <Head>
        <title>Change Pin</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <Container>
            <Row>
                <Col xl={3} >
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <ProfileBar />
                    </Card>
                </Col>
                <Col xl={9} className='mt-5'>
                    <div className="wrapper-profile rounded shadow p-md-4 p-3 pb-lg-5 pt-lg-4">
                        <h1 className='fw-bold fs-5'>Change PIN</h1>
                        <p className={`${style.desc} text-gray mt-4`}>
                            Enter your current 6 digits Zwallet PIN below to continue to the next steps.
                        </p>
                        <div className='mt-5'>
                            <OtpInput 
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                isInputNum={true}
                                containerStyle='flex justify-content-between mt-5 mb-5 mx-5'
                                inputStyle={createpin.otpInput}                    
                            />
                        </div>
                        <div className='text-center'>
                            <button className='bg-color3 btn-login mt-3'>Confirm</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}