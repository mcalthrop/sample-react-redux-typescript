import { Article, ArticleAction, ArticleActionType } from './types';

export const addArticle = (payload: Article): ArticleAction => {
    return { type: ArticleActionType.addArticle, payload };
};
