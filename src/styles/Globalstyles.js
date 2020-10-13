
import {createGlobalStyle} from 'styled-components'

export const Globalstyles = createGlobalStyle`
    body{
        // background: ${props => props.theme.body};
        background: ${({theme})=> theme.body};
        color: ${({theme})=> theme.text};
        transition: all .3s linear;
    }
    .btn-primary{
        background:${({theme})=> theme.primary} ;
        color:${({theme})=>theme.text};
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
    }
    .cssIconMoonSun{
        font-size: 2.5rem !important;
    }
    .cssDivSM{
        display: inline
    }
  
`;

export const lightTheme ={
    body: '#fff',
    text:'#121212',
    primary: '#6200ee'
}

export const darkTheme ={
    body: '#121212',
    text:'#fff',
    primary: '#bb86fc'
}
