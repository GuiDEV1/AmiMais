import React, { Component } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import { BsFillCircleFill, BsCircle, BsSquare, BsCheck } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default class Forms extends Component {
   state = {
      step: 1,
      reg_type: "",
      email: "",

      //UserComum
      name: "",
      username: "",
      CPF: "",
      born: "",
      phone: "",
      telephone: "",
      genero: "",

      estate: '',
      city: '',
      cep: '',
      endress: '',
      endressNumber: '',

      password: "",

      //Rescuer
      havePET: "",
      savePET: "",
      workToday: "",
      //Ong
      cnpj: "", ONGSituation: "",
   }

   // go back to previous step
   prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 });
   }
   // proceed to the next step
   nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
   }


   nextUserComum = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
   }
   nextRescuer = () => {
      const { step } = this.state;
      this.setState({ step: step + 4 });
   }
   nextOng = () => {
      const { step } = this.state;
      this.setState({ step: step + 7 });
   }


   // handle field change
   handleChange = input => e => {
      this.setState({ [input]: e.target.value });
   }

   render() {
      const { step } = this.state;
      const { email, username, password, firstName, lastName, country } = this.state;
      const values = { email, username, password, firstName, lastName, country }
      console.log(this.state)



      switch (step) {
         case 1:
            return (
               <RegisterType
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  state={this.state}
                  nextUserComum={this.nextUserComum}
                  nextRescuer={this.nextRescuer}
                  nextOng={this.nextOng}
               />
            )
         case 2:
            return (
               <RegisterUser
                  prevStep={this.prevStep}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            )
         case 3:
            return (
               <RegisterPassword
                  prevStep={this.prevStep}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            )
         case 4: case 7: case 10:
            return (
               <Success
                  prevStep={this.prevStep}
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            )
         case 5: //Register + 4
            return (
               <RegisterRescuer
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  state={this.state}
               />
            )
         case 6:
            return (
               <RegisterRescueKey
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  state={this.state}
               />
            )
         case 8: //Register + 7
            return (
               <RegisterONG
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  state={this.state}
               />
            )
         case 9:
            return (
               <RegisterONGKey
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  state={this.state}
               />
            )
         default:
      }
   }
}


//-----------------------------------------------------------------------------------

const RegisterType = ({ nextStep, handleChange, values, state, nextUserComum, nextRescuer, nextOng }) => {
   var registerbutton;

   if (state.reg_type === "usuario_comum") {
      registerbutton = nextUserComum
   } else if (state.reg_type === "resgatador") {
      registerbutton = nextRescuer
   } else if (state.reg_type === "Ong") {
      registerbutton = nextOng
   }

   return (
      <>
         <section id="cadastro">
            <h1>Cadastrar <span className="colorTurquese">Conta</span></h1>
            <h3>Para criar sua conta preencha os campos</h3>
            <h4>Tipo de cadastro</h4>
            <form onSubmit={registerbutton}>
               <select class="typeCadastro" name="tipo_de_cadastro" onChange={handleChange('reg_type')} required >
                  <option value="" > Selecione aqui </option>
                  <option value="usuario_comum">Usuario comum</option>
                  <option value="resgatador">Resgatador</option>
                  <option value="Ong">ONG-instituição</option>
               </select>

               <h5>Crie sua conta com:</h5>
               <div id="redeSocial">
                  <IconContext.Provider value={{ size: "25px" }}>
                     <button type="button" id="faceButton"><BsFacebook />
                        <Link to={`/Login`}>
                           <p>Facebook</p>
                        </Link>
                     </button>
                     <button type="button" id="googleButton"><FcGoogle />
                        <Link to={`/Login`}>
                           <p> Go<strong id="colorTurquese1">og</strong><strong id="colorTurquese2">le</strong></p>
                        </Link>
                     </button>
                     <button type="button" id="twiterButton"><BsTwitter />
                        <Link to={`/Login`}>
                           <p>Twiter</p>
                        </Link>
                     </button>
                  </IconContext.Provider>
               </div>
               <h5>Ou</h5>
               <div className='inputEmail'>
                  <label className='emaillabel'>Email<strong>*</strong></label>
                  <input id="email" name="email" type={"email"} placeholder="Seuemail@gmail.com"
                     required onChange={handleChange('email')} />
               </div>
               <button className="nextstep" type="submit" >
                  <p>Continuar</p>
               </button>
            </form>
         </section>
         <section className="imageRight">
            <img src="https://cdn.discordapp.com/attachments/1026668645033709692/1049520441032704050/undraw_good_doggy_re_eet7_1.png" />
         </section>
      </>
   )
}

