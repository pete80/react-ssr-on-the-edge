import React, { Component } from "react";

import { Link } from "react-router-dom";

const TMDB_API_PATH = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '762954999d09f9db6ffc6c0e6f37d509';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(`${TMDB_API_PATH}/search/movie?api_key=${TMDB_API_KEY}&query=star wars&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.results })
        console.log({ data })
      });
  }

  render() {
    const { results } = this.state;

    return (
      <ul>
        {results.map(result =>
          <li key={result.id}>
            <Link to={`/${result.id}`}>
              <h2>{result.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${result.backdrop_path}`} />
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Home;
