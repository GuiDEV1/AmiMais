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
import { SideBar } from '../../../../ComponentesConstantes/BarraLateral'
import { Interface } from '../../../../ComponentesConstantes/Interface';
import '../../style.css';

//DATABASE
import {
    id8_Tel, id8_City, id8_Rescue, id8_FavOng, id8_VoluntTime, id8_Description, id8_Name, id8_User, id8_Banner, id8_Profile,
    id7_Name, id7_Profile, id6_Name, id6_Profile, id9_Name, id9_Profile, id10_Name, id10_Profile, id11_Name, id11_Profile,
} from '../../database';

// Define this Rescuer
const Tel = id8_Tel;
const City = id8_City;
const Rescue = id8_Rescue;
const FavOng = id8_FavOng;
const VoluntTime = id8_VoluntTime;
const Description = id8_Description;

const Name = id8_Name;
const User = id8_User;
const Banner = id8_Banner;
const Profile = id8_Profile;


export function Rescue8() {
    return (
        <>
            <Interface />
            <div class="RescuerPerfil">
                <div className="flex">
                    <SideBar />
                    <div className='container'>
                        <section className={`component`}>
                            <div className={`mainHeader ${Banner}`}><Header /></div>
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
            <div className="headerContainer">
                <section className="headerPhoto">
                    {/*---------------*/}
                    <img src={Profile} alt={Name} />
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
                                    <IconContext.Provider value={{ size: "22px" }}>
                                        <div>{star_icon}</div>
                                    </IconContext.Provider>
                                </section>
                            </div>
                            <button className="interactButton">Mensagem</button>
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className="profileBBorder interactButton"><HiOutlineViewList /></div>
                            </IconContext.Provider>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const Reputation = () => {
    return (
        <>
            <div className="reputationContainer flex">
                <div>
                    <section className='reputationCenter'>
                        <p>Voluntario há</p>
                    </section>
                    <section className='reputationCenter'>
                        <span>{VoluntTime}</span>
                    </section>
                </div>
                <div>
                    <section className='reputationCenter'>
                        <p>Total de Resgates</p>
                    </section>
                    <section className='reputationCenter'>
                        <span>{Rescue}</span>
                    </section>
                </div>
                <div>
                    <section className='reputationCenter'>
                        <p>Instituições preferidas</p>
                    </section>
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
                <div className="bodyLeft">
                    <section className='description'>
                        <div className="titleMargin">
                            <span>Sobre mim:</span>
                        </div>
                        {/*--------------*/}
                        <p>{Description}</p>
                        {/*--------------*/}
                    </section>
                    <IconContext.Provider value={{ size: "22px" }}>
                        <section>
                            <div className="titleMargin">
                                <span>Conquistas</span>
                            </div>

                            <div className="achievements flex">
                                <div class="interactButton"><BiLike /></div>
                                <div class="interactButton"><TbDogBowl /></div>
                                <div class="interactButton"><IoMdNotificationsOutline /></div>
                                <div class="interactButton badges"><p>3+</p></div>
                            </div>
                        </section>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: "20px" }}>
                        <section>
                            <div className='badgeBox'>
                                <span></span>

                                <div>
                                    <p>A cada 2 troféus.<br /> O usuário recebe uma insignia</p>
                                </div>
                            </div>
                            <div className="titleMargin">

                                <span>Progressão de conquista</span>
                            </div>

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
                </div>
                <div className='bodyRight'>
                    <section className="buttonDonate">
                        <div className="flex">
                            <p>Fazer uma <br /> Doação</p>
                            <IconContext.Provider value={{ size: "29px" }}>
                                <FaRegMoneyBillAlt className="Iicon" />
                            </IconContext.Provider>
                        </div>
                    </section>
                    <section>
                        <div className="titleMargin">

                            <span>Redes Sociais</span>
                        </div>

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
                    <section>
                        <div className="titleMargin">
                            <span>Informações</span>
                        </div>

                        <div className="flex informations">
                            <div className='bodyIcons'><MdLocationOn /></div>
                            {City}
                        </div>
                        <div className="flex informations">
                            <div className='bodyIcons'><BsFillTelephoneFill /></div>
                            {Tel}
                        </div>
                    </section>
                </div>
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
                        <img src={id7_Profile} alt={id7_Name} />
                        {/*---------------*/}
                        <p>@Liz<br />Marques</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id8_Profile} alt={id8_Name} />
                        {/*---------------*/}
                        <p>@Luca<br />Serikaw</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id9_Profile} alt={id9_Name} />
                        {/*---------------*/}
                        <p>@Marta<br />Valejo</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id10_Profile} alt={id10_Name} />
                        {/*---------------*/}
                        <p>@Math<br />Barbo</p>
                    </div>
                    <div className='favProfile'>
                        {/*---------------*/}
                        <img src={id11_Profile} alt={id11_Name} />
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
                        <img src="https://static1.patasdacasa.com.br/articles/3/52/13/@/21641-na-vida-real-o-snoopy-e-um-cachorro-da-articles_media_slider_mobile-2.jpg" alt="Galeria Imagem1" />
                    </div>
                    <div className='img2'>
                        <img src="https://imagens.brasil.elpais.com/resizer/wfZD7TipZTa_ucYDeQfLgOTvods=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/TFVRPN62OLDBFIYVJVFJMMNXZU.jpg" alt="Galeria Imagem1" />
                    </div>
                </div>
            </div>
        </>
    )
}
