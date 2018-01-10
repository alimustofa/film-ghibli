import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
      error: false,
    }
  }

  componentDidMount() {
    const baseUrl = `https://ghibliapi.herokuapp.com`;
    this.setState({ loading: true });

    fetch(`${baseUrl}/films/${this.props.match.params.id}`)
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
        <h1 align="center">Oops, data not found</h1>
      );
    } else if (state.loading) {
      return (
        <div className="text-center">
          <img width="30" height="30" alt="Loading" src={require('./img/loading.gif')} />
        </div>
      );
    }

    let renderEl = <h1 align="center">Oops, Data not found</h1>;

    if (state.data) {
      renderEl = (
        <div className="row">
            <div className="col-md-8" style={{ marginBottom: 10 }}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-primary">{state.data.title}</h3>
                        <p className="card-subtitle mb-2 text-muted">{state.data.description}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4" style={{ marginBottom: 10 }}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-primary">Data</h5>
                        <table border="0" width="100%">
                            <tbody>
                                <tr>
                                    <td width="50%">RT Score</td>
                                    <td className="text-muted">{state.data.rt_score}</td>
                                </tr>
                                <tr>
                                    <td>Release Date</td>
                                    <td className="text-muted">{state.data.release_date}</td>
                                </tr>
                                <tr>
                                    <td>Director</td>
                                    <td className="text-muted">{state.data.director}</td>
                                </tr>
                                <tr>
                                    <td>Producer</td>
                                    <td className="text-muted">{state.data.producer}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    return (
      <div>{renderEl}</div>
    );
  }
}

export default Detail;
