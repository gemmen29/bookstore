const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'PdYdKQsxxAQjAIiflVg7';

export const addBook = async ({ id, title, category }) => {
  const response = await fetch(`${baseURL}/${appId}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      category,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.text();
  return data;
};

export const deleteBook = async ({ id }) => {
  const response = await fetch(`${baseURL}/${appId}/books/${id}`, {
    method: 'DELETE',
  });
  const data = await response.text();
  return data;
};
