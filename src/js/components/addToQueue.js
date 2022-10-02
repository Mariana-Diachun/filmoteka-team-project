import { STORAGE_KEY_QUEUE } from '../globals';
import { refs } from './refs';

let btn;

function onAddToQueueBtnClick(movie) {
  // checkMovieIsInList(movie.id);

  // console.log(movieIsInList);
  // if (movieIsInList) {
  //   removeInLocalStorage(movie);
  //   btn.textContent = 'add to Queue';
  // } else {
  //   setInLocalStorage(movie);
  //   btn.textContent = 'remove from Queue';
  // }

  if (btn.textContent === 'remove from Queue') {
    removeInLocalStorage(movie);
    btn.textContent = 'add to Queue';
  } else {
    setInLocalStorage(movie);
    btn.textContent = 'remove from Queue';
  }
}

function checkMovieIsInList(movieId) {
  const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
  if (!savedMovies) {
    return false;
  }
  const movieIsInList = savedMovies.some(({ id }) => id === movieId);
  console.log(movieIsInList);
  return movieIsInList;
}

function setInLocalStorage(movie) {
  // console.log(movie);
  const savedMovies = localStorage.getItem(STORAGE_KEY_QUEUE);
  if (!movie) return;
  if (!savedMovies) {
    const data = [movie];
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(movie);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(parsedMovies));
  }
}

function removeInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_QUEUE);
  const parsedMovies = JSON.parse(savedMovies);
  console.log(parsedMovies);
  const MOVIE_ID = movie.id;
  // const film = parsedMovies.find(movie => movie.id === MOVIE_ID);
  // const isFilmExist = parsedMovies.some(movie => movie.id === MOVIE_ID);
  // // console.log(isFilmExist);
  const index = parsedMovies.findIndex(movie => movie.id === MOVIE_ID);
  if (index !== -1) {
    const newMovies = parsedMovies.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(parsedMovies));
  }
  return;
}

export function addToQueueBtnClickListener(movie) {
  btn = document.querySelector('.add-to-queue');
  if (checkMovieIsInList(movie.id)) {
    btn.textContent = 'remove from Queue';
  }
  btn.addEventListener('click', () => {
    onAddToQueueBtnClick(movie);
  });
}
