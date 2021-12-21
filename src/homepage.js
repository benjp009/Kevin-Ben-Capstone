// import createList from './requestsAPI.js';
import fetchDataApi from './fetchdata.js';

const itemList = [];

// We need to fix this so we call the API and transform them into an array.
itemList.push(fetchDataApi());
const itemParsed = JSON.parse(itemList);


// This part of the code is working - we should not touch it
for (let i = 0; i < itemParsed.length; i ++) {
  document.getElementById('homepageList').innerHTML += `
  <div class='fav-meal'>
    <img class='meal-image' src='${itemParsed[i].strMealThumb}' alt=''>
    <h2 class='meal-title'>${itemParsed[i].strMeal}</h2>
    <button class='meal-button' type='button' name='Comments'>Comments</button>
    <button class='meal-button' type='button' name='Reservation'>Reservation</button>
  </div>`;
};

export default itemList;
