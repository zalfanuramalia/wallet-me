import { Container, Row, Col, Card, Button } from "react-bootstrap"
import NavbarComponent from "../components/NavbarHome"
import { useRouter } from 'next/router'
import SidePart from "../components/SidePart"
import Image from "next/image"
import { VscEdit } from "react-icons/vsc"
import { BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import profiles from '../styles/profil.module.scss'
import Head from "next/head"
import Footer from "../components/Footer"
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from 'react'
import { getDataProfile } from "../redux/actions/auth";
import photo from '../public/images/empty-input-image.png'

const Profile = () => {
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const hiddenFileInput = useRef(null)
    const [data, setData] = useState({})

    // const { id } = useParams()
    
    const router = useRouter()

    useEffect(() => {
        dispatch(getDataProfile(auth.token))
    }, [])

    const fileInputHandler = (e) => {
        const reader = new FileReader();
        const picture = e.target.files[0];

        const profileImage = document.querySelector('#profile-image');
        reader.readAsDataURL(picture);

        reader.onload = (e) => {
            profileImage.src = e.target.result;
            profileImage.className += ' rounded-circle'
        };


        setData({
            picture: e.target.files[0]
        });
    };

    const uploadFile = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
    }

    // const editedProfile = (e) => {
    //     e.preventDefault()
    //     const token = window.localStorage.getItem("token")
    //     const inputData = {}
    //     inputData.name = e.target.elements['name'].value
    //     inputData.price = e.target.elements['price'].value
    //     inputData.description = e.target.elements['description'].value
    //     inputData.image = data.image
    //     dispatch(editProduct(token, id, inputData))
    //     window.scrollTo(0, 0)
    // }

    useEffect(()=>{
      const token = window.localStorage.getItem('token')
      if(token){
        dispatch({
          type: 'AUTH_LOGIN_FULFILLED',
          payload: {
            data: {
              results: {
                token
              }
            }
          }
        })
      dispatch(getDataProfile(token))
      
      }
    },[dispatch,auth.token])
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
                        <SidePart />
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="radius mt-5 position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom ">
                        <div className="text-center mt-5">
                            <Image id='profile-image' src={auth.userData.picture || photo} width={90} height={70} alt="profile" className="me-3 rounded-full"/>
                        </div>
                        <div className="d-flex flex-row justify-content-center px-3 mt-1 mb-2">
                            <span><VscEdit /></span>
                            <div onClick={(e) => uploadFile(e)} className="px-3">Edit</div>
                            <input type="file"
                                ref={hiddenFileInput}
                                className='d-none'
                                name='image'
                                accept='image'
                                onChange={(e) => fileInputHandler(e)}
                            />
                        </div>
                        {auth.token !== null && <div>
                        <div className="text-center mt-3 text-name">{auth.userData.fullName}</div>
                        <div className="text-center mt-1 text-phone text-color3">+62 813-9387-7946</div></div>}
                        <div className="text-center mt-3">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/personal-information">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Personal Information</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/change-password">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Change Password</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 text-center bg-color1 ${profiles.btnlogin}`}>
                                <Link href="/profile/change-pin">
                                    <a className='bg-color1 text-color4 text-decoration-none d-flex flex-row justify-content-between align-items-center'>
                                        <div>Change Pin</div>
                                        <div><BsArrowRight /></div>
                                    </a>
                                </Link>                                
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button className={`mt-3 mb-5 text-color4 bg-color1 ${profiles.btnlogin}`}>
                                <div className="d-flex flex-row justify-content-between">Logout</div>
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}

export default Profile