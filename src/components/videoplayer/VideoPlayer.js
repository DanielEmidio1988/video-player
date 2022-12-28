import { useState, useRef, useEffect } from "react"
import {ContainerVideoPlayer, VideoPlayerStyle, ControlVideo} from "./styleVideoPlayer"
import play from "../../assets/icons/player-play.svg"
import maximize from "../../assets/icons/maximize.svg"
import volume from "../../assets/icons/volume.svg"
import mute from "../../assets/icons/volume-3.svg"
import pause from "../../assets/icons/player-pause.svg"

//Daniel: custom Hook Player Video
function usePlayerState ($videoPlayer){
    const [playerState, setPlayerState] = useState({
        play: false, //controla o play/pause do video
        percentage: 0, //controla o percentual da barra de progresso do video
    })
    const [time, setTime] = useState({
        seg: 0,
        min: 0,
        hour: 0,
        totalSeg: 0,
        totalMin: 0,
        totalHour: 0,
    })

    //Daniel: hook que fará a sincronização entre o play/pause com o video
    useEffect(()=>{
       playerState.play ? $videoPlayer.current.play() : $videoPlayer.current.pause()
    },[
        $videoPlayer,
        playerState.play
    ])

    //Daniel: função para ativar o botão play/pause
    function toggleVideoPlay(){
        setPlayerState({
            ...playerState,
            play: !playerState.play,
        })
    }

    //Daniel: fará a sincronização da barra de progresso com o tempo atual do video
    function handleTimeUpdate (){
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration)*100
        
        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
    }

    //Daniel: função que serve para sincronizar manualmente a barra de progresso com o tempo do video
    function onChangeVideoPercentage (event){
        const currentPercentageValue = event.target.value
        console.log(currentPercentageValue)
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue
        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })
    }

    return {
        playerState,
        time,
        toggleVideoPlay,
        handleTimeUpdate,
        onChangeVideoPercentage,
    }
}


function VideoPlayer (){ 
    const video = {
        video_URL: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Video 1",
        description: "descricao descricao descricao descricao descricao descricao descricao descricao descricao"
    }
    // const video_URL = "https://www.w3schools.com/html/mov_bbb.mp4"
    const $videoPlayer = useRef(null)
    const {
        playerState,
        time,
        toggleVideoPlay, 
        handleTimeUpdate, 
        onChangeVideoPercentage} = usePlayerState($videoPlayer)
    
   

    return (
        <>
        <ContainerVideoPlayer>
            <VideoPlayerStyle>
                <video
                ref={$videoPlayer}
                src={video.video_URL}
                onTimeUpdate={handleTimeUpdate} //Daniel: propriedade que irá "puxar" a função handleTimeUpdate e capturar o tempo exato do video
                />
                <ControlVideo>
                    <div onClick={()=>toggleVideoPlay()}>
                    {playerState.play ? 
                    <img src={pause} alt="botão-pausa-video"/> : 
                    <img src={play} alt="botão-play-video"/> }
                    </div>
                    
                    <img src={volume} alt="botão-volume-video"/>
                    <scan>00:00/00:00</scan>
                    {/* <scan>00:00/00:00</scan> */}
                    <input type="range"
                    min="0"
                    max="100"
                    onChange={onChangeVideoPercentage}
                    value={playerState.percentage}/>
                    <img src={maximize} alt="botão-maximizar-video"/>

                </ControlVideo>
            </VideoPlayerStyle>
            <div>
                <h1>{video.title}</h1>
                <div>{video.description}</div>
            </div>
        </ContainerVideoPlayer>
        </>
        
    )
}

export default VideoPlayer