import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ProfileBar from '../../components/ChangePassBar'
import style from '../../styles/PersonalInformation.module.scss'
import { Row, Col, Card, Container } from 'react-bootstrap'
import NavbarComponent from '../../components/NavbarHome'

export default function PersonalInfo() {
  return (
    <>
        <Head>
        <title>Change Password</title>
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
                        <h1 className='fw-bold fs-5'>Change Password</h1>
                        <p className={`${style.desc} text-gray mt-4`}>
                            You must enter your current password and then type your new password twice.
                        </p>
                        <div className="edit-indo mx-3">
                            <div className='d-flex flex-row align-items-center mx-5 px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='password' className='px-4 py-2 text-color3 input-underline' placeholder= 'Create your password' required/>
                            </div>
                            <span className="underline"></span>
                        </div>
                        <div className="edit-indo mx-3">
                            <div className='d-flex flex-row align-items-center mx-5 px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='password' className='px-4 py-2 text-color3 input-underline' placeholder= 'Create your password' required/>
                            </div>
                            <span className="underline"></span>
                        </div>
                        <div className="edit-indo mx-3">
                            <div className='d-flex flex-row align-items-center mx-5 px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='password' className='px-4 py-2 text-color3 input-underline' placeholder= 'Create your password' required/>
                            </div>
                            <span className="underline"></span>
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