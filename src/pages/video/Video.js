import Header from "../../components/header/Header"
import VideoPlayer from "../../components/videoplayer/VideoPlayer"
import {MainVideoContainer} from "./styledVideo"

function Video (){ 
    return (
        <>
        <Header/>
        <MainVideoContainer>
            <div className="video-menu">
                <VideoPlayer/>
                {/* Componente de Comentário */}
            </div>
            <div className="lateral-menu">
                {/* Menu Lateral */}
            </div>
        </MainVideoContainer>
        </>
    )
}

export default Video