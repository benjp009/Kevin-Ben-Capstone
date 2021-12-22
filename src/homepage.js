import createList from './homePageRequest.js';

const populateList = async (category) => {
  const itemList = await createList(category);
  for (let i = 0; i < itemList.length; i += 1) {
    document.getElementById('homepageList').innerHTML += `
    <div class='fav-meal'>
      <img class='meal-image' src='${itemList[i].strMealThumb}' alt=''>
      <h2 class='meal-title'>${itemList[i].strMeal}</h2>
      <button class='meal-button' type='button' name='Comments'>Comments</button>
      <button class='meal-button' type='button' name='Reservation'>Reservation</button>
    </div>`;
  }
}

export default populateList;
