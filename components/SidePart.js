import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {BsGrid} from 'react-icons/bs'
import {HiOutlineArrowUp, HiOutlinePlus} from 'react-icons/hi'
import {FiUser} from 'react-icons/fi'
import {MdLogout} from "react-icons/md"
import Modals from '../components/ModalsTopup'
import React from 'react'
import sidepart from "../styles/SidePart.module.scss";
import { useDispatch, useSelector } from 'react-redux'

const SidePart = ()=> {
    const [modalShow, setModalShow] = React.useState(false);
    const route = useRouter()
    const [active, setActive] = useState('/')
    const {auth} = useSelector (state => state)
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(()=>{
        setActive(route.pathname)
    }, [route.pathname])


    const variation = [
        {link: '/home', name: 'Dashboard', icon: BsGrid},
        {link: '/transfer', name: 'Transfer', icon: HiOutlineArrowUp},
        {link: '/topup', name: 'Topup', icon: HiOutlinePlus},
        {link: '/profile', name: 'Profile', icon: FiUser},
    ]
    return(
        <>
        <style jsx>
        {`
            .variation {
                list-style-type: none;
                border-radius: 20px
            }
            .variation li {
                margin: 10px 0;
            }
            .variation li a{
                color: rgba(58, 61, 66, 0.8);
                padding-left: 10px;
                text-decoration: none;
                border-left: 3px solid transparent;
                color : black;
            }
            .variation li a.active{
                color: #DED0C1;
                border-color: #70553B;
            }
            .logout {
                color  : black;
            }
        `}
        </style>
        <ul className="variation mt-2">
        {variation.map(item => {
            const Icon = item.icon
            return (
                <li key={item.name} >
                    <Link href={item.link}>
                        <a className={`d-flex flex-row align-items-center mt-4 ${active===item.link?'active':'' }`}>
                            {item.name === "Topup" &&
                           <div onClick={()=>setModalShow(true)}><span className='px-3'><Icon  /></span> {item.name}</div>}
                           <Modals show={modalShow} onHide={() => setModalShow(false)} />
                           {item.name !== "Topup" &&
                           <div><span className='px-3'><Icon  /></span> {item.name}</div>
                           }
                        </a>
                    </Link>
                </li>
            )
        })}
        </ul>
        <div className='mt-5'>
            <div className="px-4  mt-5">
                <div className="px-4 py-5 mt-5">
                    <div className="mt-5 py-3">
                        <Link href="/login" >
                            <a className=" d-flex flex-row mt-5 text-decoration-none logout">
                                <div className="px-3" ><MdLogout /></div>                                                                                                 
                                <div className='text-decoration-none' onClick={()=>dispatch({type: 'AUTH_LOGOUT'})}>Logout</div>
                            </a>                                        
                        </Link>                                    
                    </div>                                
                </div>
            </div>
        </div>
        </>
    )
}

export default SidePart