import PetLove_icon from './images/Vector.svg';
import linkedin from './images/Linkedin.png';
import instagram from './images/instagram.png';
import gitHub from './images/GitHub.png';
import { Link } from 'react-router-dom';

import './style.css'
export function Rodape() {
    return (
        <>
            <div id="Footer">
                <div className="footer footer_space">
                    <div className="footer">
                        <img id="PETLOGO" src={PetLove_icon} alt="AmiMais Logo" />
                        <div>
                            <span>Inicio</span>
                          <Link to="/Cadastrar"><p>Cadastra-se</p></Link>
                          <Link to="/Login"><p>Login</p></Link>
                          <Link to="/Resgate"><p>Adoções</p></Link>
                          <Link to="/Rescue1"><p>Solicitar resgatador</p></Link>
                        </div>
                        <div>
                            <span>Sobre nós</span>
                            <Link to="SobreNos"><p>Quem somos</p></Link>
                            <p>Empresas</p>
                            <p>Parceiros</p>
                        </div>
                        <FooterContact set_contact="contact_large" />
                    </div>
                    <div className="social_rede">
                      <a href='https://linktr.ee/amimais'><img className="social_rede" src={linkedin} alt="Linkedin" /></a> 
                      <a href='https://www.instagram.com/amimais_oficial/'><img className="social_rede" src={instagram} alt="instagram" /></a>
                       <a href='https://github.com/AmiMais'><img className="social_rede" src={gitHub} alt="gitHub" /></a>
                    </div>
                </div>
                <div className="footer contact_responsive">
                <FooterContact set_contact="contact_responsive" />
                </div>

                <div className="footer_copyright">
                    <p>Todos direitos reservados © 2022</p>
                </div>
            </div>
        </>
    )
}


const FooterContact = ({set_contact}) => {
    return (
        <div className={set_contact}>
            <span>Contatos</span>
            <p>56435-34431</p>
            <p>(11) 9345-5641</p>
            <p>amiMais@gmail.com.br</p>
        </div>
    )

}