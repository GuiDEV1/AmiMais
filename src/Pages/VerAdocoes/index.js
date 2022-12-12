
//Ongs Social Medias
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdShare } from 'react-icons/md'
import { TbMapSearch } from 'react-icons/tb'
import { AiOutlineSchedule, AiOutlineClockCircle, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCheckCircle, BsFillTelephoneFill } from 'react-icons/bs'
import { BiDonateHeart, BiMap } from 'react-icons/bi'
import { TfiWorld } from 'react-icons/tfi'
import { IconContext } from 'react-icons'

//Ongs Social Medias
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

//Internal Component
import { Interface } from '../../ComponentesConstantes/Interface';
import { Rodape } from "../../ComponentesConstantes/Rodape";

import './style.css';

export function VerAdocoes() {

   return (
      <>
         <Interface />
         <div id="LookAdotions">
            <div className='bannerOng'>
               <img src="https://media.discordapp.net/attachments/1026668645033709692/1051492876464443562/Rectangle_134.png?width=1080&height=256" />
            </div>
            <section className="flex justify header">
               <div className="flex">
                  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png" alt="Anima-se" />
                  <div className="ongTitle">
                     <h2>Lorem Inpi</h2>
                     <p className="colorOrange">Lorem<span >Inpi</span></p>
                  </div>
               </div>
               <div className="flex">
                  <IconContext.Provider value={{ size: "25px" }}>
                     <button><FaFacebookF /></button>
                     <button><FaWhatsapp /></button>
                     <button><FaInstagram /></button>
                     <button><FaTwitter /></button>
                  </IconContext.Provider>
               </div>
            </section>
            <section className='body'>
               <div className='carrosel'>
                  <Carousel itemsToScroll={1} itemsToShow={2} className='flex'>
                     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png" alt="Anima-se" />
                     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png" alt="Anima-se" />
                     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png" alt="Anima-se" />
                     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png" alt="Anima-se" />
                  </Carousel>
               </div>
               <div className="flex ongButtons">
                  <IconContext.Provider value={{ size: "50px" }}>
                     <div className='ongCircle'><button><MdShare /></button><p>Compartilhar</p></div>
                     <div className='ongCircle'><button><TbMapSearch /></button><p>Rotas</p></div>
                     <Link to="/Agendar">
                        <div className='ongCircle'><button><AiOutlineSchedule /></button><p>Agendar</p></div>
                     </Link>
                     <div className='ongCircle'><button><BsCheckCircle /></button><p>Avaliar</p></div>
                     <div className='ongCircle'><button><BiDonateHeart /></button><p>Doar</p></div>
                  </IconContext.Provider>
               </div>
               <div className="flex ongIformations">
                  <section >
                     <IconContext.Provider value={{ size: "27px" }}>
                        <div className="flex" id="streetDetails" ><BiMap />
                           <p>R. Afonso Hugo Hope 66 - Jardim Disney,<br />São Paulo - SP, 058992-213</p></div>
                     </IconContext.Provider>
                     <IconContext.Provider value={{ size: "22px" }}>
                        <div className="flex"><AiOutlineClockCircle /><p>Aberto - fecha as 23h00</p></div>
                     </IconContext.Provider>
                     <IconContext.Provider value={{ size: "20px" }}>
                        <div className="flex"><TfiWorld /><p>amimais.com.br</p></div>
                     </IconContext.Provider>
                     <IconContext.Provider value={{ size: "17px" }}>

                        <div className="flex"><BsFillTelephoneFill /><p>(11) 91235-12345</p></div>
                     </IconContext.Provider>

                  </section>
                  <img src="https://cdn.discordapp.com/attachments/1026668645033709692/1051515174919622736/Frame_278.png" /> {/*IMG IS HERE*/}
               </div>
               <div className="flex ongReputation">
                  <section>
                     <p>Avaliação Geral</p>
                     <div className="reviewCircle"><h2>90%</h2></div>
                  </section>
                  <section>
                     <p>Atendimento</p>
                     <div className="reviewCircle"><h3>60%</h3></div>
                  </section>
                  <section>
                     <p>Infroestrutura</p>
                     <div className="reviewCircle"><h3>75%</h3></div>
                  </section>
                  <section>
                     <p>Localização</p>
                     <div className="reviewCircle"><h3>71%</h3></div>
                  </section>
               </div>
               <div className="flex justify ongReview">
                  <div>
                     <div className="flex"> {/*IMG IS HERE*/}
                        <h3 className='colorOrange' >Ava<span className='colorTurquese'>liar:</span></h3>
                        <IconContext.Provider value={{ size: "20px" }}>
                           <AiFillStar className='colorOrange' />
                           <AiFillStar className='colorOrange' />
                           <AiFillStar className='colorOrange' />
                           <AiOutlineStar />
                           <AiOutlineStar />
                        </IconContext.Provider>
                     </div>
                     <form className="flex">
                        <div>
                           <textarea placeholder="Escreva aqui:">
                           </textarea>
                        </div>
                        <button type="submit"><p>Enviar</p></button>
                     </form>
                  </div>
                  <div className='imgReview'>
                     <img src="https://media.discordapp.net/attachments/1026668645033709692/1051515174575669268/Frame_279.png" /> {/*IMG IS HERE*/}
                  </div>
               </div>
            </section>
         </div>
         <Rodape />
      </>
   )
}