import React, { useState } from 'react';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';

import { Paper, IconButton, InputLabel } from '@material-ui/core';
import { ArrowBack, DeleteOutline } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveCustomerRequest } from '~/store/modules/customer/actions';

import { Container, FormClient } from './styles';

import Alert from '~/components/Alert';
import api from '~/services/api';
import { toast } from 'react-toastify';
import history from '~/services/history';
import { mock } from '~/services/mock';

const schema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string(),
  birthday: Yup.string(),
  email: Yup.string(),
  address: Yup.string(),
  zip: Yup.string(),
  phone: Yup.string(),
  document: Yup.string(),
  // name: Yup.string()
  //   .required('O nome é obrigatório')
  //   .max(50, 'O campo deve ter no máximo 50 caracteres'),
  // endpoints: Yup.array().required('Selecione ao menos 1 endpoint'),
});

export default function Customer() {
  const customer = useSelector(state => state.customer.customer);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const id = customer ? customer.id : null;

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  function handleSubmit(data) {
    dispatch(saveCustomerRequest(data));
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    async function deleteClient() {
      setLoading(true);
      try {
        // await api.delete(`/clients/${id}`);
        mock.deleteCustomer(id)
        toast.success('Client excluido com sucesso!');
        setLoading(false);
        history.push('/home');
      } catch (error) {
        toast.error('Não foi possível excluir');
        setLoading(false);
      }
    }

    deleteClient();
    setOpen(false);
  };

  return (
    <Container>
      <Paper>
        <div className="row title">
          <Link to="/home">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <InputLabel>Perfis</InputLabel>
          {id && (
            <>
              <IconButton color="secondary" onClick={handleClickOpen}>
                <DeleteOutline />
              </IconButton>
              <Alert
                title="Atenção"
                description="Deseja realmente excluir o client?"
                open={open}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
              />
            </>
          )}
        </div>
        <FormClient initialData={customer} schema={schema} onSubmit={handleSubmit}>
          <Input name="id" hidden />
          <Input name='name' placeholder="Name" />          
          <Input name='birthday' placeholder="Birthday" />         
          <Input name='email' placeholder="E-Mail" />         
          <Input name='address' placeholder="Full Address" />         
          <Input name='zip' placeholder="Zip Code" />         
          <Input name='phone' placeholder="Phone Number" />   
          <Input name='document' placeholder="Document" />
          <button type="submit">{loading ? 'Carregando...' : 'Salvar'}</button>
        </FormClient>
      </Paper>
    </Container>
  );
}