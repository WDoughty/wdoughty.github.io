import styled from '@emotion/styled'


type IconProps = {
    src: string
}


export const StyledDiv = styled.div`
    color: white
    background-color: black


`

export const ResumeH1 = styled.h1`
    color:red;


`

export const StyledParagraph = styled.p`
    color: #22DA0B;
    font-size: 12px;
    text-align:left;

`

export const StyledResumeHeader = styled.div`
    border-bottom: 2px solid orange;
    font-size: 20px;
    color: orange;

`

export const StyledPHeader = styled.p`
    text-align: left;
    color: #22DA0B;
    font-size: 18px;

`

export const ResumeTD = styled.td`
    color:#22DA0B;
    font-size: 12px; 
    text-align:left;

`

export const NavDiv = styled.div`
    position: relative;
    width:100%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    background-color: #505050;
    display:block;
`

export const NavItem = styled.div`
    postition: relative;
    float: left;
`


export const IconContainer = styled.div`
    position: relative;
    float: right;
`

export const Icon = styled.img<IconProps>`
    position: relative;
    width: 44px;
    height: 44px; 
    margin-right: 8px;
    display: inline-block;
    background-repeat: no-repeat; 
    background-image: url(${props => props.src});
    top: 8px; 
`
