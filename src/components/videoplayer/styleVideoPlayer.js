import styled from "styled-components";

export const ContainerVideoPlayer = styled.div`
    margin-left: 2%;
    width: 96%;
`

export const VideoPlayerStyle = styled.div`
    background-color: black;
    
    video{
        width: 100%;    
    }

`

export const ControlVideo = styled.div`

div:first-child{
    display: flex;
    justify-content: center;
    align-items: center;

    .progress-video{
        width: 98%;
    }
}
   
    div:last-child{ 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    gap:5%;
    
    scan{
        cursor: default;
        color: white;
    }
    
    img{
        height: 28px;
    }

    img:hover{
        cursor: pointer;
    }



    .progress-volume{
        // visibility: hidden;
        width: 10%;    
    }

    // .progress-volume:hover{
    //     // display: block;
    //     visibility: visible;
    //     width: 10%;
    // } 
    }  
    `