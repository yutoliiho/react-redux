import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: [],
  //     };
  //   }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.state.posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h2>Posts</h2>
        {postItems}
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Posts);