const Success = ({ nextStep, handleChange, values }) => {
   return (
      <>
         <section id="cadastro" className='cadastroSucess '>
            <form className='sucess_margin' onSubmit={nextStep}>
               <div className="centerContent">
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1051332149086797895/Frame_275.png" />

               </div>
               <h2>Cadastro <span className="colorTurquese"> finalizado!</span></h2>
               <p>Agora esta tudo pronto para acessar a sua conta.<br />
                  Acesse agora com o seu username ou ative seu cadastro no link enviado por e-mail.<span> Caso não receba a mensagem dentro de instantes, consulte seu lixo eletronico ou caixa de Spam.</span></p>
               <section className='flex sucessNext'>
                  <button type="submit" >
                     <Link to={`/`} className="nextstep">
                        <p>Inicio</p>
                     </Link>
                  </button>
                  <button type="submit" >
                     <Link to={`/Login`} className="nextstep">
                        <p> Login</p>
                     </Link>

                  </button>
               </section>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1050082229935669268/Frame_50.png" />
         </section>
      </>)
}

//-----------------------------------------------------------------------------------

const RegisterUser = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };
   var endnumber, city, estado, endress, cep


   const allowLocation = () => {
      window.confirm("Alterar acesso a localização atual?")
      like_fuction();
   }

   if (!like_state) {
      endnumber = "1347"
      city = "São Paulo"
      estado = "São Paulo"
      endress = "R. Faustolo - Lapa"
      cep = "05041-001"
   } else {
      endnumber = ""
      city = ""
      estado = ""
      endress = ""
      cep = ""
   }

   var lat, lon;

   const getLocation = () => {
      if (!navigator.geolocation) {
         return null;
      }
      navigator.geolocation.getCurrentPosition((pos) => {
         lat = document.getElementById("lat").innerText = pos.coords.latitude
         lon = document.getElementById("lon").innerText = pos.coords.latitude
      });
   }
   return (
      <>
         <section id="cadastro" className='registerStep2'>
            <div className='typeForm centerContent '>
               <div className='flex centerContent'>
                  <h2>Criar perfil<span className='colorTurquese'> de Usuario</span></h2>
               </div>
               <IconContext.Provider value={{ size: "15px" }}>
                  <div className='flex centerContent'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <div className='circleWhite'>
                        <BsFillCircleFill />
                     </div>
                     <div className="circleOverlay">
                        <BsCircle />
                     </div>
                     <BsCircle />
                     <div className="typeFormLine"></div>

                  </div>
               </IconContext.Provider>

            </div>
            <form className='formStep2' onSubmit={nextStep}>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Nome<strong>*</strong></label>
                     <input className="inputMedium" name="name" type={"text"} placeholder="Nome Sobrenome"
                        required onChange={handleChange('name')} />
                  </div>
                  <div className='containerMedium'>
                     <label>Username<strong>*</strong></label>
                     <input className="inputMedium" name="username" type={"text"} placeholder="Nome123"
                        required onChange={handleChange('username')} />
                  </div>
               </section>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>CPF<strong>*</strong></label>
                     <input className="inputMedium" name="CPF" type={"text"} placeholder="xxx xxx xxx xx"
                        required onChange={handleChange('CPF')} />
                  </div>

                  <div className='containerMedium'>
                     <label>Data de Nascimento<strong>*</strong></label>
                     <input className="inputMedium" name="born" type={"date"} placeholder="xx/xx/xxxx"
                        required onChange={handleChange('born')} />
                  </div>
               </section>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label >Celular<strong>*</strong></label>
                     <input className="inputMedium" name="phone" type={"tel"} placeholder="DD xxxxx-xxxx"
                        required onChange={handleChange('phone')} />
                  </div>
                  <div className='containerMedium'>
                     <label>Telefone</label>
                     <input className="inputMedium" name="telephone" type={"tel"} placeholder="DD xxxxx-xxxx"
                        onChange={handleChange('telephone')} />
                  </div>
               </section>

               <section className='flex'>
                  <div className='inputGenre'>
                     <label>Genero<strong>*</strong></label>
                     <div>
                        <input id="genreMale" name="genero" type="radio" value="Masculino" required />
                        <label for="genreMale">Masculino</label>
                        <input id="genreFemale" name="genero" type="radio" value="Feminino" />
                        <label for="genreFemale" >Feminino</label>
                     </div>
                     <div>
                        <input id="genreOther" name="genero" type="radio" value="Outro" />
                        <label for="genreOther">Outro</label>
                        <input id="genreNull" name="genero" type="radio" value="Prefiro não dizer " />
                        <label for="genreNull">Prefiro não dizer</label>

                     </div>
                  </div>
                  <div className="inputLocation">
                     <input id="location" type="checkbox" onChange={getLocation} onChange={allowLocation} />
                     <label for="location">Ativar localização</label>
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Estado<strong>*</strong></label>
                     <input className="inputSmall" name="estate" type={"text"} placeholder="Brasilia"
                        required value={estado} onChange={handleChange('estate')} />
                  </div>
                  <div>
                     <label>Cidade<strong>*</strong></label>
                     <input className="inputSmall" name="city" type={"text"} placeholder="Brasilia"
                        required value={city} onChange={handleChange('city')} />
                  </div>
                  <div>
                     <label>CEP<strong>*</strong></label>
                     <input className="inputSmall" name="cep" type={"text"} placeholder="xxxxx-xxx"
                        required value={cep} onChange={handleChange('cep')} />
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Endereço<strong>*</strong></label>
                     <input className="inputYoung" name="endress" type={"text"} placeholder="Rua Amimais"
                        required value={endress} onChange={handleChange('endress')} />
                  </div>
                  <div className='inputNEndress'>
                     <label>N</label>
                     <input name="endressNumber" type={"text"} placeholder="0"
                        onChange={handleChange('endressNumber')} />
                  </div>
                  <button className="nextstep" type="submit" >
                     <p>Continuar</p>
                  </button>
               </section>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1050058030785503362/Group_21558.png" />
         </section>
      </>
   )
}

