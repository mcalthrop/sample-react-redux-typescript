import { AnyAction } from 'redux';

export interface Article {
    title: string;
}

export enum ArticleActionType {
    addArticle = 'ADD_ARTICLE',
}

export interface ArticleAction extends AnyAction {
    type: ArticleActionType;
    payload: Article;
}
