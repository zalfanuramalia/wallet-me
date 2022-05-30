import { Container, Row, Col, Card, Button} from "react-bootstrap"
import NavbarComponent from "../../components/NavbarHome"
import ProfileBar from "../../components/ProfileBar"
import Footer from "../../components/Footer"
import Head from 'next/head'
import { FaPencilAlt } from "react-icons/fa"
import style from "../../styles/add-phone-number.module.scss"

const AddPhoneNumber = () => {    
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
        <title>Profile</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarComponent />
        <Container className="profiles">
            <Row>
                <Col xl={3}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <ProfileBar />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <div>Add Phone Number</div>
                        <div>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</div>
                        <div className='d-flex mt-5 mb-5 me-3'>
                            <FaPencilAlt/>
                            <input type="text" name="notes"  placeholder="Add some note"/>
                        </div>
                        <div className="mt-5">
                        <Button type="submit" className={`${style.button} btn-primary mb-5`}>Change Phone Number</Button>
                     </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default AddPhoneNumber