import { ADD_ARTICLE, Article } from './types';

export const addArticle = (payload: Article) => {
    return { type: ADD_ARTICLE, payload };
};
