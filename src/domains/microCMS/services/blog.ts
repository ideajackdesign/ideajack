import { Blog, Blogs } from 'domains/microCMS/models/blog';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';
const X_MICROCMS_API_KEY = process.env.NEXT_PUBLIC_X_MICROCMS_API_KEY || '';

type Query = {
  limit: string;
};

export const getAllBlogs = async (query?: Query): Promise<Blogs> => {
  const q = query ? `?${new URLSearchParams(query).toString()}` : '';
  const result = await fetch(`${BASE_ENDPOINT}/blog${q}`, {
    headers: {
      'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
    },
  });
  const json = (await result.json()) as Blogs;

  return json;
};

export const getBlog = async (id: string): Promise<Blog> => {
  const result = await fetch(`${BASE_ENDPOINT}/blog/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
    },
  });
  const json = (await result.json()) as Blog;

  return json;
};
