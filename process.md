\$ create-react-app .

\$ npm i redux react-redux redux-thunk

redux:
react-redux: libary that bind react & redux
redux-thunk: middleware for redux allow us to access directly with dispatch method

create:
component/Posts.js | rcc tab
component/Postform.js | rcc tab

<!-- App.js -->

bring <Posts> & <Postform>


# bring in store and Provider:

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
return (
<Provider store={store}>

<div className='App'>
<header className='App-header'>
<Postform />
<Posts />
</header>
</div>
</Provider>
);
}

export default App;

# formate preferrence：（create a seperate store file. ）

<!-- /src/components/store.js -->

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
() => rootReducer,
initialState,
applyMiddleware(...middleware)
);

export default store;

<!-- App.js -->

import store from './components/store';

# create reducers/actions

create:
src/reducers/index.js 【 combine all of our reducers 】
src/reducers/postReducer.js 【 evaluate any actions that are commited: 】
src/actions/types.js 【 constants 】
src/actions/postActions.js 【 make actions 】

<!-- src/reducers/index.js -->

// combine all of our reducers:
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
});


<!-- src/actions/types.js -->

export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

<!-- src/reducers/postReducer.js -->

// evaluate any actions that are commited: such as createPost, etc.
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('fatch');
      return {
        ...state,
        items: action.payload,
      };
    // case NEW_POST:
    //   return {
    //     ...state,
    //     item: action.payload
    //   };
    default:
      return state;
  }
}

<!-- actions/postActions.js -->

import { FETCH_POSTS, NEW_POSTS } from './types';

import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => (dispatch) => {
  console.log('fetching');
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};


<!-- components/Posts.js -->

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);


# import all that mess to Posts.js

<!-- Posts.js -->

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

componentDidMount() {
this.props.fetchPosts();
}

export default connect(null, { fetchPosts })(Posts);

# 两个 cheeck point 的 console.log 都不对，48:09，等会回来看看。

# 24:13 npm i react-redux, redux, redux-thunk
