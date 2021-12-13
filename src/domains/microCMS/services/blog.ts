import { Blog, Blogs } from 'domains/microCMS/models/blog';
import fetcher from 'domains/microCMS/services/fetcher';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';

type Query = {
  limit: string;
};

export const getAllBlogs = async (query?: Query): Promise<Blogs> => {
  const q = query ? `?${new URLSearchParams(query).toString()}` : '';

  return await fetcher<Blogs>(`${BASE_ENDPOINT}/blog${q}`);
};

export const getBlog = async (id: string): Promise<Blog> => {
  return await fetcher<Blog>(`${BASE_ENDPOINT}/blog/${id}`);
};
