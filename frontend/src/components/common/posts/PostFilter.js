import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Input } from 'react-materialize';

class PostFilter extends Component {
  constructor() {
    super();

    this.state = {
      filter: '',
    };

    this.filterPosts = this.filterPosts.bind(this);
  }

  filterPosts(event) {
    this.setState({ filter: event.target.value });
    this.props.filterPosts(event.target.value);
  }

  render() {
    return (
      <div className="post-filter-section">
        <form className="col s12">
          <Row>
            <Input
              s={12}
              type="select"
              label="Filter"
              value={this.state.filter}
              onChange={this.filterPosts}
              labelClassName="white-text"
              className="white-text"
            >
              <option value="voteScore">Votes</option>
              <option value="timestamp">Date</option>
            </Input>
          </Row>
        </form>
      </div>
    );
  }
}

PostFilter.propTypes = {
  filterPosts: PropTypes.func.isRequired,
};

export default PostFilter;
