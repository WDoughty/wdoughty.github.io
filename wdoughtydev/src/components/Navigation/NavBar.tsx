import React from "react";
import { Icon, IconContainer, NavDiv } from "../../styles/styles";


const NavBar = () => {
    return (
        <NavDiv>
            <IconContainer>
                <a href = "https://www.linkedin.com/in/williamdoughtydev/" target="_blank" rel="noreferrer">
                    <Icon src={'../../image/icon-linkedin.png'}></Icon>
                    
                </a>

                <a href = "https://github.com/WDoughty" target="_blank" rel="noreferrer">
                    <Icon  src={`../../image/icon-github.png`} ></Icon>
                    
                </a>
                
                

            </IconContainer>

        </NavDiv>

    )
}

export default NavBar