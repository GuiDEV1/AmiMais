import React from "react"
import './style.css'
import { Link } from 'react-router-dom';
import { BiBone } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GiSittingDog } from 'react-icons/gi'
import { CgNotes } from 'react-icons/cg'
import { IconContext } from "react-icons";


export function PreVisualization() {
   return (
      <div id="PreView">
         <IconContext.Provider value={{ size: "30px" }}>
            <div className="header">
               <section className="flex justify">
                  <div className="flex">
                     <h2>{Ong_Name}</h2>
                     <BiBone />
                  </div>
                  <AiFillCloseCircle />
               </section>
            </div>

            <div className="body">
               <div className="flex">
                  <p>{'<'}</p>
                  <img src={picture1} />
                  <p>{'>'}</p>
               </div>
               <hr />
               <section>
                  <h3>{Ong_Name}</h3>
                  <p>{Ong_Street}
                     <br />{Ong_CEP}
                     <br />{Ong_Tel}</p>
               </section>
            </div>

            <div className="buttons">
               <div className="flex">
                  <div className="buttonIcon">
                     <GiSittingDog />
                  </div>
                  <section>
                     <div >
                     <p>Visualizar Ong</p>
                     </div>
                  </section>
               </div>
               <div className="flex">
                  <div className="buttonIcon">
                     <CgNotes />
                  </div>
                  <section className="openAbs">
                     <div>
                     <p><Link to="/Agendar">Agendamento</Link></p>
                     </div>
                  </section>
               </div>
            </div>
            <div className="footer flex">
            </div>
         </IconContext.Provider>
      </div>
   )
}
const picture1 = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*";

const Ong_Name = "Pet Love"
const Ong_Street = "Avenida Nossa Senhora do Sabará, Nº 3870, Vila Emir"
const Ong_CEP = "04447-010 São Paulo - SP"
const Ong_Tel = "(11) 96420-5123"