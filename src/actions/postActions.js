import { FETCH_POSTS, NEW_POSTS } from './types';

// export function fetchPosts() {
//     return function (dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
//         .then((res) => res.json())
//         .then((posts) => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         })
//         );
//     }
// }

// same as :

export const fetchPosts = () => (dispatch) => {
  //   return function (dispatch) {
  console.log('fetching');
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};
// };
