
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsChatLeftDots, BsGear } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'
import { FooterMin } from '../FooterMin';
import { Link } from 'react-router-dom';


import { IconContext } from 'react-icons';
import './style.css'
export function SideBar(props) {
    return (
        <>
            <div className='sideBar'>
                <ul>
                    <IconContext.Provider value={{ size: "40px" }}>
                        <li className='sideButton notify' id={props.notify}>
                            <Link to="/Notifications">
                                <div><IoMdNotificationsOutline /></div>
                                <p>Notificações</p>
                            </Link>

                        </li>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <li className='sideButton' id={props.mensage}>
                            <Link to="/Chat">
                                <div><BsChatLeftDots /></div>
                                <p>Conversas</p>
                            </Link>

                        </li>
                        <li className='sideButton' id={props.search}>
                            <Link to="/SolicitarResgatador">
                                <div><FiSearch /></div>
                                <p>Recrutadores<br />Proximos</p>
                            </Link>
                        </li>

                        <li className='sideButton' id={props.ong}>
                            <Link to="/Resgate">
                                <div><SlLocationPin /></div>
                                <p>ONGS<br />Proximas</p>
                            </Link>

                        </li>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "30px" }}>
                        <div className='sideButton config' id={props.config}>
                            <Link to="/Configuration">
                                <div><BsGear /></div>
                                <p>Configurações</p>
                            </Link>

                        </div>
                    </IconContext.Provider>
                </ul>
                <div>
                    <div className='FooterMin'>
                        <FooterMin />
                    </div>
                </div>
            </div>

        </>
    )
}


