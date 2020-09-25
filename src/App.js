import React, { Component } from 'react';
import api from './api';



class App extends Component {
  state = {
    fornecedores: [],
  }

  async componentDidMount() {
    const response = await api.get('');    

    this.setState({ fornecedores: response.data});
  }

  render(){
    const { fornecedores } = this.state;

    return(
      <div>
        <h1>Listar Fornecedores</h1>
        {fornecedores.map(fornecedor => (
          <li key={fornecedor.show.Id}>
          <h2>
            <strong>Fornecedor: </strong>
            {fornecedor.show.RazaoSocial}
          </h2>
          <p>  
            {fornecedor.show.Localidade}
          </p>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
