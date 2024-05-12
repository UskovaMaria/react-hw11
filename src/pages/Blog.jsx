import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="posts-page">
      <h1>Blog</h1>

      <div className="posts">
        <h2 className="posts__title">Post list</h2>
        <ul className="posts__list">

          {
            posts.map(post => {
              const { id, title } = post;
              return (
                <li key={ id } className="post">
                  <Link to={ `/blog/${id}` }>
                    <h3 className="post__title">{ title }</h3>
                  </Link>
                </li>
              );
            })
          }

        </ul>
      </div>

    </div>
  );
};