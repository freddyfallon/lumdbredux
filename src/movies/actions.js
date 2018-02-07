import movieApi from '../secrets';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';


export const getMovies = () => async (dispatch) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApi.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
  const movies = await res.json();
  return dispatch({
    type: 'GET_MOVIES',
    data: movies.results,
  });
};

export const getMovie = id => async (dispatch) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${movieApi.apiKey}&language=en-US`);
  const movie = await res.json();
  return dispatch({
    type: 'GET_MOVIE',
    data: movie,
  });
};

