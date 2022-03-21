import { Container, Row, Col, Card, Form, Input, Button } from "react-bootstrap"
import NavbarComponent from "../../components/NavbarHome"
import SidePart from "../../components/SidePart"
import {BsSearch} from "react-icons/bs"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"
import FaPencilAlt from 'react-icons/fa'
import { dataTransfer, getUserRecepient } from "../../redux/actions/transfer"
import amounts from '../../styles/inputamount.module.scss'

const InputAmount = () => {
    const {auth, transfer} = useSelector(state=>state)
    const router = useRouter()
    const [error,setError] = useState({})
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()

    const validate = (amount)=>{
        const error = {}
        if(!amount || amount===''){
            error.amount = 'Amount must be filled'
        }else if(amount==0){
            error.amount = 'Amount must be grather than 0'
        }else if(auth.balance!==null){
            if(amount > auth.balance){
                error.amount = 'Your balance is less than the transfer value'
            }
        }

        return error;
    }

    const transferHandler = (event) => {
        event.preventDefault()
        var notes =  event.target.elements["notes"].value;
        console.log(notes)
        var valid = validate(amount)
        if(Object.keys(valid).length > 0){
            setError(valid)
        }else{
            dispatch(dataTransfer(amount, transfer.dataReceiver.user.id, notes))
            router.push("/transfer/confirmation")
            setError({})
        }
    }

    const goTransfer = (event) =>{
        let value = event.target.value
        if(event.target.name=="amount"){
            setAmount(value)
        }
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
        <title>Transfer</title>
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
                        <div className="px-5 mt-3">Transfer Money</div>
                        <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative'>
                            <div className="position-absolute px-2"><BsSearch /></div>                            
                            <input type="text" className='px-5 py-2 bg-color5 radius-1' placeholder= 'Search receiver here' />
                        </div>
                        <div className="px-5 mb-5">
                            <Card className={`${amounts.info} py-1 my-1 position-relative shadow-lg border-top-0 border-start-0 border-end-0 border-5 border-bottom`}>
                                <Row className="px-5 mt-3">
                                    <Col md={2}>
                                        <Image src={transfer.dataReceiver===null || transfer.dataReceiver.user===null || transfer.dataReceiver.user.picture===null || transfer.dataReceiver.user.picture=="undefined" ? "/images/profile.png" : transfer.dataReceiver.user.picture}  width={60} height={60} alt="profile"  />
                                    </Col>
                                    <Col md={10}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <div>{transfer.dataReceiver!== null && transfer.dataReceiver.user!==null && transfer.dataReceiver.user.fullName}</div>
                                            <div>{transfer.dataReceiver!==null && transfer.dataReceiver.user!==null && transfer.dataReceiver.phone}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <div>Type the amount you want to transfer and then press continue to the next steps.</div>
                            <Form onSubmit={transferHandler}>
                            <div className="mb-5">
                                <Input name="amount" type="number" value={amount} onChange={goTransfer}/>
                            </div>
                            {error!==null && error.amount ? <div className={amounts.error}>{error.amount}</div> : '' }
                            <div className="fs-5 fw-bold mb-5 text-primary">Rp {auth.balance!==null ? auth.balance.toLocaleString('id-ID') : 0} Available</div>
                            <div className='d-flex mt-5 mb-5 me-3'>
                                <FaPencilAlt/>
                                <Input type="text" name="notes"  placeholder="Add some note"/>
                            </div>
                            <div className="text-end mb-4">
                                <Button type="submit" >Continue</Button>
                            </div>
                            </Form>                    
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default InputAmount