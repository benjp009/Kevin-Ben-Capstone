const fetchDataApi = async () => {
  // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  // const response = await fetch(url);
  // const parsed = await response.json();
  // return parsed.meals;
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default fetchDataApi();
