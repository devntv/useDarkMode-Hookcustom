import React from 'react'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import styled from 'styled-components'

let Sun,Moon
Sun = Moon =styled.div`
    position: absolute;
    top:2rem;
    right: 4rem;
    transition: all .3s linear;
    cursor: pointer;
`;

export const Toggle = ({theme, toggleTheme}) => {
   
    return (
        <Sun className="cssDivSM" onClick={toggleTheme}>
            {theme ==='light' ? <NightsStayOutlinedIcon  className="cssIconMoonSun" /> : <WbSunnyOutlinedIcon className="cssIconMoonSun" />}
        </Sun>  
    )
}
