import './style.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
export function FooterMin() {
    return (
        <>

            <div id="FooterMin">
                <div className="footer_button">
                    <span>Mais Informações </span>
                    <AiOutlineArrowUp/>
                </div>
                <div className="footer_copyright">
                    <p>Todos direitos reservados © 2022</p>
                </div>
            </div>
        </>
    )
}