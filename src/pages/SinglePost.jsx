import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <div className="single-post-page">
      <h1>Окремий пост</h1>
      <Link to="/blog">Повернутися до блогу</Link>
      {post ? (
        <div className="post">
          <h3 className="post__title">{post.title}</h3>
          <p className="post__body">{post.body}</p>
        </div>
      ) : (
        <h3>Завантаження...</h3>
      )}
    </div>
  );
};


// import { Link, useParams } from "react-router-dom";

// export const SinglePost = (props) => {
//   const { data:posts } = props;
//   const { id } = useParams();
//   const post = posts.find(item => item.id == id);

//   console.log(post);

//   return (
//     <div className="single-post-page">
//       <h1>Single page</h1>
//       <Link to="/blog">back to blog</Link>

//       {
//         post 
//           ? (
//             <div className="post">
//               <h3 className="post__title">{ post.title }</h3>
//               <p className="post__body">{ post.body }</p>
//             </div>
//           )
//           : <h3>No post data (((</h3>
//       }
      
//     </div>
//   );
// };