import PetLove_icon from './images/Vector.svg';
import linkedin from './images/Linkedin.png';
import instagram from './images/instagram.png';
import gitHub from './images/GitHub.png';

import './style.css'
export function Rodape() {
    return (
        <>
            <div id="FOOTER">
                <div className="footer footer_space">
                    <div className="footer">
                        <img id="PETLOGO" src={PetLove_icon} alt="AmiMais Logo" />
                        <div>
                            <span>Inicio</span>
                            <p>Cadastra-se</p>
                            <p>Login</p>
                            <p>Adoções</p>
                            <p>Solicitar resgatador</p>
                        </div>
                        <div>
                            <span>Sobre nós</span>
                            <p>Quem somos</p>
                            <p>Empresas</p>
                            <p>Parceiros</p>
                        </div>
                        <FooterContact set_contact="contact_large" />
                    </div>
                    <div className="social_rede">
                        <img className="social_rede" src={linkedin} alt="Linkedin" />
                        <img className="social_rede" src={instagram} alt="instagram" />
                        <img className="social_rede" src={gitHub} alt="gitHub" />
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