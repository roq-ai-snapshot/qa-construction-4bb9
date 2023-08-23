import axios from 'axios';
import queryString from 'query-string';
import { IdInterface, IdGetQueryInterface } from 'interfaces/id';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getIds = async (query?: IdGetQueryInterface): Promise<PaginatedInterface<IdInterface>> => {
  const response = await axios.get('/api/ids', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createId = async (id: IdInterface) => {
  const response = await axios.post('/api/ids', id);
  return response.data;
};

export const updateIdById = async (id: string, id: IdInterface) => {
  const response = await axios.put(`/api/ids/${id}`, id);
  return response.data;
};

export const getIdById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ids/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteIdById = async (id: string) => {
  const response = await axios.delete(`/api/ids/${id}`);
  return response.data;
};
