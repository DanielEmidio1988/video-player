import Header from "../../components/header/Header"
import VideoPlayer from "../../components/videoplayer/VideoPlayer"
import VideoMenu from "../../components/videomenu/VideoMenu"
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
                <VideoMenu/>
            </div>
        </MainVideoContainer>
        </>
    )
}

export default Video