import styled from "styled-components";

export const MainVideoContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 30px;
    display: flex;
    
    .video-menu{
        width: 60%;
    }
    
    .lateral-menu{
        width: 40%;
    }
    
    @media screen and (max-device-width: 768px){
        flex-direction: column;

        .video-menu{
            width: 100%;
        }

        .lateral-menu{
            width: 100%;
        }
    }
    `