import React from 'react';

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    return (
      <div>
        Start {this.props.url} End
        <button onClick={this.clickHandler}>Show Dog</button>
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            :
            this.props.data.data && this.props.data.data.results ?
                this.props.data.data.results.map(
                  result => <img key={result.id} src={result.image} alt="#" />)
                : 'null'
            }
      </div>
    )
  }
  clickHandler() {
    console.log("props.fetchDog return", this.props.fetchDog());
    console.log("props.data", this.props.data);
  }
}

export default CharactersList;