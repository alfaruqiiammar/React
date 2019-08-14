import React from "react";
import axios from "axios";
import "../styles/main.css";

const apiKey = "ac2058d3e8274d7cbc36eac53cb0dadc";
const baseUrl = "https://newsapi.org/v2";
const urlHeadline =
  baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // componentDidMount() {
  //   const self = this;
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd87053c3c904bb68859378455e6e579`
  //     )
  //     .then(function(response) {
  //       self.setState({ data: response.data.articles });
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div>
        {this.props.data.map((value, index) => {
          if (index < 1) {
            return (
              <div>
                <img src={value.urlToImage} className="card-img-top" />
                <div className="card-body">
                  <a href={value.url}>
                    <h4 className="card-title">{value.title}</h4>
                  </a>

                  <p className="card-text">{value.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{value.publishedAt}</small>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Headline;
