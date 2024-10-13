import { TMDB_MOVIE_LISTS } from './constants.js';
import { fetchTMDB } from './fetchTMDB.js';

export const fetchMovieList = async () => {
  try {
    console.log('fetchMovieList 호출 중...');

    const response = await fetch(TMDB_MOVIE_LISTS.NOW_PLAYING, fetchTMDB);

    if (!response.ok) {
      throw new Error(
        `API 요청 실패: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('fetchMovieList에서 오류 발생:', error);
    throw error; // 에러를 다시 throw하여 상위에서 처리할 수 있도록 합니다.
  }
};
