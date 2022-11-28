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

export function CallRescue() {
   return (
      <>
         <div id="Solicite">
            <Interface />
            <div className="flex">
               <SideBar search="searchButton" />
               <h2><strong>Solicitar</strong> Resgatador</h2>
               <Carousel itemsToScroll={1} itemsToShow={2} className='container flex'>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue1"}
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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue2"}
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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue3"}
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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue4"}

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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue5"}
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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue6"}

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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue7"}

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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue8"}

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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue9"}

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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue10"}
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
                     />
                  </div>
                  <div className="perfilRescue">
                     <PerfilRescue
                        RESGATADOR={"Rescue11"}
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
                     />
                  </div>
               </Carousel>
            </div>
         </div>
      </>
   )
}

const PerfilRescue = ({ RESGATADOR, TEL, USER, CITY, NAME, BANNER, FAVONG, RESCUES, PROFILE, VOLUNTTIME, DESCRIPTION }) => {
   // Botão mais informações physics
   const [toggle, setToggle] = React.useState(false);
   const toggleFunction = () => setToggle(!toggle);

   //
   return (
      <>
         <div className={`mainBorder mainTop ${toggle ? 'show' : ''}`}>
            {/* Trocar Background no CSS*/}
            <div className={`PerfilHeader ${BANNER}`}>
               <PerfilHeader
                  NAME={NAME}
                  PROFILE={PROFILE}
                  USER={USER}
               />
            </div>
         </div>
         <div className="mainBorder">
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
            {/* Botão physics */}
            <div className={`mainBottom ${toggle ? 'show' : ''}`}>
               <PerfilFooter
                  TEL={TEL}
                  CITY={CITY}
                  DESCRIPTION={DESCRIPTION}
                  RESGATADOR={RESGATADOR}
               />;
            </div>
         </div>

      </>
   )
}
const PerfilHeader = ({ NAME, USER, PROFILE }) => {
   // Botão estrela physics
   const [star_state, star_change] = useState("Unliked");
   const star_function = () => { star_change(!star_state) };
   var star_icon;
   if (star_state) {
      star_icon = <AiOutlineStar id="StarIConOrange" />;
   } else { star_icon = <AiFillStar id="StarICon" /> };
   //
   return (
      <>
         <IconContext.Provider value={{ size: "20px" }}>
            <div class="headerContainer">
               <div class="perfilPhoto">
                  <img src={PROFILE} />
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
                        <div onClick={star_function} className={`borderIcon ${star_state ? 'show' : ''}`}>
                           <div className="iIcon">{star_icon}</div>
                        </div>
                        <button id="buttonMensage"><p>Mensagem</p></button>
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
         <div className="bodyContainer flex">
            <section className="bodyComponent">
               <p>Voluntario há</p>
               <span>{VOLUNTTIME}</span>
            </section>

            <section className="bodyComponent">
               <p>Total de Resgates</p>
               <span>{RESCUES}</span>
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
const PerfilFooter = ({ TEL, CITY, DESCRIPTION, RESGATADOR }) => {
   return (
      <>
         <div className="footerContainer" id="RescueFooter">
            <section className="footerComponent">
               <span>Sobre mim:</span>
               <p>{DESCRIPTION}</p>
               <Link to={`/${RESGATADOR}`}>
                  <div className="vermais">
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

const id1_Tel = "(11) 7667-9865";
const id1_City = "São Paulo";
const id1_Rescue = "22 Animais";
const id1_FavOng = "Petlove";
const id1_VoluntTime = "3 meses";
const id1_Description = "Olá sou maju possuo uma ONG que faz uma reabilitação de crianças com à ajuda de gatos."

const id1_Name = "Mariju Carmo";
const id1_User = "@majuupe";
const id1_Banner = "id1_banner"
const id1_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261001534644274/Aurora_Pereira.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id2_Tel = "(11) 9865-7667";
const id2_City = "Rio de Janeiro";
const id2_Rescue = "5 Animais";
const id2_FavOng = "PetTop";
const id2_VoluntTime = "1 ano";
const id2_Description = "Comecei o resgate de animais por causa da minha filha, me chamo Alice e atualmente resgato a mais de 9 meses e foram bons momentos que passei com ela ajudando a esta ótima causa."

const id2_Name = "Alice de Souza";
const id2_User = "@souzaalice";
const id2_Banner = "id2_banner"
const id2_Profile = 'https://cdn.discordapp.com/attachments/1026668645033709692/1046082098496282735/thispersondoesnotexist12.jpg';
//------------------------------------------------------------------------------------------------------------------//
const id3_Tel = "(11) 9865-7667";
const id3_City = "Rio de Janeiro";
const id3_Rescue = "5 Animais";
const id3_FavOng = "PetTop";
const id3_VoluntTime = "1 ano";
const id3_Description = "Sou conhecido como BM e tenho 45 anos e apos começar essa vida de resgatador não quero parar nunca, minha meta é pegar todos os animais de rua."

const id3_Name = "Benjamim Magalhães";
const id3_User = "@nickbm";
const id3_Banner = "id3_banner"
const id3_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261028176859256/Benjamim_Magalhaes.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id4_Tel = "(11) 9865-7667";
const id4_City = "Rio de Janeiro";
const id4_Rescue = "5 Animais";
const id4_FavOng = "PetTop";
const id4_VoluntTime = "1 ano";
const id4_Description = "Olá todos me chamam de Rosseto, e tento ajudar gatos e cachorros na rua sempre que posso, pois, não me contenho com a fome e com os atos horrendos que eles passam."

const id4_Name = "Gabriel Rosseto";
const id4_User = "@rossetog";
const id4_Banner = "id4_banner"
const id4_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261028684374026/Gabriel_Rosseto.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id5_Tel = "(11) 9865-7667";
const id5_City = "Rio de Janeiro";
const id5_Rescue = "5 Animais";
const id5_FavOng = "PetTop";
const id5_VoluntTime = "1 ano";
const id5_Description = "Pessoal me chamem Gui e trabalho em um departamento de design, apos conhecer esta plataforma, tive curiosidade e interesse no resgate e agora passo todo meu tempo livre ajudando os animais!";

const id5_Name = "Guilherme Cosmo";
const id5_User = "@guicosmo";
const id5_Banner = "id5_banner"
const id5_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261029015719957/Guilherme_Cosmo.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id6_Tel = "(11) 9865-7667";
const id6_City = "Rio de Janeiro";
const id6_Rescue = "5 Animais";
const id6_FavOng = "PetTop";
const id6_VoluntTime = "1 ano";
const id6_Description = "Oii sou Hele e amo muito gatos, adoro todos eles!! Espero sempre por uma oportunidade de ajudar esses animais, que muitos acreditam não precisarem. ♥"

const id6_Name = "Helena Martins";
const id6_User = "@heleecat";
const id6_Banner = "id7_banner"
const id6_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261001782116492/Alice_de_Souza.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id7_Tel = "(11) 9865-7667";
const id7_City = "Rio de Janeiro";
const id7_Rescue = "5 Animais";
const id7_FavOng = "PetTop";
const id7_VoluntTime = "1 ano";
const id7_Description = "Sou patriota, mulher e guerreira, amo o Brasil, mas acredito que ainda podemos melhorar em relação aos animais de rua, acho errado a impunidade que alguns de má índole possuem."

const id7_Name = "Liz Marques Silva";
const id7_User = "@LizMarques";
const id7_Banner = "id6_banner" 
const id7_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050264068147/Liz_Marques_Silva.jpg";

//------------------------------------------------------------------------------------------------------------------//
const id8_Tel = "(11) 9865-7667";
const id8_City = "Rio de Janeiro";
const id8_Rescue = "5 Animais";
const id8_FavOng = "PetTop";
const id8_VoluntTime = "1 ano";
const id8_Description = "Sou biólogo, pesquisador e resgatador de animais. Pela minha idade, muitos ficam espantados ao ser revelado que atualmente trabalho com resgate e eu sempre digo que nunca sera tarde para se juntar a causa."

const id8_Name = "Lucaló Serikawa de Souza";
const id8_User = "@LucaSerikaw";
const id8_Banner = "id8_banner"
const id8_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050515718265/Lucas_Serikawa_Souza.jpg";
//------------------------------------------------------------------------------------------------------------------//
const id9_Tel = "(11) 9965-7667";
const id9_City = "Rio de Janeiro";
const id9_Rescue = "5 Animais";
const id9_FavOng = "PetTop";
const id9_VoluntTime = "1 ano";
const id9_Description = "Guilherme Lorem"

const id9_Name = "Marta Valejo";
const id9_User = "@MartaValejo";
const id9_Banner = "id9_banner"
const id9_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261050742231080/Marta_Valejo.jpg";

//------------------------------------------------------------------------------------------------------------------//
const id10_Tel = "(11) 101065-7667";
const id10_City = "Rio de Janeiro";
const id10_Rescue = "5 Animais";
const id10_FavOng = "PetTop";
const id10_VoluntTime = "1 ano";
const id10_Description = "Guilherme Lorem"

const id10_Name = "Matheus Barbosa";
const id10_User = "@MathBarbo";
const id10_Banner = "id10_banner"
const id10_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1046082098131390474/thispersondoesnotexist13.jpg";

//------------------------------------------------------------------------------------------------------------------//
const id11_Tel = "(11) 111165-7667";
const id11_City = "Rio de Janeiro";
const id11_Rescue = "5 Animais";
const id11_FavOng = "PetTop";
const id11_VoluntTime = "1 ano";
const id11_Description = "Guilherme Lorem"

const id11_Name = "Murilo Cesar";
const id11_User = "@MuriloCesar";
const id11_Banner = "id11_banner"
const id11_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261051241332806/Murilo_Cesar.jpg";

//------------------------------------------------------------------------------------------------------------------//