const RegisterPassword = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };

   var like_icon;
   if (like_state) {
      like_icon =
         <IconContext.Provider value={{ size: "20px" }}><BsSquare /></IconContext.Provider>;
   } else {
      like_icon =
         <IconContext.Provider value={{ size: "30px" }}><BsCheck /></IconContext.Provider>;
   };

   return (
      <>
         <section id="cadastro" className='registerStep3 '>
            <div className='flex typeForm'>
               <div className="img_logo centerContent">
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050070256070176768/Vector_5.png" />
               </div>
               <div>
                  <div className='flex centerContent'>
                     <h2>Ultima etapa para<span className="colorTurquese"><br /> criar sua conta!</span></h2>
                  </div>
                  <div className='flex centerContent typeStep3'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsCircle />
                     <div className="typeFormLine"></div>
                  </div>
               </div>
            </div>

            <form className='formStep3' onSubmit={nextStep}>
               <div className=' inputPassword '>
                  <label>Senha<strong>*</strong></label>
                  <input className="inputMedium" name="password" type={"password"} placeholder="Senhas fortes contem: @1#!As*&¨%$"
                     required onChange={handleChange('password')} />
               </div>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Você possui um Pet?<strong>*</strong></label>
                     <input className="inputMedium" name="havePET" type={"text"} placeholder="Sim/Não"
                        required onChange={handleChange('havePET')} />
                  </div>
                  <div className='containerMedium'>
                     <div className="form_space">
                        <label>Você adotaria um pet?<strong>*</strong></label>
                        <input className="inputMedium" name="savePET" type={"text"} placeholder="Sim/Não"
                           required onChange={handleChange('savePET')} />
                     </div>
                  </div>
               </section>

               <section className='inputCapcha inputBorder flex'>
                  <div className='flex'>
                     <input id="robot" type="checkbox" onChange={like_fuction} />
                     <section className={like_state ? "unliked" : "liked"}>
                        <label for="robor">{like_icon} </label>
                     </section>
                     <div>
                        <label for="robot">Não sou um robô</label>
                     </div>
                  </div>
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050074584289919056/Vector_6.png" />

               </section>

               <section className='terms'>
                  <div>
                     <input id="termos" type="checkbox" required />
                     <label for="termos">Li e aceito com os <strong>Termos de Uso <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="termos2" type="checkbox" required />
                     <label for="termos2">Li e aceito com a <strong>Politica de Privacidade <BiLinkExternal />.</strong></label>
                  </div>

                  <div>

                     <input id="email_term" type="checkbox" required />
                     <label for="email_term">Receber notificações no email.</label>
                  </div>
               </section>
               <button className="nextstep" type="submit"  >
                  <p>
                     Continuar
                  </p>
               </button>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1050082229935669268/Frame_50.png" />
         </section>
      </>
   )
}
//-----------------------------------------------------------------------------------

