import {Main,  Background,  DownImg} from './HomePage.styled'
import back from "../../images/backgronds/cabbage-down.png";
export const HomePage = () =>{


    return(
        <Main>
         <Background>
         <h4>
            домашня сторінка
        </h4>
        </Background> 

       < DownImg src={back} alt="cabbage"/>
         </Main>
    )
}