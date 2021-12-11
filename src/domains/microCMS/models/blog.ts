import { RESPONSE_BASE_SINGLE, RESPONSE_BASE_COLLECTION } from './common';

type Item = {
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  category: string[];
  content: string;
};

export type Blog = RESPONSE_BASE_SINGLE<Item>;
export type Blogs = RESPONSE_BASE_COLLECTION<Item>;
