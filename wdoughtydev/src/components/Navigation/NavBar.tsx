import React from "react";
import { Icon, IconContainer, NavDiv, NavItem } from "../../styles/styles";
import linkedin from '../../image/icon-linkedin.png';
import github from  '../../image/icon-github.png';


const NavBar = () => {
    return (
        <NavDiv>
            
            <IconContainer>
                <a href = "https://www.linkedin.com/in/williamdoughtydev/" target="_blank" rel="noreferrer">
                    <Icon src={linkedin}></Icon>
                    
                    
                </a>
            </IconContainer>
            <IconContainer>

                <a href = "https://github.com/WDoughtydev" target="_blank" rel="noreferrer">
                    <Icon src={github} ></Icon>
                    
                </a>
                
            </IconContainer>

        </NavDiv>

    )
}

export default NavBar