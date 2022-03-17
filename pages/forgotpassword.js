import {Col, Row, Container} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const forgotpassword = () => {
    return (
        <div className='container-fluid log'>          
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
                        <h3 className='px-5 mt-5 '>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h3>
                        </div>
                        
                        <p className='mx-5 mt-4 '>Transfering money is eassier than ever, you can access Wallet-me wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <Row>
                            <Col xl={12}>
                            <div className='d-flex flex-row align-items-center px-5 my-4 w-100 d-inline-block position-relative' >
                                <i className="bi bi-envelope position-absolute"></i>
                                <input type="text" className='px-4 py-2 text-color3 input-underline' placeholder= 'Enter your e-mail'/>                                
                            </div>
                            <span className="underline"></span>
                            </Col>                            
                            <Col xl={12} className='text-center mt-4'>
                                <button className='bg-color3 btn-login mt-3'>Confirm</button>
                            </Col>                            
                        </Row>                       
                    </Col>
                </Row>
        </div>
    )
}

export default forgotpassword