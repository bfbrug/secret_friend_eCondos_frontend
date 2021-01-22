import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:0;
    outline:0;
  }

  *:focus{
    outline:0;
  }


  html, body, #root{
    height: 100%;
  }


  body{
    background: #333;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: serif;
    font-size:16px;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

`;
