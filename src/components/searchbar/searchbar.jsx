// purpose: to keep track of what term the user wants to search
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../styles/searchbar/searchbar.css';

export default class Searchbar extends React.Component {
  state = {
    term: ""
  }

  onformSubmit = (e) => {
    e.preventDefault(); // prevent form submission
    this.props.onSearchSubmit(this.state.term);
  }

  recordTerm = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div className="ui segment" style={{ top: "10px", margin: "0 0 30px 0" }}>
        <form className="ui form" onSubmit={this.onformSubmit}>
          <div className="field">
            <label> Image Search </label>
            <input type="text" onChange={this.recordTerm} />
          </div>
        </form>
      </div>
    );
  }
}