const RegisterRescuer = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };
   var endnumber, city, estado, endress, cep


   const allowLocation = () => {
      window.confirm("Alterar acesso a localização atual?")
      like_fuction();
   }

   if (!like_state) {
      endnumber = "1347"
      city = "São Paulo"
      estado = "São Paulo"
      endress = "R. Faustolo - Lapa"
      cep = "05041-001"
   } else {
      endnumber = ""
      city = ""
      estado = ""
      endress = ""
      cep = ""
   }

   var lat, lon;

   const getLocation = () => {
      if (!navigator.geolocation) {
         return null;
      }
      navigator.geolocation.getCurrentPosition((pos) => {
         lat = document.getElementById("lat").innerText = pos.coords.latitude
         lon = document.getElementById("lon").innerText = pos.coords.latitude
      });
   }
   return (
      <>
         <section id="cadastro" className='registerStep2'>
            <div className='typeForm centerContent '>
               <div className='flex centerContent'>
                  <h2>Criar perfil<span className='colorTurquese'> de Resgatador</span></h2>
               </div>
               <IconContext.Provider value={{ size: "15px" }}>
                  <div className='flex centerContent'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <div className='circleWhite'>
                        <BsFillCircleFill />
                     </div>
                     <div className="circleOverlay">
                        <BsCircle />
                     </div>
                     <BsCircle />
                     <div className="typeFormLine"></div>

                  </div>
               </IconContext.Provider>

            </div>
            <form className='formStep2' onSubmit={nextStep}>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Nome do Resgatador<strong>*</strong></label>
                     <input className="inputLarger" name="name" type={"text"} placeholder="Nome Sobrenome"
                        required onChange={handleChange('name')} />
                  </div>
               </section>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>CPF<strong>*</strong></label>
                     <input className="inputMedium" name="CPF" type={"text"} placeholder="xxx xxx xxx xx"
                        required onChange={handleChange('CPF')} />
                  </div>

                  <div className='containerMedium'>
                     <label>Data de Nascimento<strong>*</strong></label>
                     <input className="inputMedium" name="born" type={"date"} placeholder="xx/xx/xxxx"
                        required onChange={handleChange('born')} />
                  </div>
               </section>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label >Celular<strong>*</strong></label>
                     <input className="inputMedium" name="phone" type={"tel"} placeholder="DD xxxxx-xxxx"
                        required onChange={handleChange('phone')} />
                  </div>
                  <div className='containerMedium'>
                     <label>Telefone</label>
                     <input className="inputMedium" name="telephone" type={"tel"} placeholder="Seuemail@gmail.com"
                        onChange={handleChange('telephone')} />
                  </div>
               </section>

               <section className='flex'>
                  <div className='inputGenre'>
                     <label>Genero<strong>*</strong></label>
                     <div>
                        <input id="genreMale" name="genero" type="radio" value="Masculino" required />
                        <label for="genreMale">Masculino</label>
                        <input id="genreFemale" name="genero" type="radio" value="Feminino" />
                        <label for="genreFemale" >Feminino</label>
                     </div>
                     <div>
                        <input id="genreOther" name="genero" type="radio" value="Outro" />
                        <label for="genreOther">Outro</label>
                        <input id="genreNull" name="genero" type="radio" value="Prefiro não dizer " />
                        <label for="genreNull">Prefiro não dizer</label>

                     </div>
                  </div>
                  <div className="inputLocation">
                     <input id="location" type="checkbox" onChange={getLocation} onChange={allowLocation} />
                     <label for="location">Ativar localização</label>
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Estado<strong>*</strong></label>
                     <input className="inputSmall" name="estate" type={"text"} placeholder="Brasilia"
                        required value={estado} onChange={handleChange('estate')} />
                  </div>
                  <div>
                     <label>Cidade<strong>*</strong></label>
                     <input className="inputSmall" name="city" type={"text"} placeholder="Brasilia"
                        required value={city} onChange={handleChange('city')} />
                  </div>
                  <div>
                     <label>CEP<strong>*</strong></label>
                     <input className="inputSmall" name="cep" type={"text"} placeholder="xxxxx-xxx"
                        required value={cep} onChange={handleChange('cep')} />
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Endereço<strong>*</strong></label>
                     <input className="inputYoung" name="endress" type={"text"} placeholder="Rua Amimais"
                        required value={endress} onChange={handleChange('endress')} />
                  </div>
                  <div className='inputNEndress'>
                     <label>N</label>
                     <input name="endressNumber" type={"text"} placeholder="0"
                        onChange={handleChange('endressNumber')} />
                  </div>
                  <button className="nextstep" type="submit" >
                     <p>Continuar</p>
                  </button>
               </section>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1051333449400721438/Frame_276.png" />
         </section>
      </>
   )
}

