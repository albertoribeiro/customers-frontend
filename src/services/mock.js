var _customers = [
  {
      "id":"00001",
      "name":"Ana Santos Araujo",
      "birthday":"06/06/1983",
      "document":"85351346893",
      "email":"ana.santos@email.com",
      "address":"Rua E, 1040 - Maracanaú/CE",
      "zip":"61919230",
      "phone":"8522847035"
  },
  {
      "id":"00002",
      "name":"Renan Costa Silva",
      "birthday":"04/04/1973",
      "document":"15716719279",
      "email":"renan.costa@email.com",
      "address":"Rua Bandônion, 1223 - Belo Horizonte/MG",
      "zip":"30230010",
      "phone":"3177195565" 
  },
  {
      "id":"00003",
      "name":"Júlio Cardoso Almeida",
      "birthday":"21/01/1969",
      "document":"92207458873",
      "email":"julio.cardoso@email.com",
      "address":"Rua Ribeirão Preto, 422 - Carapicuíba/SP",
      "zip":"06328110",
      "phone":"92207458873" 
  },
  {
      "id":"00004",
      "name":"Leonor Barbosa Cavalcanti",
      "birthday":"07/11/1993",
      "document":"83183651513",
      "email":"leonor.barbosa@email.com",
      "address":"Rua São Pedro, 432 - Formosa/GO",
      "zip":"73813190",
      "phone":"6190605148"
  },
  {
      "id":"00005",
      "name":"Larissa Santos Souza",
      "birthday":"22/05/1980",
      "document":"68578498704",
      "email":"larissa.santos@email.com",
      "address":"Rua Padre Olivério Kraemer, 1448 - Rio de Janeiro/RJ",
      "zip":"20541270",
      "phone":"2153369131" 
  },
  {
      "id":"00006",
      "name":"Aline Correia Carvalho",
      "birthday":"12/10/1999",
      "document":"56107263446",
      "email":"aline.correia@email.com",
      "address":"Rua Luís Domingues, 1482 - Timon/MA",
      "zip":"65630110",
      "phone":"9988564844" 
  }
];

export const mock = {
  login: data => {
    if (data.email !== "teste@email.com" || data.password !== "teste123")
      return null; 

    return {
      data: {
        data: {
          token: "token_test",
          user: "user_test"
        }
      }
  }},

  getCustomers: () => {
    return {data: { data: _customers }}
  },

  getCustomerById: id => ({
      data: {
        data: _customers.filter(x => x.id === id)[0],
      }
  }),

  saveCustomer: data => { 
    var customer = _customers.filter(x => x.id === data.id)[0];
    if (customer){
      var index = _customers.findIndex(x => x.id === customer.id);
      _customers.splice(index, 1);
    }
      
    var maxId = 0;
    if (_customers.length) {
      maxId = Math.max(..._customers.map(x => parseInt(x.id)));
    }
      
    customer = {
      id: (maxId + 1).toString().padStart(5, '0'),
      name: data.name,
      birthday: data.birthday,
      email: data.email,
      address: data.address,
      zip: data.zip,
      phone: data.phone,
      document: data.document,
    }
    _customers.push(customer);

    return {
      data: {
        data: customer,
      }
    }
  },

  deleteCustomer: id => {
    var index = _customers.findIndex(x => x.id === id);
    _customers.splice(index, 1);
  },
  
  resetPassword: data => {
    return {
      data: {
        message: "Esta requisição é apenas um mock. E-mail informado: " + data.email
      }
  }} 
}