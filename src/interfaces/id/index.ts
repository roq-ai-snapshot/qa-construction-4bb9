import { GetQueryInterface } from 'interfaces';

export interface IdInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface IdGetQueryInterface extends GetQueryInterface {
  id?: string;
}
