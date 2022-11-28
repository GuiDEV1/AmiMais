// React Default
import React from 'react';
import { useState } from 'react';


//React Icons
import { AiOutlineStar, AiOutlineFacebook, AiFillStar } from 'react-icons/ai';
import { BiBone, BiLinkExternal, BiLike } from 'react-icons/bi';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { HiOutlineViewList } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { TbBrandTelegram, TbDogBowl } from 'react-icons/tb';
import { IconContext } from 'react-icons/lib';

//Internal Component
import { SideBar } from '../../../ComponentesConstantes/BarraLateral'
import { Interface } from '../../../ComponentesConstantes/Interface';
import '../style.css';

//DATABASE
const Tel = "(11) 7667-9865";
const City = "São Paulo";
const Rescue = "22 Animais";
const FavOng = "Petlove";
const VoluntTime = "3 meses";
const Description = "Ola sou Gilmar, trabalho com marketing e tambem resgator, minha paixão é  ajudar pets a encontrarem uma casinha :3"

const Name = "Aurora Pereira";
const User = "@AuroraPereira";
const Banner = "id1_banner"
const Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261001534644274/Aurora_Pereira.jpg";

const id7_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050264068147/Liz_Marques_Silva.jpg";
const id8_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050515718265/Lucas_Serikawa_Souza.jpg";
const id9_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050742231080/Marta_Valejo.jpg";
const id10_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050956128357/Matheus_Barbosa.jpg";
const id11_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261051241332806/Murilo_Cesar.jpg";



