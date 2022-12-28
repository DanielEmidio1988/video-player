import styled from "styled-components";

export const MainHeader = styled.div`
    width: 100%;
    display: flex;
`

export const DivLogo = styled.div`
    width: 20%;  
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 60px;
    }
`

export const DivSearch = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 90%;
        border-radius: 32px;
        height: 60%;
        padding-left: 20px;
        font-size: 16px;
        border: 1px solid gray;
    }

    input:active{
        width: 94%;
        border: 1px solid red;
    }
    `

export const DivSettings = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    gap: 4vw;
    

    img{
        width: 30px;
    }
`