
import {FaCheckCircle} from 'react-icons/fa'
import { useRouter } from "next/router";
import Image from 'next/image';
import {Col, Row, Form} from 'react-bootstrap'

const AccountCreated = () =>{

    const router = useRouter()

    const onLogin = ()=>{
        router.push('/login')    
    }

    return (
        <div className='container-fluid'>
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
                        <div className="vh-100 overflow-auto">
                            <div className="p-5">
                                <div className="fs-1 text-green mt-5">
                                    <FaCheckCircle/>
                                </div>
                                <div className="fs-1 text-color3 fw-bold mt-5">Your PIN Was Successfully Created</div>
                                <div className="fs-5 text-black mt-5">Your PIN was successfully created and you can now access all the features in On-Wallet. Login to your new account and start exploring!</div>
                                <div className="mt-5">
                                    <button className='bg-color3 btn-login mt-3' onClick={onLogin}>Login Now</button>
                                </div>
                            </div>
                        </div>                     
                    </Col>
                </Row>
            
            </div>
    )
}

export default AccountCreated