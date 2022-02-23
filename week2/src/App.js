import React from 'react';
import './App.css';
import Movie from "./components/movie"
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';





function App() {

  return (
    <Container>
      <Row xs="auto">
      <MovieList />
      </Row>
    </Container>
  );
}

export default App;
