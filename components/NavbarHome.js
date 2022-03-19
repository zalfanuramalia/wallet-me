import { Navbar,Container } from "react-bootstrap";
import Image from 'next/image'
import variables from '../styles/navbar.module.scss'

const NavbarComponent = ()=>{
    return(
        <Navbar className={variables.navbarLight} variant="dark">
        <Container>
          <Navbar.Brand className={variables.navbarBrand} href="/">Wallet-me</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image src='/images/profil.png' width={70} height={50} alt='profile' className="me-3 rounded-full"/>
            <Navbar.Text>
              <div className={variables.textName}>Robert Chandler</div>
              <div className={variables.textPhone}>+62 8139 3877 7946</div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent