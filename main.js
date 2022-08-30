const authorElement = document.querySelector('.author');
const shareElement = document.querySelector('.share');
const shareIcons = document.querySelectorAll('.share-icon');

shareIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (authorElement.classList.contains('hidden')) {
      authorElement.classList.remove('hidden');
      shareElement.classList.add('hidden');
    } else {
      authorElement.classList.add('hidden');
      shareElement.classList.remove('hidden');
    }
  });
});
