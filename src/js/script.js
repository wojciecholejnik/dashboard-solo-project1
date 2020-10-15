/* DELETE 'SHOW' CLASS FROM MODAL */
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

/* open closeModal() by 'X' button */
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

/* open closeModal() by clicking on overlay */
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

/* open closeModal() by 'Escape' button */
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

/* adding 'show' class in openModal() */
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}


document.querySelector('#quit').addEventListener('click', function() {
  openModal('#quit-modal');
});
