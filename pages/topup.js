import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { addBalance } from "../redux/actions/topup"
import { BsCheckCircle } from "react-icons/bs"
import { useState } from "react"

const Topup = () => {
    const {auth} = useSelector(state=>state)
    const dispatch = useDispatch()
    const [errTopup, setErrTopUp] = useState(false)
    const [successTopup, setSuccessTopUp] = useState(false)

    const topupHandle = (event)=>{
        event.preventDefault()
        const amount = event.target.elements["amount"].value
        if(amount < 10000){
            setErrTopUp(true)
          }else{
            dispatch(addBalance(amount, auth.token))
            setSuccessTopUp(true)
          }
    }

    const closeErr = () => {
        setErrTopUp(false)
      }
      const closeSuccess = () => {
        setSuccessTopUp(false)
      }
    return (
        <>
        <style jsx>
        {`
            .radius-1 {                
                border-radius: 10px;
                width: 100%
            }
            
        `}
        </style>
        <Head>
        <title>Top Up</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <Container>
            <Row>
                <Col xl={3}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                        <div className="px-5 py-5 vh-75">
                            <h1 className='fs-5'>Top Up</h1>
                            <p>Enter the amount of money, and click submit</p>
                            <Form onSubmit={topupHandle} className='text-end'>
                                <Form.Control type='number' name='amount' variant='border' />
                                <button type='submit' className='bg-color3 text-end mt-3'>Submit</button>
                            </Form>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        {errTopup && <div className='bg-secondary bg-opacity-10 position-absolute top-0 d-flex justify-content-center align-items-center vh-100 vw-100' onClick={closeErr}>
            <div className='bg-white p-3' style={{borderRadius:'10px'}}>
                <h1 className='border border-4 border-color5 text-danger rounded-pill text-center mx-auto' style={{width: '60px', height: '60px', lineHeight: '50px'}}>X</h1>
                <h1 className='fs-4 text-danger text-center'>FAILED</h1>
                <p>Minimum top up amount is Rp. 10.000</p>
                </div>
            </div>}
        {successTopup && <div className='bg-secondary bg-opacity-10 position-absolute top-0 d-flex justify-content-center align-items-center vh-100 vw-100' onClick={closeSuccess}>
            <div className='bg-white p-3 text-center' style={{borderRadius:'10px', width: '250px'}}>
                <h1 className='text-color3 rounded-pill mx-auto' style={{width: '60px', height: '60px', lineHeight: '50px'}}><BsCheckCircle /></h1>
                <h1 className='fs-4 text-color3'>SUCCESS</h1>
                <p>Top up success</p>
            </div>
        </div>}
        </>
    )
}

export default Topup