export function Rescue1() {
    return (
        <>
            <Interface />
            <div class="RescuerJS">
                <div className="flex">
                    <SideBar />
                    <div className='container'>
                        <section className={`component`}>
                            {/* ---------------------------------*/}
                            <div className={`mainHeader ${Banner}`}><Header /></div>
                            {/* ---------------------------------*/}
                        </section>

                        <section className='flex'>
                            <section>
                                <div className='component column'>
                                    <Favorite />
                                </div>
                                <div className='component column'>
                                    <Gallery />
                                </div>
                            </section>
                            <div className='column'>
                                <div className="component">
                                    <Reputation />
                                    <Body />;
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

const Header = () => {
    const [star_state, star_change] = useState("Unliked");
    const star_function = () => { star_change(!star_state) };
    var star_icon;
    if (star_state) {
        star_icon = <AiOutlineStar id="StarIConOrange" />;
    } else { star_icon = <AiFillStar id="StarICon" /> };
    //
    return (
        <>
            <IconContext.Provider value={{ size: "25px" }}>
                <div className="headerContainer">
                    <section className="headerPhoto">
                        {/*---------------*/}
                        <img src={Profile} />
                        {/*---------------*/}
                    </section>
                    <section>
                        <div className="headerName">
                            {/*-------*/}
                            <p>{Name}</p>
                            {/*-------*/}
                        </div>
                        <div className="headerDetails flex justify ">
                            <div>
                                {/*-------*/}
                                <p>{User}</p>
                                {/*-------*/}
                                <p>Resgatador</p>
                            </div>
                            <div className="borderIcon flex">
                                <div onClick={star_function} className={`profileBBorder interactButton ${star_state ? 'show' : ''}`}>
                                    <section onClick={star_function} className={` star ${star_state ? 'show' : ''}`}>
                                        <div className="">{star_icon}</div>
                                    </section>
                                </div>
                                <button className="interactButton">Mensagem</button>
                                <div className="profileBBorder interactButton"><HiOutlineViewList /></div>
                            </div>
                        </div>
                    </section>
                </div>
            </IconContext.Provider>
        </>
    )
}

const Reputation = () => {
    return (
        <>
            <div className="reputationContainer flex">
                <div>
                    <p>Voluntario há</p>
                    {/*-------------------*/}
                    <span>{VoluntTime}</span>
                    {/*-------------------*/}
                </div>
                <div>
                    <p>Total de Resgates</p>
                    {/*---------------*/}
                    <span>{Rescue}</span>
                    {/*---------------*/}
                </div>
                <div>
                    <p>Instituições preferidas</p>
                    <section className='interactButton'>
                        <IconContext.Provider value={{ size: "22px" }}>
                            <BiBone className="Iicon" />
                        </IconContext.Provider>
                        {/*---------------*/}
                        <span>{FavOng}</span>
                        {/*---------------*/}
                        <IconContext.Provider value={{ size: "20px" }}>
                            <BiLinkExternal className="Iicon" />
                        </IconContext.Provider>
                    </section>
                </div>
            </div>
        </>
    )
}

const Body = () => {
    return (
        <>
            <div className="bodyContainer">
                <section className='description'>
                    <span>Sobre mim:</span>
                    {/*--------------*/}
                    <p>{Description}</p>
                    {/*--------------*/}
                </section>
                <IconContext.Provider value={{ size: "29px" }}>
                    <div className="buttonDonate">
                        <div className="flex">
                            <p>Fazer uma <br /> Doação</p>
                            <FaRegMoneyBillAlt className="Iicon" />
                        </div>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "22px" }}>
                    <section>
                        <span>Conquistas</span>
                        <div className="achievements flex">
                            <div class="interactButton"><BiLike /></div>
                            <div class="interactButton"><TbDogBowl /></div>
                            <div class="interactButton"><IoMdNotificationsOutline /></div>
                            <div class="interactButton badges"><p>3+</p></div>
                        </div>
                    </section>
                </IconContext.Provider>
                <section className="lLeft">
                    <span>Redes Sociais</span>

                    <div className="flex">
                        <IconContext.Provider value={{ size: "25px" }}>
                            <BsInstagram className="socialmedia" />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "29px" }}>
                            <AiOutlineFacebook className="socialmedia" />
                            <TbBrandTelegram className="socialmedia" />
                        </IconContext.Provider>
                    </div>
                </section>

                <IconContext.Provider value={{ size: "20px" }}>
                    <section>
                        <div className='badgeBox'>
                            <span></span>

                            <div>
                                <p>A cada 2 troféus.<br /> O usuário recebe uma insignia</p>
                            </div>
                        </div>
                        <span>Progressão de conquista</span>
                        <div className="flex">
                            <div className="achievementBorder">
                                <div className="flex">
                                    <div><GiAchievement /></div>
                                    <div><GiAchievement /></div>
                                    <div><GiAchievement /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </IconContext.Provider>
                <section className="bodyRight">
                    <div className="flex">
                        <div className='bodyIcons'><MdLocationOn /></div>
                        {/**/}
                        {City}
                        {/**/}
                    </div>
                    <div className="flex">
                        <div className='bodyIcons'><BsFillTelephoneFill /></div>
                        {/**/}
                        {Tel}
                        {/**/}
                    </div>
                </section>
            </div>
        </>
    )
}



const Favorite = () => {
    return (
        <>
            <div className='favContainer'>
                <div className='favTitle'>
                    <p className='title'>Resgatadores Favoritos</p>
                    <div className='badges'>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id7_Profile} />
                        {/*---------------*/}
                        <p>@Liz<br />Marques</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id8_Profile} />
                        {/*---------------*/}
                        <p>@Luca<br />Serikaw</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id9_Profile} />
                        {/*---------------*/}
                        <p>@Marta<br />Valejo</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id10_Profile} />
                        {/*---------------*/}
                        <p>@Math<br />Barbo</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id11_Profile} />
                        {/*---------------*/}
                        <p>@Murilo<br />Cesar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Gallery = () => {
    return (
        <>
            <div className='galleryContainer'>
                <div className='favTitle'>
                    <p className='title'>Galeria</p>
                    <div className='badges'>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='img1'>
                        <img src="https://static1.patasdacasa.com.br/articles/3/52/13/@/21641-na-vida-real-o-snoopy-e-um-cachorro-da-articles_media_slider_mobile-2.jpg" />
                    </div>
                    <div className='img2'>
                        <img src="https://imagens.brasil.elpais.com/resizer/wfZD7TipZTa_ucYDeQfLgOTvods=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/TFVRPN62OLDBFIYVJVFJMMNXZU.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}
