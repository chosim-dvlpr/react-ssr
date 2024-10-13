import React from 'react';
import STAR_EMPTY from '@images/star_empty.png';

function MovieList({ movieList }) {
  return (
    <ul class="thumbnail-list" id="thumbnail-list">
      {movieList.length > 0 ? (
        movieList.map(({ id, title, poster_path, vote_average }) => (
          <li key={id}>
            <div className="item">
              <img
                className="thumbnail"
                src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
                alt={title}
              />
              <div className="item-desc">
                <p className="rate">
                  <img src={STAR_EMPTY} className="star" />
                  <span>{vote_average}</span>
                </p>
                <strong>{title}</strong>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </ul>
  );
}

export default MovieList;
