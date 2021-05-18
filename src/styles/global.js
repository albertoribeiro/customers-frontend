import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


    * {

        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    *:focus {

        outline: 0;

    }

    html, body, #root {

        height: 100%;

    }

    body {

        -webkit-font-smoothing: antialiased;
        background: linear-gradient(-90deg, #02a5e7, #005071);

    }

    body, input, button {

        font: 14px 'Roboto', sans-serif;

    }

    a {

        text-decoration: none;

    }

    ul {

        list-style: none;

    }

    button {

        cursor: pointer;

    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;

      label {
        width: 100%;
        font-family: 'Montserrat', 'sans-serif';
      }
    }

`;
