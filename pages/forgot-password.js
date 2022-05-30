import {Col, Row, Alert, Form} from 'react-bootstrap'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import {resetPassProcess} from '../redux/actions/forgotPass'
import Head from 'next/head';
import phone from "../public/images/Group-57.png"

const ResetPassword = () => {
    const {auth, forgotPass} = useSelector(state=>state)
    const [error,setError] = useState({})
    const dispatch = useDispatch()
    const [success,setSuccess] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if(success){
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Success</Alert.Heading>
            <p>{forgotPass.message}</p>
          </Alert>
        }
    },[success, forgotPass.message])


    const validation = (data)=>{
        const newErrors = {}
        if(!data.newPassword || data.newPassword===''){
            newErrors.password = 'Password must be filled'
        }
        if(!data.confirmPassword || data.confirmPassword===''){
            newErrors.confirmPassword = 'Confirm Password must be filled'
        }
        return newErrors;
    }

    const newPassHandle = (event)=>{
        event.preventDefault()
        const data = {}
        data.newPassword = event.target.elements["newPassword"].value
        data.confirmPassword = event.target.elements["confirmPassword"].value
        var valid = validation(data)
        if(Object.keys(valid).length > 0 ){
            setError(valid)
        } else{
            const datas = {
                otp: router.query.otp, newPassword: data.newPassword, confirmPassword: data.confirmPassword
            }
            dispatch(resetPassProcess(datas))
            if(!auth.isError){
                router.push('/login')
              }else if(auth.isError){
                setError(valid)
              }
            setSuccess(true)
        }

    }
    return (
        <>
        <Head>
        <title>Reset Password</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='container-fluid log'>
            <Form onSubmit={newPassHandle}>        
                <Row >
                    <Col xl={6} className='bg-color1 log-1'>
                        <div className='bg-title'>
                            <div className='text-center px-5 mx-5 mt-4 title'>Wallet-me</div>
                            <div className='d-flex flex-row justify-content-center'>
                                <Image src={phone} className='position absolute ' width={442} height={505}  alt='phone'/>                                
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
                        
                        <p className='mx-5 mt-4 '>Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>
                        <Row>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-4 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='newPassword' className='px-4 py-2 text-color3 input-underline' placeholder= 'Create new password'/>
                                {error!==null && error.password ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }                             
                            </div>
                            <span className="underline"></span>
                            </Col>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-4 w-100 d-inline-block position-relative' >
                                <i className="bi bi-lock position-absolute"></i>
                                <input type="password" name='confirmPassword' className='px-4 py-2 text-color3 input-underline' placeholder= 'Confirm new password'/>
                                {error!==null && error.confirmpass ? <Form.Control.Feedback type="invalid"></Form.Control.Feedback> : '' }                             
                            </div>
                            <span className="underline"></span>
                            </Col>                          
                            <Col xl={12} className='text-center mt-4'>
                                <button type='submit' className='bg-color3 btn-login mt-3'>Reset Password</button>
                            </Col>                            
                        </Row>                       
                    </Col>
                </Row>
            </Form> 
        </div>
        </>
    )
}

export default ResetPassword