const RegisterRescueKey = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };

   var like_icon;
   if (like_state) {
      like_icon =
         <IconContext.Provider value={{ size: "20px" }}><BsSquare /></IconContext.Provider>;
   } else {
      like_icon =
         <IconContext.Provider value={{ size: "30px" }}><BsCheck /></IconContext.Provider>;
   };

   return (
      <>
         <section id="cadastro" className='registerStep3 '>
            <div className='flex typeForm'>
               <div className="img_logo centerContent">
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050070256070176768/Vector_5.png" />
               </div>
               <div>
                  <div className='flex centerContent'>
                     <h2>Ultima etapa para<span className="colorTurquese"><br /> criar sua conta!</span></h2>
                  </div>
                  <div className='flex centerContent typeStep3'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsCircle />
                     <div className="typeFormLine"></div>
                  </div>
               </div>
            </div>

            <form className='formStep3' onSubmit={nextStep}>
               <div className=' inputPassword '>
                  <label>Senha<strong>*</strong></label>
                  <input className="inputMedium" name="password" type={"password"} placeholder="Senhas fortes contem: @1#!As*&¨%$"
                     required onChange={handleChange('password')} />
               </div>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Você possui um Pet?<strong>*</strong></label>
                     <input className="inputMedium" name="havePET" type={"text"} placeholder="Sim/Não"
                        required onChange={handleChange('havePET')} />
                  </div>
                  <div className='containerMedium'>
                     <div className="form_space">
                        <label>Você adotaria um pet?<strong>*</strong></label>
                        <input className="inputMedium" name="savePET" type={"text"} placeholder="Sim/Não"
                           required onChange={handleChange('savePET')} />
                     </div>
                  </div>
               </section>
               <div className='containerMedium'>
                  <label>Você trabalha atualmente?<strong>*</strong></label>
                  <input className="inputMedium" name="workToday" type={"text"} placeholder="Sim/Não"
                     required onChange={handleChange('workToday')} />
               </div>
               <section className='inputCapcha inputBorder flex'>
                  <div className='flex'>
                     <input id="robot" type="checkbox" onChange={like_fuction} />
                     <section className={like_state ? "unliked" : "liked"}>
                        <label for="robor">{like_icon} </label>
                     </section>
                     <div>
                        <label for="robot">Não sou um robô</label>
                     </div>
                  </div>
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050074584289919056/Vector_6.png" />

               </section>

               <section className='terms'>
                  <div>
                     <input id="termos" type="checkbox" required />
                     <label for="termos">Li e aceito com os <strong>Termos de Uso <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="termos2" type="checkbox" required />
                     <label for="termos2">Li e aceito com a <strong>Politica de Privacidade <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="termos3" type="checkbox" required />
                     <label for="termos3">Li e aceito com os <strong>Termos de Resgatador AmiMais <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="email_term" type="checkbox" required />
                     <label for="email_term">Receber notificações no email.</label>
                  </div>
               </section>
               <button className="nextstep" type="submit"  >
                  <p>Continuar</p>
               </button>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1050082229935669268/Frame_50.png" />
         </section>
      </>
   )
}
//-----------------------------------------------------------------------------------


