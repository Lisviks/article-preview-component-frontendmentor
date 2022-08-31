const authorElement = document.querySelector('.author');
const shareElement = document.querySelector('.share');
const shareIcons = document.querySelectorAll('.share-icon');

shareIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (shareElement.classList.contains('hidden')) {
      shareElement.classList.remove('hidden');
    } else {
      shareElement.classList.add('hidden');
    }
  });
});
