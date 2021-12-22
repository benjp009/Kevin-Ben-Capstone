import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line no-unused-vars
import html from './index.html';

// eslint-disable-next-line no-unused-vars
import populateList from './homepage.js';

const categories = document.querySelectorAll('.navCategories');
const listContainer = document.getElementById('homepageList');

const commentBtnEvent = async (category) => {
  await populateList(category);
  const commentBtns = document.querySelectorAll('.commentBtn');
  commentBtns.forEach((e) => {
    e.addEventListener('click', () => {
      createModal(e.id);
    });
  });
};

categories.forEach((e) => {
  e.addEventListener('click', async () => {
    listContainer.innerHTML = '';
    categories.forEach((f) => {
      if (f.id !== e.id) {
        f.innerHTML = f.id;
      }
    });
    await commentBtnEvent(e.id);
    displayCount(e, listContainer.children.length);
  });
});

const firstPopulate = async () => {
  await commentBtnEvent('Dessert');
  displayCount(categories[0], listContainer.children.length);
};

firstPopulate();
