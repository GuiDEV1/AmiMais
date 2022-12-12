// React Default
import React from 'react';
import { useState } from 'react';

//React Icons
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiBone, BiLinkExternal } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';

//External Components
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

//Internal Component
import { Interface } from '../../ComponentesConstantes/Interface';
import { SideBar } from '../../ComponentesConstantes/BarraLateral';
import './style.css';

// Connect Database
import {
   id1_Tel, id1_City, id1_Rescue, id1_FavOng, id1_VoluntTime, id1_Description, id1_Name, id1_User, id1_Banner, id1_Profile,
   id2_Tel, id2_City, id2_Rescue, id2_FavOng, id2_VoluntTime, id2_Description, id2_Name, id2_User, id2_Banner, id2_Profile,
   id3_Tel, id3_City, id3_Rescue, id3_FavOng, id3_VoluntTime, id3_Description, id3_Name, id3_User, id3_Banner, id3_Profile,
   id4_Tel, id4_City, id4_Rescue, id4_FavOng, id4_VoluntTime, id4_Description, id4_Name, id4_User, id4_Banner, id4_Profile,
   id5_Tel, id5_City, id5_Rescue, id5_FavOng, id5_VoluntTime, id5_Description, id5_Name, id5_User, id5_Banner, id5_Profile,
   id6_Tel, id6_City, id6_Rescue, id6_FavOng, id6_VoluntTime, id6_Description, id6_Name, id6_User, id6_Banner, id6_Profile,
   id7_Tel, id7_City, id7_Rescue, id7_FavOng, id7_VoluntTime, id7_Description, id7_Name, id7_User, id7_Banner, id7_Profile,
   id8_Tel, id8_City, id8_Rescue, id8_FavOng, id8_VoluntTime, id8_Description, id8_Name, id8_User, id8_Banner, id8_Profile,
   id9_Tel, id9_City, id9_Rescue, id9_FavOng, id9_VoluntTime, id9_Description, id9_Name, id9_User, id9_Banner, id9_Profile,
   id10_Tel, id10_City, id10_Rescue, id10_FavOng, id10_VoluntTime, id10_Description, id10_Name, id10_User, id10_Banner, id10_Profile,
   id11_Tel, id11_City, id11_Rescue, id11_FavOng, id11_VoluntTime, id11_Description, id11_Name, id11_User, id11_Banner, id11_Profile
} from '../Resgatador/database';


