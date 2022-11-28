import React from "react"



import { Interface } from '../../../ComponentesConstantes/Interface';
import "./style.css"
import { SideBar } from '../../../ComponentesConstantes/BarraLateral';
import BollonChat from './bollon.svg';

export function Chat() {
    return (
        <>
            <Interface />
            <div className="flex">
            <SideBar mensage="searchButton" />
                <div className="CHAT flex">
                    <div className="list">
                        <div>
                            <ChatContacts
                                PERSON={p1Icon}
                                NAME={p1Name}
                                TITLE={p1Title}
                                DATAMENSG={p1DataMeng}
                                TIMEMENSG={p1TimeMeng}
                                LASTMENSG={p1LastMeng}
                            />
                        </div>
                        <div className="select">
                            <ChatContacts
                                PERSON={p2Icon}
                                NAME={p2Name}
                                TITLE={p2Title}
                                DATAMENSG={p2DataMeng}
                                TIMEMENSG={p2TimeMeng}
                                LASTMENSG={p2LastMeng}
                            />
                        </div>
                    </div>
                    <ChatConversation/>
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
                            <span>o</span>
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
            <div className="contactFoot">
                <div className="bollon">
                    <p>Só queria saber como funciona</p>
                </div>
                <section className="flex justify">
                    <div className="flex">
                        <p>Icon</p>
                        <p>Icon</p>
                        <p>Icon</p>
                        <p>Icon</p>
                    </div>
                    <div className="flex">
                        <div className="bottom">
                            <p>...</p>
                        </div>
                        <div className="bottom">
                            <p>Enviar</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}



const p1Icon = "data:image/jpeg;base64,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"
const p1Name = "AmiMAIS"
const p1Title = "Suporte"
const p1DataMeng = "22/11"
const p1TimeMeng = "9:30"
const p1LastMeng = "Bem vindo ao suporte AmiMais!"

const p2Icon = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261001534644274/Aurora_Pereira.jpg"
const p2Name = "@Gilmar"
const p2Title = "Gilmar de Sousa"
const p2DataMeng = "Hoje"
const p2TimeMeng = "17:23"
const p2LastMeng = <><span>Você: Ele esta sujo, mas acho...</span></>