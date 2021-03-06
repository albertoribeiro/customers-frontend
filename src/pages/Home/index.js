import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

import {
  AppBar,
  Tabs,
  Tab,
  IconButton,
} from '@material-ui/core';

import { AddCircleOutline } from '@material-ui/icons';

import { useDispatch, useSelector } from 'react-redux';
import {
  getCustomerRequest,
  createCustomerRequest,
} from '~/store/modules/customer/actions';
import { setLastVisited } from '~/store/modules/login/actions';

import api from '~/services/api';
import history from '~/services/history';
import { Container } from './styles';


export default function Home() {
  const lastVisited = useSelector(state => state.login.lastVisited);
  const [tableContent, setTableContent] = useState(lastVisited || 'customers');
  const [state, setState] = useState({});

  const dispatch = useDispatch();

  async function fetchCustomers() {
    const columns = [
      { title: 'Name', field: 'name' },
      { title: 'Birthdate', field: 'birthdate' },
      { title: 'E-Mail', field: 'email' },
      { title: 'Full Address', field: 'address' },
      { title: 'Zip Code', field: 'zip' },
      { title: 'Phone Number', field: 'phone' },
      { title: 'Document', field: 'document' }
    ];

    const response = await api.get('/customers');
    const customers = response.data;
    const data = customers.map(customer => ({
      id: customer.id,
      name: customer.name,
      birthdate: customer.birthdate,
      email: customer.email,
      address: customer.address,
      zip: customer.zip,
      phone: customer.phone,
      document: customer.document,
    }));

    setState({ columns, data });
  }

  useEffect(() => {
    async function fetchTableData() {
      if (tableContent === 'customers') {
        fetchCustomers();
      }
    }
    fetchTableData();
  }, [tableContent]);

  const handleChange = (_, newValue) => {
    setTableContent(newValue);
    dispatch(setLastVisited(newValue));
  };

  const handleRowClick = (_, row) => {
    if (row) {
      dispatch(getCustomerRequest(row.id));
    } else {
      dispatch(createCustomerRequest());
      history.push('/customer');
    }
  };

  return (
    <Container>
      <MaterialTable
        onRowClick={handleRowClick}
        title={
          <AppBar position="static">
            <Tabs
              value={tableContent}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <IconButton  onClick={handleRowClick}>
                <AddCircleOutline />
              </IconButton>
              <Tab value="customers" label="Customers" />
            </Tabs>
          </AppBar>
        }
        columns={state.columns}
        data={state.data}
        options={{
          paging: true,
          minBodyHeight: '40vh',
        }}
        localization={{
          toolbar: { searchPlaceholder: 'Search' },
          pagination: {
            labelRowsSelect: 'Records',
            firstAriaLabel: 'First Page',
            previousAriaLabel: 'Previous Page',
            nextAriaLabel: 'Next Page',
            lastAriaLabel: 'Last Page',
          },
          body: {
            emptyDataSourceMessage: 'No records found...',
          },
        }}
      />
    </Container>
  );
}
