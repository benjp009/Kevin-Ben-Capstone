import createList from './homePageRequest.js';

const listContainer = document.getElementById('homepageList');
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

const addLikes = async () => {
  const likeBtn = document.querySelectorAll('.likeBtn');
  likeBtn.forEach((e) => {
    e.addEventListener('click', async () => {
      await fetch(APIUrl, {
        method: 'POST',
        body: JSON.stringify({
          item_id: Number(e.id),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newLikesP = document.getElementById(e.id);
      getLikes(e.id).then((likesCount) => {
        newLikesP.innerHTML = `${likesCount} likes <a class="likeBtn" id="${e.id}"><i class="far fa-grin-hearts fs-4 like-icon-clicked"></i></a>`;
      });
    });
  });
};

const populateList = async (category) => {
  const itemList = await createList(category);
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i].strMealThumb !== undefined && itemList[i].strMealThumb !== null) {
      const listDiv = document.createElement('div');
      listDiv.classList.add('fav-meal');
      listContainer.appendChild(listDiv);

      const listImg = document.createElement('img');
      listImg.setAttribute('src', itemList[i].strMealThumb);
      listImg.classList.add('meal-image');
      listDiv.appendChild(listImg);

      const listInnerDiv = document.createElement('div');
      listInnerDiv.classList.add('inner-div');
      listDiv.appendChild(listInnerDiv);

      // meal title
      const listH2 = document.createElement('h2');
      listH2.classList.add('meal-title');
      listH2.innerText = itemList[i].strMeal;
      listInnerDiv.appendChild(listH2);

      const listSecondDiv = document.createElement('div');
      listSecondDiv.classList.add('meal-likes');
      listInnerDiv.appendChild(listSecondDiv);

      const itemsLikeCount = document.createElement('p');
      itemsLikeCount.classList.add('like-items');
      itemsLikeCount.setAttribute('id', itemList[i].idMeal);
      // eslint-disable-next-line no-await-in-loop
      await getLikes(itemList[i].idMeal).then((likesCount) => {
        itemsLikeCount.innerHTML = `${likesCount} likes <a class="like-items like-button likeBtn" id="${itemList[i].idMeal}"><i class='fas fa-heart'></i></a>`;
      });
      listSecondDiv.appendChild(itemsLikeCount);

      // comments button
      const commentButton = document.createElement('button');
      commentButton.classList.add('meal-button');
      commentButton.innerHTML = 'Comments';
      listDiv.appendChild(commentButton);
      
    }
  }
  addLikes();
};

export default populateList;
