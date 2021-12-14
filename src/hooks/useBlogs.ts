import useSWR from 'swr';

import { Blogs } from 'domains/microCMS/models/blog';
import fetcher from 'domains/microCMS/services/fetcher';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';

type Query = {
  limit: string;
  offset: string;
};

const useBlogs = (
  query?: Query
): { blogs: Blogs | undefined; error: Error | undefined } => {
  const q = query ? `?${new URLSearchParams(query).toString()}` : '';

  const { data, error } = useSWR<Blogs, Error>(
    `${BASE_ENDPOINT}/blog${q}`,
    fetcher
  );

  return { blogs: data, error };
};

export default useBlogs;
