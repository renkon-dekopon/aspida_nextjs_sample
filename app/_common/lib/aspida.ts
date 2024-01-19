import api from '@/aspida/$api';
import aspida from '@aspida/fetch';

export const apiClient = api(
  aspida(fetch, {
    baseURL: "https://petstore.swagger.io/v2",
    throwHttpErrors: true,
  })
);