const RegisterONG = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };
   var endnumber, city, estado, endress, cep


   const allowLocation = () => {
      window.confirm("Alterar acesso a localização atual?")
      like_fuction();
   }

   if (!like_state) {
      endnumber = "1347"
      city = "São Paulo"
      estado = "São Paulo"
      endress = "R. Faustolo - Lapa"
      cep = "05041-001"
   } else {
      endnumber = ""
      city = ""
      estado = ""
      endress = ""
      cep = ""
   }

   var lat, lon;

   const getLocation = () => {
      if (!navigator.geolocation) {
         return null;
      }
      navigator.geolocation.getCurrentPosition((pos) => {
         lat = document.getElementById("lat").innerText = pos.coords.latitude
         lon = document.getElementById("lon").innerText = pos.coords.latitude
      });
   }
   return (
      <>
         <section id="cadastro" className='registerStep2'>
            <div className='typeForm centerContent '>
               <div className='flex centerContent'>
                  <h2>Criar perfil<span className='colorTurquese'> de ONG/Instituição</span></h2>
               </div>
               <IconContext.Provider value={{ size: "15px" }}>
                  <div className='flex centerContent'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <div className='circleWhite'>
                        <BsFillCircleFill />
                     </div>
                     <div className="circleOverlay">
                        <BsCircle />
                     </div>
                     <BsCircle />
                     <div className="typeFormLine"></div>

                  </div>
               </IconContext.Provider>

            </div>
            <form className='formStep2' onSubmit={nextStep}>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Nome da Instituição<strong>*</strong></label>
                     <input className="inputLarger" name="name" type={"text"} placeholder="Instituição AmiMais"
                        required onChange={handleChange('name')} />
                  </div>
               </section>

               <section className='flex'>
                  <div className='containerMedium'>
                     <label >Celular<strong>*</strong></label>
                     <input className="inputMedium" name="phone" type={"tel"} placeholder="DD xxxxx-xxxx"
                        required onChange={handleChange('phone')} />
                  </div>
                  <div className='containerMedium'>
                     <label>Telefone</label>
                     <input className="inputMedium" name="telephone" type={"tel"} placeholder="DD xxxxx-xxxx"
                        onChange={handleChange('telephone')} />
                  </div>
               </section>

               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Sua ONG recebe animais em qual Situação?<strong>*</strong></label>
                     <input className="inputLarger" name="ONGSituation" type={"text"} placeholder="Recebe apenas animais castrados"
                        required onChange={handleChange('ONGSituation')} />
                  </div>
               </section>

               <section className='flex'>
                  <div className='containerMedium'>
                     <label>CNPJ</label>
                     <input className="inputMedium" name="cnpj" type={"text"} placeholder="xxxxxx0001-1"
                        onChange={handleChange('cnpj')} />
                  </div>
                  <div className="inputLocation">
                     <input id="location" type="checkbox" onChange={getLocation} onChange={allowLocation} />
                     <label for="location">Ativar localização</label>
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Estado<strong>*</strong></label>
                     <input className="inputSmall" name="estate" type={"text"} placeholder="Brasilia"
                        required value={estado} onChange={handleChange('estate')} />
                  </div>
                  <div>
                     <label>Cidade<strong>*</strong></label>
                     <input className="inputSmall" name="city" type={"text"} placeholder="Brasilia"
                        required value={city} onChange={handleChange('city')} />
                  </div>
                  <div>
                     <label>CEP<strong>*</strong></label>
                     <input className="inputSmall" name="cep" type={"text"} placeholder="xxxxx-xxx"
                        required value={cep} onChange={handleChange('cep')} />
                  </div>
               </section>
               <section className='flex containterBottom'>
                  <div>
                     <label>Endereço<strong>*</strong></label>
                     <input className="inputYoung" name="endress" type={"text"} placeholder="Rua Amimais"
                        required value={endress} onChange={handleChange('endress')} />
                  </div>
                  <div className='inputNEndress'>
                     <label>N</label>
                     <input name="endressNumber" type={"text"} placeholder="0"
                        onChange={handleChange('endressNumber')} />
                  </div>
                  <button className="nextstep" type="submit" >
                     <p>Continuar</p>
                  </button>
               </section>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1051332869513023550/Vector_13.png" />
         </section>
      </>
   )
}

