import { useState, useRef, useEffect } from "react"
import {ContainerVideoPlayer, VideoPlayerStyle, ControlVideo, CommentVideo} from "./styleVideoPlayer"
import play from "../../assets/icons/player-play.svg"
import maximize from "../../assets/icons/maximize.svg"
import volume from "../../assets/icons/volume.svg"
import mute from "../../assets/icons/volume-3.svg"
import pause from "../../assets/icons/player-pause.svg"
import theater from "../../assets/icons/theater.svg"

//Daniel: custom Hook Player Video
function usePlayerState ($videoPlayer){
    const [playerState, setPlayerState] = useState({
        play: false, //controla o play/pause do video
        percentage: 0, //controla o percentual da barra de progresso do video
        volume: false, //controla o mute/volume do video
        percentageVolume: 100, //controla o nivel do volume do video
        speedVideo: "Normal", //controla a velocidade do video
        // time: [{
        //     seg: 0,
        //     min: 0,
        //     hour: 0,
        //     totalSeg: 0,
        //     totalMin: 0,
        //     totalHour: 0,
        // }]
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
        playerState.play,
    ])

    //Daniel: função para ativar o botão play/pause
    function toggleVideoPlay(){
        setPlayerState({
            ...playerState,
            play: !playerState.play,
        })
    }

    //Daniel: função para ativar ou "mutar" o som
    function toggleVolumePlay(){ 
        $videoPlayer.current.muted = !$videoPlayer.current.muted

        //Daniel: Analisar a condicional abaixo
        if($videoPlayer.current.muted){
            setPlayerState({
                ...playerState,
                percentageVolume: 0,    
            })
        }else{
            setPlayerState({
                ...playerState,
                percentageVolume: 100,    
            })
        }        
        setPlayerState({
            ...playerState,
            volume: !playerState.volume,
        })
    }

    //Daniel: fará a sincronização da barra de progresso com o tempo atual do video
    function handleTimeUpdate (){
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration)*100
        const percentageTotal = ($videoPlayer.current.duration).toFixed(0)
        const auxTimer = (currentPercentage/10).toFixed(0)
        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
        setTime({
            ...time,
            seg: Math.floor(((auxTimer/60)%1)*60),
            min: Math.floor(auxTimer/60),
            hour: Math.floor(auxTimer/3600),
            totalSeg: Math.floor(((percentageTotal/60)%1)*60),
            totalMin: Math.floor(percentageTotal/60),
            totalHour: Math.floor(percentageTotal/3600),
        })
    }

    //Daniel: função que serve para sincronizar manualmente a barra de progresso com o tempo do video
    function onChangeVideoPercentage (event){
        const currentPercentageValue = event.target.value
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue
        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })
    }

    //Daniel: função que serve para sincronizar manualmente o volume do video
    function onChangeVolumePercentage (event){
        const currentPercentageValue = event.target.value
        $videoPlayer.current.volume = (currentPercentageValue / 100) 
        setPlayerState({
            ...playerState,
            percentageVolume: currentPercentageValue,
        })
            
        }
    
    //Daniel: função para converter a velocidade de reprodução
    function onChangeSpeedVideo (event){
        const auxSpeedVideo = event.target.value
        auxSpeedVideo === "Normal" ? $videoPlayer.current.playbackRate = 1 : $videoPlayer.current.playbackRate = auxSpeedVideo
            // setSpeedVideo(auxSpeedVideo)
            setPlayerState({
                ...playerState,
                speedVideo: auxSpeedVideo,
            })
        }
    
    //Daniel: função para converter o tempo de video em HH:MM:SS
    function convertTime(hour,min,seg){
        if(hour <10 && hour>0){
            hour = '0' + String(hour) + ':'
        }else{
            hour=''
        }
        if(min<10){
            min = '0'+ String(min)
        }else{
            min = min - (Math.floor(min/60)*60)
        }
        if(seg < 10){
            seg = '0' + String(seg)
        }
        return String(hour) + String(min) + ":"+ String(seg)
    }

    return {
        playerState,
        time,
        toggleVideoPlay,
        toggleVolumePlay,
        handleTimeUpdate,
        onChangeVideoPercentage,
        onChangeVolumePercentage,
        onChangeSpeedVideo,
        convertTime,
    }
}

function VideoPlayer (){ 
    const video = {
        video_URL: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "BIG BUCK ADMIRANDO UMA BORBOLETA",
        description: `"Aaaaaah como a Natureza é bela" pensou Big Bunny, até que...`,
        $videoPlayer: useRef(null),
        module: 'Big Buck Bunny',
        image: 'imagem',       
    }
    
    const {
        playerState,
        time,
        toggleVideoPlay,
        toggleVolumePlay, 
        handleTimeUpdate, 
        onChangeVideoPercentage,
        onChangeVolumePercentage,
        onChangeSpeedVideo,
        convertTime,
        } = usePlayerState(video.$videoPlayer)
   
   

    return (
        <>
        <ContainerVideoPlayer>

            <VideoPlayerStyle>
                <video
                ref={video.$videoPlayer}
                src={video.video_URL}
                onTimeUpdate={handleTimeUpdate} //Daniel: propriedade que irá "puxar" a função handleTimeUpdate e capturar o tempo exato do video
                />
                <ControlVideo>
                    <div>
                        <input type="range"
                        min="0"
                        max="100"
                        onChange={onChangeVideoPercentage}
                        value={playerState.percentage}
                        className="progress-video"/>
                    </div>
                    <div>
                    <div onClick={()=>toggleVideoPlay()}>
                        {playerState.play ? 
                        <img src={pause} alt="botão-pausa-video"/> : 
                        <img src={play} alt="botão-play-video"/> }
                    </div>
                    
                    <div onClick={()=>toggleVolumePlay()}>
                        {playerState.volume || playerState.percentageVolume == 0 ? 
                        <img src={mute} alt="botão-mudo-video"/> :
                        <img src={volume} alt="botão-volume-video"/>}                        
                    </div>

                    <input type="range"
                    min="0"
                    max="100"
                    onChange={onChangeVolumePercentage}
                    value={playerState.percentageVolume}   
                    className="progress-volume"/> 
                    <scan>{convertTime(time.hour,time.min,time.seg)}/{convertTime(time.totalHour,time.totalMin,time.totalSeg)}</scan>
                    
                    <select value={playerState.speedVideo} onChange={onChangeSpeedVideo}>
                        {['Normal','1.5','2'].map(speed=>(
                            <option
                            value={speed}
                            key={`x${speed}`}>
                                {speed}
                            </option>
                        ))}
                    </select>

                    <img src={theater} alt="botão-modo-teatro-video"/>
                    <img src={maximize} alt="botão-maximizar-video"/>
                    </div>
                </ControlVideo>
            </VideoPlayerStyle>
            <CommentVideo>
                <h1>{video.title}</h1>
                <div>{video.description}</div>
            </CommentVideo>
        </ContainerVideoPlayer>
        </>
        
    )
}

export default VideoPlayer