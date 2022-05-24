import {Col, Row, Form} from 'react-bootstrap'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { getDataRegister } from "../redux/actions/register";
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const register = useSelector(state => state.register)
    const [error,setError] = useState({})
    const dispatch = useDispatch()
    const router = useRouter()
    const [success,setSuccess] = useState()
    const [validated, setValidated] = useState(false);
    
    const validation = (data)=>{
        const error = {}
        if(!data.firstname || data.firstname===''){
            error.firstname = 'Firstname must be filled'
        }
        if(!data.lastname || data.lastname===''){
            error.lastname = 'Lastname must be filled'
        }
        if(!data.email || data.firstnam===''){
            error.email = 'Email must be filled'
        }
        if(!data.password || data.password===''){
            error.password = 'Password must be filled'
        }
        return error;
    }

    const handleRegister = (event)=>{
        event.preventDefault()
        var data = {};
        data.firstname = event.target.elements["firstname"].value;
        data.lastname = event.target.elements["lastname"].value;
        data.email = event.target.elements["email"].value;
        data.password = event.target.elements["password"].value;
        var valid = validation(data)
        if(Object.keys(valid).length > 0){
            setError(valid)
            setValidated(false)
        }else{
            dispatch(getDataRegister(data))
            router.push('/createpin')
        }
    }

    return (
        <>
        <Head>
        <title>Register</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>        
        <div className='container-fluid'>
            <Form validated={validated} onSubmit={handleRegister}>    
                <Row >
                    <Col xl={6} className='bg-color1'>
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
                    <Col xl={6} className='mt-3'>
                        <div className='py-3'>
                        <h3 className='px-5 mt-5 '>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h3>
                        </div>
                        
                        <p className='mx-5 mt-4 '>Transfering money is eassier than ever, you can access Wallet-me wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <Row>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-person position-absolute"></i>
                                <input type="text" name='firstname' className='px-4 py-2 text-color3 input-underline' placeholder= 'Enter your firstname' required/>                                
                            </div>
                            <span className="underline"></span>
                            {error!==null && error.firstname ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }
                            </Col>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-person position-absolute"></i>
                                <input type="text" name='lastname' className='px-4 py-2 text-color3 input-underline' placeholder= 'Enter your lastname' required/>
                            </div>
                            <span className="underline"></span>
                            {error!==null && error.lastname ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }
                            </Col>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-envelope position-absolute"></i>
                                <input type="text" name='email' className='px-4 py-2 text-color3 input-underline' placeholder= 'Enter your e-mail' required />
                            </div>
                            <span className="underline"></span>
                            {error!==null && error.email ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }
                            </Col>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='password' className='px-4 py-2 text-color3 input-underline' placeholder= 'Create your password' required/>
                            </div>
                            <span className="underline"></span>
                            {error!==null && error.password ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }
                            </Col>
                            <Col xl={12} className='mt-2 px-5 g-0 text-end'>
                                <div className='mx-4 my-2'>
                                    <Link href='/forgotpassword' >
                                        <a className="d-flex justify-content-end text-decoration-none text-color3">
                                            Forgot Password?
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={12} className='text-center '>
                                <button type='submit' className='bg-color3 btn-login mt-3'>Signup</button>
                            </Col>
                            <Col>
                                <div className='mt-4 px-5 mb-4 text-center '>Already have an account? Let’s <Link href="/login" ><a className='text-decoration-none text-color3'>Login</a></Link></div>
                            </Col>
                        </Row>                       
                    </Col>
                </Row>
            </Form>  
        </div>
        </>
    )
}

export default Register