const RegisterONGKey = ({ nextStep, handleChange, values }) => {
   const [like_state, like_change] = useState("Unliked");
   const like_fuction = () => {
      like_change(!like_state);
   };

   var like_icon;
   if (like_state) {
      like_icon =
         <IconContext.Provider value={{ size: "20px" }}><BsSquare /></IconContext.Provider>;
   } else {
      like_icon =
         <IconContext.Provider value={{ size: "30px" }}><BsCheck /></IconContext.Provider>;
   };

   return (
      <>
         <section id="cadastro" className='registerStep3 '>
            <div className='flex typeForm'>
               <div className="img_logo centerContent">
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050070256070176768/Vector_5.png" />
               </div>
               <div>
                  <div className='flex centerContent'>
                     <h2>Ultima etapa para<span className="colorTurquese"><br /> criar sua conta!</span></h2>
                  </div>
                  <div className='flex centerContent typeStep3'>
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsFillCircleFill />
                     <BsCircle />
                     <div className="typeFormLine"></div>
                  </div>
               </div>
            </div>

            <form className='formStep3' onSubmit={nextStep}>
               <div className=' inputPassword '>
                  <label>Senha<strong>*</strong></label>
                  <input className="inputMedium" name="password" type={"password"} placeholder="Senhas fortes contem: @1#!As*&¨%$"
                     required onChange={handleChange('password')} />
               </div>
               <section className='flex'>
                  <div className='containerMedium'>
                     <label>Você possui um Pet?<strong>*</strong></label>
                     <input className="inputMedium" name="havePET" type={"text"} placeholder="Sim/Não"
                        required onChange={handleChange('havePET')} />
                  </div>
                  <div className='containerMedium'>
                     <div className="form_space">
                        <label>Você adotaria um pet?<strong>*</strong></label>
                        <input className="inputMedium" name="savePET" type={"text"} placeholder="Sim/Não"
                           required onChange={handleChange('savePET')} />
                     </div>
                  </div>
               </section>
               <section className='inputCapcha inputBorder flex'>
                  <div className='flex'>
                     <input id="robot" type="checkbox" onChange={like_fuction} />
                     <section className={like_state ? "unliked" : "liked"}>
                        <label for="robor">{like_icon} </label>
                     </section>
                     <div>
                        <label for="robot">Não sou um robô</label>
                     </div>
                  </div>
                  <img src="https://media.discordapp.net/attachments/1026668645033709692/1050074584289919056/Vector_6.png" />

               </section>

               <section className='terms'>
                  <div>
                     <input id="termos" type="checkbox" required />
                     <label for="termos">Li e aceito com os <strong>Termos de Uso <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="termos2" type="checkbox" required />
                     <label for="termos2">Li e aceito com a <strong>Politica de Privacidade <BiLinkExternal />.</strong></label>
                  </div>
                  <div>
                     <input id="email_term" type="checkbox" required />
                     <label for="email_term">Receber notificações no email.</label>
                  </div>
               </section>
               <button className="nextstep" type="submit"  >
                  <p>
                     Continuar
                  </p>
               </button>

            </form>
         </section>
         <section className="imageRight">
            <img src="https://media.discordapp.net/attachments/1026668645033709692/1050082229935669268/Frame_50.png" />
         </section>
      </>
   )
}
//-----------------------------------------------------------------------------------
