import {Col, Row, Container, Alert, Form} from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';
import {forgotPassProcess} from '../redux/actions/forgotPass'
import Modals from '../components/ModalsForgotPass'
import Head from 'next/head';

const ForgotPassword = () => {
    const {forgotPass} = useSelector(state=>state)
    const [error,setError] = useState({})
    const dispatch = useDispatch()
    const [success,setSuccess] = useState(false)
    const router = useRouter()    
    const [modalShow, setModalShow] = React.useState(false);

    const validation = (email)=>{
        const newErrors = {}
        if(!email || email===''){
            newErrors.email = 'Email must be filled'
        }
        return newErrors;
    }

    const passHandle = (event)=>{
        event.preventDefault()
        const email = event.target.elements["email"].value
        var valid = validation(email)
        if(Object.keys(valid).length > 0){
            setError(valid)
        }else{
            dispatch(forgotPassProcess(email))
            setSuccess(true)
        }
    }
    return (
        <>
        <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='container-fluid log'>
            <Form onSubmit={passHandle}>                
                <Row >
                    <Col xl={6} className='bg-color1 log-1'>
                        <div className='bg-title'>
                            <div className='text-center px-5 mx-5 mt-4 title'>Wallet-me</div>
                            <div className='d-flex flex-row justify-content-center'>
                                <Image src='/images/Group 57.png' className='position absolute ' width={442} height={505}  alt='phone'/>                                
                            </div>                            
                            <h3 className='mx-5 '>App that Covering Banking Needs.</h3>
                            <div className='d-flex-flex-row align-items-center'>
                            <p className='mx-5 mb-5 mt-4 '>Wallet-me is an application that focussing in banking needs for all users
                               in the world. Always updated and always following world trends.
                               5000+ users registered in Wallet-me everyday with worldwide
                               users coverage.
                            </p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className='mt-5'>
                        <div className='py-3'>
                        <h3 className='px-5 mt-5 '>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.
                        </h3>
                        </div>
                        
                        <p className='mx-5 mt-4 '>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
                        <Row>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-4 w-100 d-inline-block position-relative' >
                                <i className="bi bi-envelope position-absolute"></i>
                                <input type="text" name='email' className='px-4 py-2 text-color3 input-underline' placeholder= 'Enter your e-mail'/>
                                {error!==null && error.firstname ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }                             
                            </div>
                            <span className="underline"></span>
                            </Col>                            
                            <Col xl={12} className='text-center mt-4'>
                                <button onClick={()=>setModalShow(true)} type='submit' className='bg-color3 btn-login mt-3'>Confirm</button>
                                {
                                    forgotPass.isError === 'false' &&
                                    <Modals show={modalShow} onHide={() => setModalShow(false)} />
                                }     
                            </Col>                            
                        </Row>                       
                    </Col>
                </Row>
            </Form> 
        </div>
        </>
    )
}

export default ForgotPassword