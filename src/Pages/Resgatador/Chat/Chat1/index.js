// React Default
import React from 'react';
import { useState } from 'react';

//React Icons
import { AiOutlinePicture, AiOutlinePaperClip, AiOutlineGif } from 'react-icons/ai'
import { BsThreeDots, BsFillCircleFill } from 'react-icons/bs'
import { CiFaceSmile } from 'react-icons/ci'
import { IconContext } from "react-icons";

//Internal Component
import { Interface } from '../../../../ComponentesConstantes/Interface';
import { SideBar } from '../../../../ComponentesConstantes/BarraLateral';
import BollonChat from '../imagens/bollon.svg';
import "../style.css"

//DATABASE
import { p1Icon, p1Name, p1Title, p1DataMeng, p1TimeMeng, p1LastMeng, ChatConversation } from "../AmimaisChat.js"
import {
    id1_Name, id1_User, id1_Profile,
    id2_Name, id2_User, id2_Profile,
    id3_Name, id3_User, id3_Profile,
    id4_Name, id4_User, id4_Profile,
    id5_Name, id5_User, id5_Profile,
    id6_Name, id6_User, id6_Profile,
    id7_Name, id7_User, id7_Profile,
    id8_Name, id8_User, id8_Profile,
    id9_Name, id9_User, id9_Profile,
    id10_Name, id10_User, id10_Profile,
    id11_Name, id11_User, id11_Profile
} from '../../database';

const CURRENT_USER = id1_User
const CURRENT_NAME = id1_Name
const CURRENT_PROFILE = id1_Profile

const CURRENT_DAY = "Hoje"
const CURRENT_TIME = "17:23"
const CURRENT_CHAT = <><span>Você: Ele esta sujo, mas acho...</span></>


export function Chat1() {
    const [star_state, star_change] = useState("Unliked");
    const star_function = () => { star_change(!star_state) };
    var star_icon;
    if (star_state) {
        star_icon = <ChatConversation2 />;
    } else { star_icon = <ChatConversation /> };
    //
    return (
        <>
            <Interface />
            <div className="CHATT flex">
                <SideBar mensage="searchButton" />
                <div className="CHAT flex">
                    <div className="list">
                        <div onClick={star_function} className={` ${star_state ? '' : 'select'}`}>
                            <ChatContacts
                                PERSON={p1Icon}
                                NAME={p1Name}
                                TITLE={p1Title}
                                DATAMENSG={p1DataMeng}
                                TIMEMENSG={p1TimeMeng}
                                LASTMENSG={p1LastMeng}
                            />
                        </div>
                        <div onClick={star_function} className={`last_div ${star_state ? 'select' : ''}`}>
                            <ChatContacts
                                PERSON={CURRENT_PROFILE}
                                NAME={CURRENT_USER}
                                TITLE={CURRENT_NAME}
                                DATAMENSG={CURRENT_DAY}
                                TIMEMENSG={CURRENT_TIME}
                                LASTMENSG={CURRENT_CHAT}
                            />
                        </div>
                    </div>
                    {star_icon}
                </div>
            </div>
        </>
    )
}

const ChatContacts = ({ PERSON, NAME, TITLE, DATAMENSG, TIMEMENSG, LASTMENSG }) => {
    return (
        <div className="container flex">
            <section>
                <img src={PERSON} />
            </section>
            <section>
                <div className="contact flex">
                    <div>
                        <span>{NAME}</span>
                        <p>{TITLE}</p>
                    </div>
                    <div className="right">
                        <span>{DATAMENSG}</span>
                        <p>{TIMEMENSG}</p>
                    </div>
                </div>
                <div className="lastViewed">{LASTMENSG}</div>
            </section>
        </div>
    )
}

const ChatConversation2 = () => {
    return (
        <div className="conversation">
            <section className="">
                <div className="perfilheader flex ">
                    <img src={CURRENT_PROFILE} />
                    <section className="flex justify">
                        <div>
                            <span>{CURRENT_USER}</span>
                            <p>{CURRENT_NAME}</p>
                        </div>
                        <div>
                            <span>Status</span>
                            <div className="flex status">
                                <BsFillCircleFill />
                                <p>Disponivel</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="contactChat">
                    <section className="center">
                        <p>Hoje</p>

                    </section>
                    <section className="right bfirst">
                        <p>Ola bom dia! 😁<br />Gostaria de solicitar um resgate</p>
                        <span>15:12</span>

                    </section>
                    <section className="byUser bollon right ">
                        <p>Achei um gato perto da rua Itapicirica da Serra, n° 3</p>
                        <span>15:15</span>
                    </section>
                    <section className="bfirstLeft">
                        <p>Ola tudo bem, queria saber como esta o gato?</p>
                        <span>15:21</span>
                    </section>
                    <section className="bfirst right">
                        <p>Ele esta sujo, mas acho que ele esta muito bem! </p>
                        <span>15:25</span>
                    </section>
                </div>
            </section>
            <div className="contactFoot">
                <textarea className="bollon">
                    Só queria saber como funciona
                </textarea>
                <IconContext.Provider value={{ size: "25px" }}>
                    <section className="flex justify">
                        <div className="flex">
                            <div className="IiconChat"> <AiOutlinePicture /></div>
                            <div className="IiconChat"> <AiOutlinePaperClip /></div>
                            <div className="IiconChat"> <AiOutlineGif /></div>
                            <div className="IiconChat"> <CiFaceSmile /></div>
                        </div>
                        <div className="flex">
                            <div className="IiconChat"> <BsThreeDots /></div>
                            <div className="bottom">
                                <div>
                                    <p>Enviar</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </IconContext.Provider>
            </div>
        </div>
    )
}

