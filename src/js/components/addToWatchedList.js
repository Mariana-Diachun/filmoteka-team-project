import { refs } from './refs';
const STORAGE_KEY = 'movie';
// refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick());

function onAddToWatchedBtnClick(event) {
  setInLocalStorage();
  refs.addToWatchedBtn.getAttribute('disabled');
}
function setInLocalStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// const formData = {};
// function handleFormInput({ target }) {
//   formData[target.name] = target.value || '';
//   const storageData = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, storageData);
// }

// function saveForm() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   //   console.log(savedMessage);
//   if (savedMessage) {
//     refs.textarea.value = JSON.parse(savedMessage).message;
//     refs.email.value = JSON.parse(savedMessage).email;
//   }
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(formData);
//   event.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// saveForm();
