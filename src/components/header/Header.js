import user from "../../assets/icons/user.svg"
import message from "../../assets/icons/message-2.svg"
import settings from "../../assets/icons/settings.svg"
import logo from "../../assets/icons/Icon-logo.png"
import {MainHeader, LogoHeader, DivLogo, DivSearch, DivSettings} from "./styleHeader"

function Header (){ 
    return (
        <>
        <MainHeader>
            <DivLogo>
                <img src={logo} alt="icone-logo"/>
            </DivLogo>
            <DivSearch>
                <input placeholder="Pesquisar"/>
            </DivSearch>
            <DivSettings>
                <img src={settings} alt="icone-configuração"/>
                <img src={message} alt="icone-mensagem"/>
                <img src={user} alt="icone-usuario"/>
            </DivSettings>
        </MainHeader>
        </>
    )
}

export default Header