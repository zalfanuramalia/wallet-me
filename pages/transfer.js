import { Container, Row, Col, Card } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import {MdLogout} from "react-icons/md"
import Link from "next/link"
import SidePart from "../components/SidePart"

const transfer = () => {
    return (
        <>
        <NavbarComponent />
        <Container>
            <Row>
                <Col xl={3}>
                    <Card className="mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom radius">
                        {/* <div className="d-flex flex-row px-3 my-3 mt-5">
                            <i className="bi bi-grid px-3"></i>
                            <div>Dashbord</div>
                        </div>
                        <div className="d-flex flex-row px-3  my-3">
                            <i className="bi bi-arrow-up px-3"></i>
                            <div>Transfer</div>
                        </div>
                        <div className="d-flex flex-row px-3  my-3">
                            <i className="bi bi-plus-lg px-3"></i>
                            <div>Top Up</div>
                        </div>
                        <div className="d-flex flex-row px-3  my-3">
                            <i className="bi bi-person px-3"></i>
                            <div>Profile</div>
                        </div>  
                        <div className="px-3 my-3 mt-5">
                            <div className=" my-3 mt-5">
                                <div className="mt-5">
                                    <Link href="/" >
                                        <a className=" d-flex flex-row mt-5 mb-4 text-color3 text-decoration-none">
                                            <div className="px-3" ><MdLogout /></div>                                        
                                            <div>Logout</div>
                                        </a>                                        
                                    </Link>                                    
                                </div>                                
                            </div>
                        </div>*/}
                        <SidePart />
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default transfer