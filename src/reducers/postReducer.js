// evaluate any actions that are commited: such as createPost, etc.
import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('reducers');
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
