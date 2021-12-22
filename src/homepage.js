// import createList from './requestsAPI.js';
// import fetchDataApi from './fetchdata.js';

// export default async () => {
//   const itemList = await fetchDataApi();
//
//   const container = document.getElementById('homepageList');
//   itemList.forEach((element, index) => {
//     container.innerHTML += `
//     <div class='fav-meal'>
//       <img class='meal-image' src='${itemList[i].strMealThumb}' alt=''>
//       <h2 class='meal-title'>${itemList[i].strMeal}</h2>
//       <button class='meal-button' type='button' name='Comments'>Comments</button>
//       <button class='meal-button' type='button' name='Reservation'>Reservation</button>
//     </div>`;
//   });
//   return document.querySelectorAll('.meal-button')
// };

const itemList = [
  { strMeal: 'Baked salmon with fennel & tomatoes', strMealThumb: 'https:/www.themealdb.com/images/media/meals/1548772327.jpg' },
  { strMeal: 'Cajun spiced fish tacos', strMealThumb: 'https:/www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg' },
  { strMeal: 'Escovitch Fish', strMealThumb: 'https:/www.themealdb.com/images/media/meals/1520084413.jpg' },
];

// itemList.push(fetchDataApi());
// const itemParsed = JSON.parse(itemList);

for (let i = 0; i < itemList.length; i+= 1) {
  document.getElementById('homepageList').innerHTML += `
  <div class='fav-meal'>
    <img class='meal-image' src='${itemList[i].strMealThumb}' alt=''>
    <h2 class='meal-title'>${itemList[i].strMeal}</h2>
    <button class='meal-button' type='button' name='Comments'>Comments</button>
    <button class='meal-button' type='button' name='Reservation'>Reservation</button>
  </div>`;
}

export default itemList;
