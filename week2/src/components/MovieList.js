import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          image:
            "https://m.media-amazon.com/images/M/MV5BODgxOTg5OGUtOWViMC00NjM5LWEyMTQtN2M4NTBjYWUzOWUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          title: "Bedazzled",
          description: "A man desperate for the affection of a coworker sells his soul to the devil in exchange for 7 wishes.",
          rating: "5/5"
        },
        {
            id: 1,
            image:
              "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
            title: "Iron Man",
            description: "A billionaire inventor and weapons maker get's kidnapped to make a weapon. He instead makes a suit for himself he uses to help others.",
            rating: "5/5"
          },
      ],
    };
  }

  render() {
    const movieCard = this.state.movies.map((movie) => (
      <Movie {...movie} key={movie.title} />
    ));
    return <div>{movieCard}</div>;
  }
}
