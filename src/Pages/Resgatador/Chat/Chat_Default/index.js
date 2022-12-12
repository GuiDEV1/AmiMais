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
import { p1Icon, p1Name, p1Title, p1DataMeng, p1TimeMeng, p1LastMeng } from "../AmimaisChat.js"


export function Chat() {
    const [star_state, star_change] = useState("Unliked");
    const star_function = () => { star_change(!star_state) };
    var star_icon;
    if (star_state) { star_icon = <></>;
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

const ChatConversation = () => {
    return (
        <div className="conversation">
            <div className="perfilheader flex ">
                <img src={p1Icon} />
                <section className="flex justify">
                    <div>
                        <span>{p1Name}</span>
                        <p>{p1Title}</p>
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
                <section className="bfirstLeft">
                    <p>Ola bom dia! 😁<br /> Eu estou aqui para o seu auxilio.</p>
                    <span>09:24</span>
                </section>
                <section className="bfirstLeft">
                    <p>Como posso te ajudar? Em relação a resgate, plataforma etc...</p>
                    <span>09:25</span>

                </section>
                <section className="byUser bollon right">
                    <p>Como funciona o metodo de doação a resgatador?</p>
                    <span>11:59</span>
                </section>
            </div>
            <div className="contactFoot">
                <textarea className="bollon">
                    Qualquer um pode contruibuir?
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

