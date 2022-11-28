import React from 'react';

import { AiOutlineStar, AiOutlineFacebook } from 'react-icons/ai';
import { BiBone, BiLinkExternal, BiLike } from 'react-icons/bi';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { HiOutlineViewList } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { TbBrandTelegram, TbDogBowl } from 'react-icons/tb';

import { IconContext } from 'react-icons/lib';
import { SideBar } from '../../../ComponentesConstantes/BarraLateral'
import { Interface } from '../../../ComponentesConstantes/Interface';
import '../style.css';

//-------------------------------------------------------------------------------------------------------------------------
const id4_Tel = "(11) 9865-7667";
const id4_City = "Rio de Janeiro";
const id4_Rescue = "5 Animais";
const id4_FavOng = "PetTop";
const id4_VoluntTime = "1 ano";
const id4_Description = "Guilherme Lorem"

const id4_Name = "Gabriel Rosseto";
const id4_User = "@GabielRosset";
const id4_Banner = "id4_banner"
const id4_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261028684374026/Gabriel_Rosseto.jpg";
//-------------------------------------------------------------------------------------------------------------------------
export function Rescue4() {
    return (
        <>
            <Interface />
            <div id="Resgatador">
                <div className=" flex">
                <SideBar />
                    <div className='rescueComponent'>
                        <section className={`rescueContainer`}>
                            <div className={`Resg-Header ${id4_Banner}`}>  {/* Trocar Background no CSS*/}
                                <ResgatadorHeader />
                            </div>
                        </section>
                        <section className='flex'>
                            <div>
                                <div className='assd rescueContainer'>
                                    <ResgatadorFavorites />
                                </div>
                                <div className='assd rescueContainer'>
                                    <ResgatadorGallery />
                                </div>
                            </div>
                            <div className='assd'>
                                <ResgatadorBody
                                    TEL={id4_Tel}
                                    CITY={id4_City}
                                    USER={id4_User}
                                    NAME={id4_Name}
                                    BANNER={id4_Banner}
                                    FAVORITE_ONG={id4_FavOng}
                                    RESCUES_TOTAL={id4_Rescue}
                                    PROFILE={id4_Profile}
                                    RESCUE_TIME={id4_VoluntTime}
                                    DESCRIPTION={id4_Description}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

const ResgatadorHeader = ({ NAME, USER, PROFILE }) => {
    return (
        <>
            <div className="profileHeader">
                <div className="profilePhoto">
                    {/* Trocar FOTO na VAR-PHOTO*/}
                    <img src={id4_Profile} />
                </div>

                <div>
                    <div className="profileName">
                        {/* Trocar NOME na VAR-NAME*/}
                        <p>{id4_Name}</p>
                    </div>
                    <div className="profileDetails flex justify ">
                        <div>
                            {/* Trocar USUARIO na VAR-USER*/}
                            <p>{id4_User}</p>
                            <p>Resgatador</p>
                        </div>
                        <div className="profileButtons flex">
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className="profileBBorder"><AiOutlineStar /></div>
                                <button>Mensagem</button>
                                <div className="profileBBorder"><HiOutlineViewList /></div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const ResgatadorBody = ({ TEL, USER, CITY, NAME, BANNER, FAVORITE_ONG, RESCUES_TOTAL, PROFILE, RESCUE_TIME, DESCRIPTION }) => {
    {/* ------------------------------ */ }
    return (
        <>
            <div className="rescueContainer">
                <ResgatadorRepution
                    RESCUE_TIME={RESCUE_TIME}
                    FAVORITE_ONG={FAVORITE_ONG}
                    RESCUES_TOTAL={RESCUES_TOTAL}
                />
                <ResgatadorInformation
                    TEL={TEL}
                    CITY={CITY}
                    DESCRIPTION={DESCRIPTION}
                />;
            </div>
        </>
    )
}

const ResgatadorRepution = ({ FAVORITE_ONG, RESCUES_TOTAL, RESCUE_TIME }) => {
    return (
        <>
            <div className="rescueReputation flex">
                <div>
                    <p>Voluntario há</p>
                    {/* Trocar TEMPO DE RESGATE na VAR-RESCUE_TIME*/}
                    <span>{RESCUE_TIME}</span>
                </div>
                <div>
                    <p>Total de Resgates</p>
                    {/* Trocar QUANTIDADE DE RESGATE na VAR-RESCUES_TOTAL*/}
                    <span>{RESCUES_TOTAL}</span>
                </div>
                <div>
                    <p>Instituições preferidas</p>
                    <IconContext.Provider value={{ size: "22px" }}>
                        <BiBone className="rescueIcon" />
                    </IconContext.Provider>
                    <span>{FAVORITE_ONG}</span>
                    <IconContext.Provider value={{ size: "20px" }}>
                        <BiLinkExternal className="rescueIcon" />
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

{/* Trocar valore nas Vars*/ }
const ResgatadorInformation = ({ TEL, CITY, DESCRIPTION }) => {
    return (
        <>
            <div className="rescueInformation">
                <section>
                    <span>Sobre mim:</span>
                    <p>{DESCRIPTION}</p>
                </section>

                <div className="rescueDonate">
                    <div className="flex">
                        <p>Fazer uma <br />Doação</p>
                        <IconContext.Provider value={{ size: "29px" }}>
                            <FaRegMoneyBillAlt className="rescueIcon" />
                        </IconContext.Provider>
                    </div>
                </div>

                <section>
                    <span>Conquistas</span>
                    <div className="reAchivimentIcon flex">
                        <IconContext.Provider value={{ size: "22px" }}>
                            <div><BiLike /></div>
                            <div><TbDogBowl /></div>
                            <div><IoMdNotificationsOutline /></div>
                            <div><p>3+</p></div>
                        </IconContext.Provider>
                    </div>
                </section>

                <section className="">
                    <span>Redes Sociais</span>
                    <div className=" flex">
                        <IconContext.Provider value={{ size: "25px" }}>
                            <BsInstagram className="socialmedia" />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "29px" }}>
                            <AiOutlineFacebook className="socialmedia" />
                            <TbBrandTelegram className="socialmedia" />
                        </IconContext.Provider>
                    </div>
                </section>

                <section>
                    <span>Progressão de conquista</span>
                    <div className="flex">
                        <IconContext.Provider value={{ size: "20px" }}>
                            <div className="reAchivimentBorder">
                                <div><GiAchievement /></div>
                                <div><GiAchievement /></div>
                                <div><GiAchievement /></div>
                            </div>
                        </IconContext.Provider>
                    </div>
                </section>

                <section className="reinfoRight">
                    <div className="rereinfoRight flex">
                        <div className='rescueInfoIcons'><MdLocationOn /></div>
                        {CITY}
                    </div>
                    <div className="rereinfoRight flex">
                        <div className='rescueInfoIcons'><BsFillTelephoneFill /></div>
                        {TEL}
                    </div>
                </section>
            </div>
        </>
    )
}



const ResgatadorFavorites = () => {
    return (
        <>
            <div className='rescueFav'>
                <div className='favTitle'>
                    <p>Resgatadores Favoritos</p>
                    <div>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img src={id4_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id4_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id4_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id4_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id4_Profile} />
                        <p>@Gilmar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const ResgatadorGallery = () => {
    return (
        <>
            <div className='rescueGallery'>
                <div className='favTitle'>
                    <p>Galeria</p>
                    <div>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='img1'>
                        <img src={id4_Profile} />
                    </div>
                    <div className='img2'>
                        <img src={id4_Profile} />
                    </div>
                </div>
            </div>
        </>
    )
}
