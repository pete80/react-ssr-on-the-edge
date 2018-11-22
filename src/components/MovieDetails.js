import React, { Component } from "react";

import { Link } from "react-router-dom";

const TMDB_API_PATH = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '762954999d09f9db6ffc6c0e6f37d509';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    fetch(`${TMDB_API_PATH}/movie/${this.props.match.params.movieId}?api_key=${TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log({ data })
        this.setState({ movie: data })
      });
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetails;
