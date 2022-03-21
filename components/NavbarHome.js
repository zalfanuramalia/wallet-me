import { Navbar,Container } from "react-bootstrap";
import Image from 'next/image'
import variables from '../styles/navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getDataProfile } from "../redux/actions/auth";
import Link from "next/link";
import styles from "../styles/home.module.scss"

const NavbarComponent = ()=>{  
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

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
    return(
        <Navbar className={variables.navbarLight} variant="dark">
        <Container>
          <Navbar.Brand className={variables.navbarBrand} href="/">
            <Link href='/home'>
              <a className="text-decoration-none text-color3">Wallet-me</a>
            </Link> 
          </Navbar.Brand>
          <Navbar.Toggle />
          {auth.token !== null && 
          <Navbar.Collapse className="justify-content-end">
            <Image src='/images/profil.png' width={70} height={50} alt='profile' className="me-3 rounded-full"/>
            <Navbar.Text>
              <div className={variables.textName}>{auth.userData.fullName}</div>
              <div className={variables.textPhone}>+62 8139 3877 7946</div>
            </Navbar.Text>
          </Navbar.Collapse>}
          {auth.token === null && <div className='navbar-text'>
            <div className="toggled-action d-flex align-items-center mt-3">
              <div><Link href='/login'><a><button className={`${styles.button} mx-2 px-3 py-1 mb-2 text-center`}>Login</button></a></Link></div>
              <div><Link href='/register'><a><button className={`${styles.button} mx-2 px-3 py-1 mb-2 text-center`}>Register</button></a></Link></div>
            </div>
          </div>}
        </Container>
      </Navbar>
    )
}

export default NavbarComponent