import styled from "styled-components";

export const CardVideo = styled.div`
    display: flex;
    text-align: start;
    margin-bottom: 8px;
   
        img{
            border-radius: 8px;
        }
    
    div:last-child{
        padding-left: 8px;  
        
        h3{
            margin-bottom: 2px;
        }

        p{
            font-size: 12px;
            color: gray;
        }
     }
        `

export const MenuFilter = styled.div`
    display: flex;
    gap: 2%;
    margin-bottom: 12px;
`

export const SelectFilter = styled.span`
    border-radius: 12px;
    background-color: ${props => props.cattegory ? 'black' : '#EDEDED'};
    color: ${props => props.cattegory ? 'white':'black'};
    padding: 8px;

`