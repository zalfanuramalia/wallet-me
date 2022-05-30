import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import Image from "next/image"
import BarCharts from "../components/Barcharts"
import Head from "next/head"
import Link from "next/link"
import styles from '../styles/home.module.scss'
import { connect, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getBalance } from "../redux/actions/auth"

const Dashboard = ({getBalance}) => {
  const {auth} = useSelector(state=>state)
  const dispatch = useDispatch()

  useEffect(()=>{ 
      dispatch(getBalance(auth.token))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch, auth.token])
  return (
    <>
        <style jsx>
        {`
            .radius {                
                border-radius: 25px;
            }
            .btn-login {
                border-color: none;
            }
            .profiles {
                font-family: Nunito-Sans;
            }
            .text-name {
                font-size: 25px;
                font-weight:700;
            }
            .text-phone {
                font-size: 16px;
                font-weight:400;
            }
        `}
        </style>
        <Head>
        <title>Home</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <Container className='profiles mb-5'>
            <Row>
                <Col xl={3}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className={`${styles.profiles} mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom `}>
                        <div className='banner d-flex flex-row justify-content-between'>
                            <div className="section mx-5 mt-3 mb-3">
                                <div>Balance</div>
                                <h3>{auth.userData!==null &&`Rp.${auth.balance!==null && auth.balance.toLocaleString('id-ID')}`}</h3>
                                <div>+62 813-9387-7946</div>
                            </div>
                            <div className='section text-center mx-5 mt-4 mb-3'>
                                <div className='mb-2 text-center'>
                                    <button className={`${styles.button} px-3 py-1 mb-2 text-center`}>
                                        <Link href='/transfer'>
                                            <a className="d-flex justify-content-end text-decoration-none text-color3 ">Transfer</a>
                                        </Link>    
                                    </button> 
                                </div>
                                <div className='mb-2 text-center'>
                                    <button className={`${styles.button} px-3 py-1 mb-2 text-center`}>
                                        <Link href='/topup'>
                                            <a className="d-flex justify-content-end text-decoration-none text-color3 ">Top Up </a>
                                        </Link>    
                                    </button> 
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Row>
                        <Col xs={7}>
                          <Card className={`${styles.bar} position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mt-3`}>
                            <BarCharts labels={['Sat','Sun','Mon','Tue','Fri','Sat']} data={[10,50,200,300]} income={0} expense={0} />
                          </Card>
                        </Col>
                        <Col xs={5}>
                            <Card className={`${styles.bar} position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mt-3`}>
                                <div className="mx-3 mt-3">Transaction History</div>
                                <Row className="mx-3 mt-4">
                                    <Col md={3}>
                                        <Image src="/images/prof-1.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Samuel Suhi</div>
                                            <div>Accept</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp50.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mx-3 mt-3">
                                    <Col md={3}>
                                        <Image src="/images/netflix.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Netflix</div>
                                            <div>Transfer</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>- Rp149.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mx-3 mt-3">
                                    <Col md={3}>
                                        <Image src="/images/prof-2.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column ">
                                            <div>Christine Marsha</div>
                                            <div>Accept</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp150.000</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mx-3 mt-3 mb-3">
                                    <Col md={3}>
                                        <Image src="/images/logo-history.png"  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={5}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>Robert Chandler</div>
                                            <div>Top Up</div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="d-flex flex-row justify-content-center align-items-center">
                                            <div>+ Rp249.000</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                      </Row>
                </Col>
            </Row>
        </Container>
        </>
  )
}

const mapStateToProps = state => ({balance: state.balance})

const mapDispatchToProps = {getBalance}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
