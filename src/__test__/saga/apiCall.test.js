//Import api
import { apiCall } from '../../saga/apiCall';

describe('Apicall', () => {
  it('Should api request works', async () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200
    });
  
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  
    const response = await apiCall('/', { method: 'GET' });
    expect(response).toEqual(mockSuccessResponse);
  })

  it('Should api response with 400', async () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 400
    });
  
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    
    try {
      await apiCall('/', { method: 'GET' });
    } catch (error) {
      expect(error).toEqual({ message: 'error 400' });
    }
  })
})