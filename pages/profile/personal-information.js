import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { parsePhoneNumber } from 'libphonenumber-js'
import ProfileBar from '../../components/ProfileBar'
import style from '../../styles/PersonalInformation.module.scss'
import { Row, Col, Card, Container } from 'react-bootstrap'
import NavbarComponent from '../../components/NavbarHome'

export default function PersonalInfo() {
  return (
    <>
        <Head>
        <title>Personal Information</title>
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
                        <h1 className='fw-bold fs-5'>Personal Information</h1>
                        <p className={`${style.desc} text-gray mt-4`}>
                            We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
                        </p>
                        <div className="edit-indo">
                            <Card className="info-item rounded shadow p-3 mb-3">
                                <p className='text-gray mb-1'>First name</p>
                                <p className='m-0 fs-5 fw-bold text-black'>User Name</p>
                            </Card>
                            <Card className="info-item rounded shadow p-3 mb-3">
                                <p className='text-gray mb-1'>Last name</p>
                                <p className='m-0 fs-5 fw-bold text-black'>User Name</p>
                            </Card>
                            <Card className="info-item rounded shadow p-3 mb-3">
                                <p className='text-gray mb-1'>Verified email</p>
                                <p className='m-0 fs-5 fw-bold text-gray'>user@email.mail</p>
                            </Card>
                            <Card className="info-item rounded shadow p-3  d-flex align-items-md-center justify-content-between">
                                <div className="wrapper-phone-number">
                                    <p className='text-gray mb-1'>Phone number</p>
                                    <p className='m-0 fs-5 fw-bold text-black'>{parsePhoneNumber('081290945780', 'ID').formatInternational()}</p>
                                </div>                            
                                <Link href='/profile/manage-phone'>
                                    <a className='text-primary fw-bold'>Manage</a>
                                </Link>
                            </Card>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}