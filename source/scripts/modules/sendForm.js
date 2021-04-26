import {modalState} from './modals/modalState.js';

function sendForm() {
  const form = document.getElementById('opinion-form')
  const submitButton = form.querySelector('button[type="submit"]')

  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    console.log('send')

    const thanksModal = document.querySelector('.modal-success')
    const errorModal = document.querySelector('.modal-error')
  
    function success() {
      form.reset();
      modalState(thanksModal);
    }
  
    function error() {
      modalState(errorModal);
    }
  
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  
    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    };
  })

}

export default sendForm();
