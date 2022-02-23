import React from "react";
import MovieList from "./MovieList";
import {Col} from "react-bootstrap"
import {Row} from "react-bootstrap"

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      alt: props.alt,
      title: props.title,
      description: props.description,
      rating: props.rating,
      review: props.review
    };
  }
  render() {
    return (
      <>
      
        <div className="card movie-card" style={{ width: "19rem" }}>
          <img
            src={this.props.image}
            className="card-img-top movie-image"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>

            <p className="card-text">{this.props.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.rating}</li>
          </ul>
        </div>
        <Row>
            <Col className="reviews">
                <p>Reviews:</p>
                <p>{this.props.review}</p>
            </Col>
        </Row>
        
      </>
    );
  }
}
