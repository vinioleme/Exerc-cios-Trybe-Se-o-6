let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  let nameValue = document.getElementById('full-name').value;
  alert(`${nameValue}`);
});
}