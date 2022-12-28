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

    input{
        width: 50%;
    }
    `