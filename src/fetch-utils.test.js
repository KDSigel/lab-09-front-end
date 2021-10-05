import { getAllBikes, getAllTypes, getOneBike } from './fetch-utls.js'

test('gets all the bikes', async () => {
    const expected = {
        id: expect.any(Number),
        year: expect.any(Number),
        make: expect.any(String),
        model: expect.any(String),
        color: expect.any(String),
        img: expect.any(String),
        rideable: expect.any(Boolean),
        owner_id: expect.any(Number),
        type: expect.any(String)
    };
    const actual = await getAllBikes();
  
  expect(actual[0]).toEqual(expected);
});

test('gets all the types', async () => {
    const expected = [
    {
        id: 1,
        type: 'Road'
    },
    {
        id: 2,
        type: 'Mountain'
    },
    {
        id: 3,
        type: 'Cruiser'
    },
    {
        id: 4,
        type: 'Folding'
    },
    {
        id: 5,
        type: 'Cargo'
    }
];
    const actual = await getAllTypes();
  
  expect(actual).toEqual(expected);
});

test('gets one bike', async () => {
    const expected = {
        id: expect.any(Number),
        year: expect.any(Number),
        make: expect.any(String),
        model: expect.any(String),
        color: expect.any(String),
        img: expect.any(String),
        rideable: expect.any(Boolean),
        owner_id: expect.any(Number),
        type: expect.any(String)
    };
    const actual = await getOneBike(1);
  
  expect(actual).toEqual(expected);
});
