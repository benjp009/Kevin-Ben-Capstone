import createList from './homePageRequest.js';

// const listContainer = document.getElementById('homepageList');
const APIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8Ya3HGGvBBaT8zGxBGx/likes';

// eslint-disable-next-line no-unused-vars
const getLikes = async (id) => {
  const likesList = await fetch(APIUrl);
  const likesObject = await likesList.json();
  for (let j = 0; j < likesObject.length; j += 1) {
    if (likesObject[j].item_id === Number(id)) {
      return likesObject[j].likes;
    }
  }
  return 0;
};

const populateList = async (category) => {
  const itemList = await createList(category);
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i].strMealThumb !== undefined && itemList[i].strMealThumb !== null) {
      document.getElementById('homepageList').innerHTML += `
      <div class='fav-meal'>
        <img class='meal-image' src='${itemList[i].strMealThumb}' alt=''>
        <div>
          <h2 class='meal-title'>${itemList[i].strMeal}</h2>
          <div class='meal-likes'>
            <p class='like-items'>likes<p>
            <p class='like-items'><i class='fas fa-heart'></i></p>
          </div>
        </div>
        <button class='meal-button' type='button' name='Comments'>Comments</button>
        <button class='meal-button' type='button' name='Reservation'>Reservation</button>
      </div>`;
    }
  }
  // footer.classList.remove('d-none');
  // footer.classList.add('d-md-flex');
  // addLikes();
};

export default populateList;

// ${likesCount} likes <a class='likeBtn' id='${itemList[i].idMeal}'>
// <i class='far fa-grin-hearts fs-4 like-icon transition-all'
