import { ADD_ARTICLE } from './types';

export const addArticle = (payload: any) => {
    return { type: ADD_ARTICLE, payload };
};
