import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';


import logo from '~/assets/logo.png';
import { loginRequest } from '~/store/modules/login/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.login.loading);

  function handleSubmit(data) {
    dispatch(loginRequest(data));
  }

  return (
    <>
      <img width="64px" src={logo} alt="PagaLeve" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Password" />
        <button type="submit">{loading ? 'Loading...' : 'Enter'}</button>
      </Form>
    </>
  );
}
