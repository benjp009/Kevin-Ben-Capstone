import { commentCounter } from './commentsRequest.js';

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'I did thrice',
        creation_date: '2021-12-24',
        username: 'Kevin',
      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test('It counts the right number of comments1', async () => {
  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toEqual(1);
});

test('It counts the right number of comments1', async () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'I did it thrice',
        creation_date: '2021-12-24',
        username: 'Kevin',
      },
      {
        comment: 'I did it thrice',
        creation_date: '2021-12-24',
        username: 'Kevin',
      },
      {
        comment: 'I did it thrice',
        creation_date: '2021-12-24',
        username: 'Kevin',
      },
    ]),
  });

  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toEqual(3);
});

test('It counts the right number of comments2', async () => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve(Error),
  });

  const commentNumber = await commentCounter(52772);
  expect(commentNumber).toBe(0);
});
