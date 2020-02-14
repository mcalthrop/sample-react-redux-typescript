import { Article, ArticleAction, ArticleActionType } from './types';

export const createArticleAction = (payload: Article): ArticleAction => {
    return { type: ArticleActionType.addArticle, payload };
};
