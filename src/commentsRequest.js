const getItem = async (id) => {
  const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await fetch(url);
  const parsed = await response.json();
  return parsed.meals[0];
};

const getComments = async (id) => {
  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/J8Ya3HGGvBBaT8zGxBGx/comments?item_id=${id}`;
  const response = await fetch(comments);
  const result = await response.json();
  return result;
};

const commentCounter = async (id) => {
  const commentList = await getComments(id);
  if (commentList.length === undefined) {
    return 0;
  }

  if (commentList === Error) {
    return 0;
  }

  return commentList.length;
};

export { getItem as default, getComments, commentCounter };
