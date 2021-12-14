import { About } from 'domains/microCMS/models/about';
import fetcher from 'domains/microCMS/services/fetcher';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';

export const getAbout = async (): Promise<About> => {
  return await fetcher<About>(`${BASE_ENDPOINT}/about`);
};
