document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const charForm = document.querySelector('#char-form');
  charForm.addEventListener('submit', handleCharFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

  const handleCharFormSubmit = function (event) {
    event.preventDefault();

    const charEntry = createCharEntry(event.target);
    const charList = document.querySelector('#char-list');
    charList.appendChild(charEntry);

    event.target.reset();
  }

  const createCharEntry = function (form) {
    const charEntry = document.createElement('li');
    charEntry.classList.add('char-entry');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    charEntry.appendChild(name);

    const age = document.createElement('h2');
    age.textContent = form.age.value;
    charEntry.appendChild(age);

    const charClass = document.createElement('h2');
    charClass.textContent = form.type.value;
    charEntry.appendChild(charClass);

    const goodAlignment = document.createElement('h2');
    goodAlignment.textContent = form.alignment1.value;
    charEntry.appendChild(goodAlignment);

    const badGuyAlignment = document.createElement('h2');
    badGuyAlignment.textContent = form.alignment2.value;
    charEntry.appendChild(badGuyAlignment);

    return charEntry;
  }

  const handleDeleteAllClick = function (event) {
    const charList = document.querySelector('#char-list');
    charList.innerHTML = '';
  }
