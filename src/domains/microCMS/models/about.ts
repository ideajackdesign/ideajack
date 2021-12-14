import { RESPONSE_BASE_SINGLE, RESPONSE_BASE_COLLECTION } from './common';

type Item = {
  title: string;
  description: string;
};

export type AboutItem = RESPONSE_BASE_SINGLE<Item>;
export type About = RESPONSE_BASE_COLLECTION<Item>;
