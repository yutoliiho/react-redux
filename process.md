\$ create-react-app .

create:
component/Posts.js | rcc tab
component/Postform.js | rcc tab

<!-- App.js -->

bring <Posts> & <Postform>

\$ npm i redux react-redux redux-thunk

redux:
react-redux: libary that bind react & redux
redux-thunk: middleware for redux allow us to access directly with dispatch method

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
import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
items: [],
item: {},
};

export default function (state = initialState, action) {
switch (action.type) {
case FETCH_POSTS: return {...state, items: action.payload,};
default:return state;
}}

# fill actions:

create actions/postActions.js

<!-- actions/postActions.js -->

import { FETCH_POSTS, NEW_POSTS } from './types';

// export function fetchPosts() {
// return function (dispatch) {
// fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
// .then((res) => res.json())
// .then((posts) => dispatch({
// type: FETCH_POSTS,
// payload: posts
// })
// );
// }
// }

// same as :

export const fetchPosts = () => (dispatch) => {
return function (dispatch) {
fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
.then((res) => res.json())
.then((posts) =>
dispatch({
type: FETCH_POSTS,
payload: posts,
})
);
};
};

<!-- components/Posts.js -->

take out componentDidMount() and constructor()
class Posts extends Component {
render(){
...
}
}

# import all that mess to Posts.js

<!-- Posts.js -->

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

componentDidMount() {
this.props.fetchPosts();
}
export default connect(null, { fetchPosts })(Posts);
