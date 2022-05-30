import {Col, Row, Container, Form} from 'react-bootstrap'
import { useRouter } from 'next/router'
import Image from 'next/image'
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import createpin from '../styles/createpin.module.scss'
import { connect, useSelector } from 'react-redux'
import { registerProcess } from "../redux/actions/register";

const CreatePin = ({registerProcess}) => {
    const register = useSelector(state => state.register)
    const [error,setError] = useState(false)
    const router = useRouter()
    
    const handlePin = (event)=>{
        event.preventDefault()
        registerProcess(register.data,otp)
        router.push('/account-created')
    }
    const [otp, setOtp] = useState('')
    return (
        
        <div className='container-fluid log'>
            <Form onSubmit={handlePin}>        
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
                        <h3 className='px-5 mt-5 '>Secure Your Account, Your Wallet,
                            and Your Data With 6 Digits PIN
                            That You Created Yourself.
                        </h3>
                        </div>
                        
                        <p className='mx-5 mt-4 '>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                        <Row>
                            <Col xl={12}>
                                <div>
                                <OtpInput 
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    isInputNum={true}
                                    containerStyle='flex justify-content-between mt-5 mb-5 mx-5'
                                    inputStyle={createpin.otpInput}                    />
                                </div>
                            </Col>                            
                            <Col xl={12} className='text-center mt-4'>
                                <button type='submit' className='bg-color3 btn-login mt-3'>Confirm</button>
                            </Col>                            
                        </Row>                       
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({register:state.register})
const mapDispatchToProps = {registerProcess}
export default connect(mapStateToProps,mapDispatchToProps)(CreatePin)