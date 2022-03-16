import {Col, Row, Container} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'

const login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className='bg-blue'>
                            <div>Wallet-me</div>
                            <div className='d-flex flex-row'>
                                <Image src='/images/png-phone2.png' className='position absolute' width={300} height={500} alt='phone'/>
                                <Image src='/images/png-phone.png' className='position absolute' width={300} height={500} alt='phone'/>
                            </div>                            
                            <h3>App that Covering Banking Needs.</h3>
                            <p >Zwallet is an application that focussing in banking needs for all users
                               in the world. Always updated and always following world trends.
                               5000+ users registered in Zwallet everyday with worldwide
                               users coverage.
                            </p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <h3>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h3>
                        <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                        <Row>
                            <Col xl={12}>
                            <div className=' my-3 w-100 d-inline-block' >
                                <input type="text" className='py-2' placeholder= 'Enter your e-mail'/>
                            </div>
                            <span className="underline"></span>
                            </Col>
                            <Col xl={12}>
                            <div className='my-3  d-inline-block' >
                                <input type="text" className='py-2' placeholder= 'Enter your password'/>
                            </div>
                            <span className="underline"></span>
                            </Col>
                            <Col xl={12}>
                                <Link href="/forgotpassword" ><a>Forgot Password?</a></Link>
                            </Col>
                            <Col xl={12}>
                                <Button block variant='pallet-3 my-1 radius text-center'>Login</Button>
                            </Col>
                            <Col>
                                <div>Don’t have an account? Let’s <Link href="/signup" ><a> Sign Up</a></Link></div>
                            </Col>
                        </Row>                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default login