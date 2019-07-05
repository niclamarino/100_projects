import moment from "moment";
import database from '../firebase/firebase';

const initState = [
{
  title: "Sometitle",
  url: "sometitle",
  body: "This is my body and soul",
  coverImage:
  "https://www.gourmet-gatto.it/sites/default/files/article/mobile/come-fanno-fusa-gatti-perche-mordono-prev.jpg",
  category: "Driver",
  createdAt: moment(),
  likes: 0
},
{
  title: "Second post",
  url: "second_post",
  body: "Fall upon your knees",
  coverImage:
  "https://www.gourmet-gatto.it/sites/default/files/article/mobile/idee-organizzare-spazio-gatto-casa-prev.jpg",
  category: "Jump",
  createdAt: moment(),
  likes: 2
},
{
  title: "Moment like this",
  url: "moment_like_this",
  body: "Would have never crossed",
  coverImage:
  "https://www.gourmet-gatto.it/sites/default/files/article/mobile/portare-gatto-vacanza-consigli-prev.jpg",
  category: "Driver",
  createdAt: moment(),
  likes: 0
}
];

// const initState = database.ref('posts')
//     .once('value')
//     .then((snapshot) => {
//         const posts = [];

//         snapshot.forEach((childSnapshot) => {
//             posts.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
// })

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":

    const data = {
      ...action.payload,
      createdAt: JSON.stringify(action.payload.createdAt)
    }

database.ref('posts').push(data)
    
    return state.concat(action.payload);
    case "DELETE_POST":
    let newPosts = state.filter(post => {
      return action.url != post.url;
    });
    return newPosts;
    case "EDIT_POST":
    const newEditPosts = state.map(post => {
      if (post.url == action.payload.url) {
        return action.payload;
      } else {
        return post;
      }
    });
    return newEditPosts;
    case "TEXT_FILTER":
    return state;
    case "ADD_LIKE":
    const newPostsLikes = state.map(post => {
      if (post.url == action.url) {
        post.likes++;
      }
      return post;
    });
    return newPostsLikes;
    default:
    return state;
  }
};

export default postsReducer;
