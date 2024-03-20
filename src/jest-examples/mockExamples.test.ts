import axios from 'axios';
import { forEach, apiCall } from './mockExamples';

// create mock
jest.mock('axios');

describe('forEach', () => {
  const mockCallback = jest.fn((x) => 99 + x);
  test('mock functions should work', () => {
    // trigger the mock
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(99);

    // The return value of the first call to the function was 43
    expect(mockCallback.mock.results[1].value).toBe(100);
  });
});

describe('apiCall', () => {
  test('should return expected response', () => {
    // positive third party axios.get mock
    const payload = {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        }
      ]
    };
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(payload));

    return apiCall(1).then((response) => expect(response).toEqual(payload.data[0]));
  });
  test('should return an error', () => {
    // @ts-ignore
    return expect(apiCall('fail')).rejects.toEqual(new Error('Item with ID fail not found'));
  });
  test('should return an error', () => {
    // negative third party axios.get mock
    (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(null));

    // @ts-ignore
    return expect(apiCall()).rejects.toThrow();
  });
});
