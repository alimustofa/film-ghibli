import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      error: false,
    }
  }

  componentDidMount() {
    const baseUrl = `https://ghibliapi.herokuapp.com`;
    this.setState({ loading: true });

    fetch(`${baseUrl}/films`)
      .then(res => {
        if (res.status !== 200) {
          this.setState({ error: true });
        }
        
        return res.json();
      })
      .then(dataFilm => {
        this.setState({ 
          data: dataFilm,
          loading: false
        });
      });
  }

  render() {
    const state = this.state;
    if (state.error) {
      return (
        <h1 align="center">Oops, something went wrong</h1>
      );
    } else if (state.loading) {
      return (
        <div className="text-center">
          <img width="30" height="30" alt="Loading" src={require('./img/loading.gif')} />
        </div>
      );
    }

    let renderEl = <h1 align="center">Oops, Data empty</h1>;

    if (state.data.length) {
      renderEl = state.data.map((d, i) => {
        const urlDetail = `/film/${d.id}`;
        return (
          <div key={i} className="col-md-3" style={{ marginBottom: 10 }}>
            <div className="card">
              <img className="card-img-top" src={require('./img/no-image.jpg')} alt="Card image cap" />
              <div className="card-body">
                <a href={urlDetail}>
                  <h6 className="card-title">{d.title}</h6>
                </a>
                <p className="card-subtitle mb-2 text-muted">{d.release_date} - {d.director}</p>
                <a href={urlDetail} className="card-link float-right">Detail</a>
              </div>
            </div>
          </div>);
      });
    }

    return (
      <div className="row">{renderEl}</div>
    );
  }
}

export default App;
