import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "FADJO CREPIN " },
      { id: 2, nom: "ADANHOUME DONALD" },
      { id: 3, nom: "FASSINOU JAURES" }
    ]
  };

  handleDelete = id => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("ça marche");
  };

  render() {
    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Ajouter un Client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
