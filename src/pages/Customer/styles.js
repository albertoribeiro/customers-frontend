import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  * {
    font: 14px 'Montserrat', sans-serif;
    color: #0294cf;
  }

  label {
    margin: 1vh 1vw;
  }

  input {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5vh;

  .MuiPaper-root {
    width: 50vw;
  }

  .title {
    margin: 1vh 1vw;
    border-bottom: 2px solid #3f51b5;

    label {
      font-size: x-large;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    span {
      color: red;
    }

    input,
    span {
      margin: 1vh 1vw;
    }
  }
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormClient = styled(Form)`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  button[type='submit'] {
    margin: 0 30px 20px 30px;
    background: #02a5e7;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    padding: 20px 0;

    &:hover {
      background: ${lighten(0.08, '#02A5E7')};
    }
  }

  h4 {
    margin: 17px;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #005d83;
    margin: 0 0 15px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  input:disabled {
    color: #0294cf;
  }

  div {
    margin: 0 20px 20px 15px;

    display: flex;
    justify-content: baseline;

    div input {
      background: transparent;
      text-align: center;
      color: #005d83;
      border: none;
    }

    svg {
      color: #005274;
    }

    input[type='checkbox'] + label {
      display: block;
      margin: 0.2em;
      cursor: pointer;
      padding: 0.2em;

      &::before {
        content: '\u2714';
        border: 0.1em solid #000;
        border-radius: 0.2em;
        display: inline-block;
        width: 1em;
        height: 1em;
        padding-left: 0.3em;
        padding-bottom: 0.2em;
        margin-right: 0.2em;
        vertical-align: bottom;
        color: transparent;
      }
    }

    input[type='checkbox'] {
      display: none;
      margin: 0.2em;
    }

    input[type='checkbox']:checked + label {
      &::before {
        background-color: #0197d3;
        border-color: #0197d3;
        color: #fff;
        transition: 0.2s;
      }
    }

    input[type='checkbox']:checked + label:active {
      &::before {
        transform: scale(0);
      }
    }

    input[type='checkbox']:disabled + label {
      transform: scale(1);
      border-color: #aaa;
    }

    input[type='checkbox']:checked:disabled + label {
      transform: scale(1);
      background-color: #bfb;
      border-color: #bfb;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 10rem;
  padding: 0.5rem 1rem;
`;