export function CallRescue() {
   return (
      <>
         <div id="Solicite">
            <Interface />
            <div className="flex">
               <SideBar search="searchButton" />
               <h2><strong>Solicitar</strong> Resgatador</h2>
               <Carousel itemsToScroll={1} itemsToShow={2} className='container flex'>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue1"}
                        TEL={id1_Tel}
                        CITY={id1_City}
                        USER={id1_User}
                        NAME={id1_Name}
                        BANNER={id1_Banner}
                        FAVONG={id1_FavOng}
                        RESCUES={id1_Rescue}
                        PROFILE={id1_Profile}
                        VOLUNTTIME={id1_VoluntTime}
                        DESCRIPTION={id1_Description}
                        defaultFavorite={true}
                        MENSAGEM={"Chat1"}
                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue2"}
                        TEL={id2_Tel}
                        CITY={id2_City}
                        USER={id2_User}
                        NAME={id2_Name}
                        BANNER={id2_Banner}
                        FAVONG={id2_FavOng}
                        RESCUES={id2_Rescue}
                        PROFILE={id2_Profile}
                        VOLUNTTIME={id2_VoluntTime}
                        DESCRIPTION={id2_Description}
                        MENSAGEM={"Chat2"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue3"}
                        TEL={id3_Tel}
                        CITY={id3_City}
                        USER={id3_User}
                        NAME={id3_Name}
                        BANNER={id3_Banner}
                        FAVONG={id3_FavOng}
                        RESCUES={id3_Rescue}
                        PROFILE={id3_Profile}
                        VOLUNTTIME={id3_VoluntTime}
                        DESCRIPTION={id3_Description}
                        MENSAGEM={"Chat3"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue4"}

                        TEL={id4_Tel}
                        CITY={id4_City}
                        USER={id4_User}
                        NAME={id4_Name}
                        BANNER={id4_Banner}
                        FAVONG={id4_FavOng}
                        RESCUES={id4_Rescue}
                        PROFILE={id4_Profile}
                        VOLUNTTIME={id4_VoluntTime}
                        DESCRIPTION={id4_Description}
                        MENSAGEM={"Chat4"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue5"}
                        TEL={id5_Tel}
                        CITY={id5_City}
                        USER={id5_User}
                        NAME={id5_Name}
                        BANNER={id5_Banner}
                        FAVONG={id5_FavOng}
                        RESCUES={id5_Rescue}
                        PROFILE={id5_Profile}
                        VOLUNTTIME={id5_VoluntTime}
                        DESCRIPTION={id5_Description}
                        MENSAGEM={"Chat5"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue6"}

                        TEL={id6_Tel}
                        CITY={id6_City}
                        USER={id6_User}
                        NAME={id6_Name}
                        BANNER={id6_Banner}
                        FAVONG={id6_FavOng}
                        RESCUES={id6_Rescue}
                        PROFILE={id6_Profile}
                        VOLUNTTIME={id6_VoluntTime}
                        DESCRIPTION={id6_Description}
                        MENSAGEM={"Chat6"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue7"}

                        TEL={id7_Tel}
                        CITY={id7_City}
                        USER={id7_User}
                        NAME={id7_Name}
                        BANNER={id7_Banner}
                        FAVONG={id7_FavOng}
                        RESCUES={id7_Rescue}
                        PROFILE={id7_Profile}
                        VOLUNTTIME={id7_VoluntTime}
                        DESCRIPTION={id7_Description}
                        MENSAGEM={"Chat7"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue8"}
                        TEL={id8_Tel}
                        CITY={id8_City}
                        USER={id8_User}
                        NAME={id8_Name}
                        BANNER={id8_Banner}
                        FAVONG={id8_FavOng}
                        RESCUES={id8_Rescue}
                        PROFILE={id8_Profile}
                        VOLUNTTIME={id8_VoluntTime}
                        DESCRIPTION={id8_Description}
                        MENSAGEM={"Chat8"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue9"}

                        TEL={id9_Tel}
                        CITY={id9_City}
                        USER={id9_User}
                        NAME={id9_Name}
                        BANNER={id9_Banner}
                        FAVONG={id9_FavOng}
                        RESCUES={id9_Rescue}
                        PROFILE={id9_Profile}
                        VOLUNTTIME={id9_VoluntTime}
                        DESCRIPTION={id9_Description}
                        MENSAGEM={"Chat9"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue10"}
                        TEL={id10_Tel}
                        CITY={id10_City}
                        USER={id10_User}
                        NAME={id10_Name}
                        BANNER={id10_Banner}
                        FAVONG={id10_FavOng}
                        RESCUES={id10_Rescue}
                        PROFILE={id10_Profile}
                        VOLUNTTIME={id10_VoluntTime}
                        DESCRIPTION={id10_Description}
                        MENSAGEM={"Chat10"}

                     />
                  </div>
                  <div className="PerfilContent">
                     <PerfilContent
                        LINK_TO={"Rescue11"}
                        TEL={id11_Tel}
                        CITY={id11_City}
                        USER={id11_User}
                        NAME={id11_Name}
                        BANNER={id11_Banner}
                        FAVONG={id11_FavOng}
                        RESCUES={id11_Rescue}
                        PROFILE={id11_Profile}
                        VOLUNTTIME={id11_VoluntTime}
                        DESCRIPTION={id11_Description}
                        MENSAGEM={"Chat11"}

                     />
                  </div>
               </Carousel>
            </div>
         </div>
      </>
   )
}

const PerfilContent = ({
   LINK_TO, MENSAGEM, TEL, USER, CITY, NAME, BANNER, FAVONG, RESCUES, PROFILE, VOLUNTTIME, DESCRIPTION, defaultFavorite }) => {
   // Process more information button
   const [toggle, setToggle] = React.useState(false);
   const toggleFunction = () => setToggle(!toggle);
   //
   return (
      <>
         <section className={`perfilTop mainBorder ${toggle ? "show" : ''}`}>
            {/* Trocar bannner do resgatador no CSS*/}
            <div className={`perfilHeader ${BANNER}`}>
               {/* ---------------------------------- */}
               <PerfilHeader
                  NAME={NAME}
                  USER={USER}
                  PROFILE={PROFILE}
                  defaultFavorite={defaultFavorite}
                  MENSAGEM={MENSAGEM}
               />
            </div>
         </section>

         <section className="perfilBottom mainBorder">
            <PerfilReputation
               FAVONG={FAVONG}
               RESCUES={RESCUES}
               VOLUNTTIME={VOLUNTTIME}
            />
            <div className="buttonMoreOption" >
               <button onClick={toggleFunction}>
                  <span>Clique aqui para mais informações</span>
               </button>
            </div>
            <div className={`perfilDetails ${toggle ? 'show' : ''}`}>
               <PerfilFooter
                  TEL={TEL}
                  CITY={CITY}
                  LINK_TO={LINK_TO}
                  DESCRIPTION={DESCRIPTION}
               />;
            </div>
         </section>

      </>
   )
}
const PerfilHeader = ({
   NAME, USER, PROFILE, defaultFavorite, MENSAGEM }) => {
   // Process star favorite button;
   const [star_state, star_change] = useState("Unliked");
   const star_function = () => { star_change(!star_state) };

   const starOutline = <AiOutlineStar id="StarIConOrange" />;
   const starFill = <AiFillStar id="StarICon" />;
   var starIcon;

   // Default favorite;
   if (!defaultFavorite) {
      if (star_state) {
         starIcon = starOutline;
      } else { starIcon = starFill };
   } else {
      if (!star_state) {
         starIcon = starOutline;
      } else { starIcon = starFill };
   }
   return (
      <>
         <IconContext.Provider value={{ size: "20px" }}>
            <div class="headerContainer">
               <div class="perfilPhoto">
                  <img src={PROFILE} alt={NAME} />
               </div>
               <div>
                  <div className="headerName">
                     <p>{NAME}</p>
                  </div>
                  <div className="headerDetails justify">
                     <div className="headerDetails ">
                        <div className="headerTitle ">
                           <p>{USER}</p>
                           <p>Resgatador</p>
                        </div>
                     </div>
                     <div className="headerDetails">
                        <div onClick={star_function} className={`borderIcon ${star_state ? '' : 'show'}`}>
                           <div className="iIcon">{starIcon}</div>
                        </div>
                        <Link to={`/${MENSAGEM}`}>
                           <button id="buttonMensage">
                              <p>Mensagem</p>
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </IconContext.Provider>
      </>
   )
}
const PerfilReputation = ({ FAVONG, RESCUES, VOLUNTTIME }) => {
   return (
      <>
         <div className="PerfilReputation flex">
            <section className="bodyComponent">
               <div className='reputationCenter'>
                  <p>Voluntario há</p>
               </div>
               <div className='reputationCenter'>
                  <span>{VOLUNTTIME}</span>
               </div>
            </section>

            <section className="bodyComponent">
               <div className='reputationCenter'>
                  <p>Total de Resgates</p>
               </div>
               <div className='reputationCenter'>
                  <span>{RESCUES}</span>
               </div>
            </section>

            <section className="bodyComponent">
               <p>Instituições preferidas</p>
               <div className='favOngcursor'>
                  <IconContext.Provider value={{ size: "22px" }}>
                     <BiBone className="iIcon" />
                  </IconContext.Provider>
                  <span>{FAVONG}</span>
                  <IconContext.Provider value={{ size: "20px" }}>
                     <BiLinkExternal className="iIcon" />
                  </IconContext.Provider>
               </div>
            </section>
         </div>
      </>
   )
}
const PerfilFooter = ({ TEL, CITY, DESCRIPTION, LINK_TO }) => {
   return (
      <>
         <div className="PerfilFooter" id="RescueFooter">
            <section className="footerComponent">
               <section>
                  <span>Sobre mim:</span>
                  <p>{DESCRIPTION}</p>
               </section>
               <Link to={`/${LINK_TO}`}>
                  <div className="lookMoreButton">
                     <div className="flex">
                        <p>Ver mais</p>
                     </div>
                  </div>
               </Link>
            </section>

            <section>
               <span>Informações</span>
               <div className="flex ">
                  <div className='footerIcon'><MdLocationOn /></div>
                  <p>{CITY}</p>
               </div>

               <div className="flex ">
                  <div className='footerIcon'><BsFillTelephoneFill /></div>
                  <p>{TEL}</p>
               </div>

               <div className="buttonDonate">
                  <div className="flex">
                     <p>Fazer uma <br />Doação</p>
                     <IconContext.Provider value={{ size: "29px" }}>
                        <FaRegMoneyBillAlt className="iIcon" />
                     </IconContext.Provider>
                  </div>
               </div>
            </section>
         </div>
      </>
   )
}
