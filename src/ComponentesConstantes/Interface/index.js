
import { AiOutlineUser } from 'react-icons/ai';
import { VscThreeBars } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

import { Link } from 'react-router-dom';

import './style.css';
import Logo from './Imagens/amiMaisLogo.png';

export function Interface() {
  return (
    <>
      <IconContext.Provider value={{ size: "40px" }}>
        <header id="InterfaceComponent">
          <section className="interface">
            <div>
              <img src={Logo} id="Logo" />
              <div className="viewLarge" >
                <Link to="/" >Inicio</Link>
                <Link to="/Sobrenos" >Sobre nós </Link>
                <Link to="/Resgate" >Resgate </Link>
                <Link to="/Curiosidades" >Curiosidades </Link>
                <Link to="/Reportar" >Reportar </Link>
                <LoginRegister />
              </div>
            </div>

            <div className="viewMedium">
              <LoginRegister />
              <div className="moreOptions"><VscThreeBars /></div>
            </div>

            <div className="viewMobile">
              <div className="perfilLateral"><AiOutlineUser /></div>
              <div className="moreOptions"><VscThreeBars /></div>
            </div>


          </section>
        </header>
      </IconContext.Provider>
    </>
  )
}

const LoginRegister = () => {
  return (
    <>
      <Link to="/Login" id="Login">Login </Link>
      <Link to="/Cadastrar">Cadastrar </Link>
      <div className=" perfilLateral"><AiOutlineUser /></div>
    </>
  )
}