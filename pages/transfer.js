import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import SidePart from "../components/SidePart"
import {BsSearch} from "react-icons/bs"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { getUsers } from "../redux/actions/users"
import { getUserRecepient } from "../redux/actions/transfer"
import { useEffect, useState } from "react"
import Head from "next/head"
import styles from "../styles/transfer.module.scss"
import Footer from "../components/Footer"
import profile from "../public/images/profil.png"

const Transfers = () => {
    const {users} = useSelector(state=> state)
    const {auth} = useSelector(state=>state)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers(auth.token))
    },[])

    const goToTransfer = (items, phones=null) => {
        dispatch(getUserRecepient(items, phones))
        router.push('/transfer/inputamount')
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
            <Row className="mb-5">
                <Col xl={3}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className={`${styles.scroll} mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1`}>
                        <div className="px-5 mt-3">Search Receiver</div>
                        <div className='d-flex flex-row align-items-center px-5 my-3 w-100 d-inline-block position-relative'>
                            <div className="position-absolute px-2"><BsSearch /></div>                            
                            <input type="text" className='px-5 py-2 bg-color5 radius-1' placeholder= 'Search receiver here' />
                        </div>
                        <div className={`${styles.scroll} px-5`}>
                            {users.userData.length > 0 && auth.userData !== null && users.userData.filter((items)=>items.id !== auth.userData.id).map((items)=>{
                                return (
                                    <>{
                                    items.phone.length > 0 ?
                                    items.phone.map((phones)=>{
                                        return (<Card key={phones.id} onClick={() => goToTransfer(items, phones)} style={{ cursor: 'pointer' }} className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                                    <Row className="px-5 mt-3">
                                                        <Col md={2}>
                                                            <Image src={items.picture===null ? '/images/profil.png' : items.picture}  width={60} height={60} alt="profile"  />
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <div>{items.fullName}</div>
                                                                <div>{phones.number}</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card>)
                                        })
                                    :
                                    <Card key={items.id} onClick={() => goToTransfer(items)} style={{ cursor: 'pointer' }} className="mt-3 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius-1">
                                        <Row className="px-5 mt-3">
                                            <Col md={2}>
                                                <Image src={items.picture !== null ? items.picture : profile}  width={60} height={60} alt="profile"  />
                                            </Col>
                                            <Col md={10}>
                                                <div className="d-flex flex-column justify-content-center">
                                                    <div>{items.fullName}</div>
                                                    <div>-</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                }</>
                                )
                            })}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Transfers