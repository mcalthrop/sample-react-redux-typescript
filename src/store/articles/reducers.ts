import { Article, ArticleAction, ArticleActionType } from './types';
import { Reducer } from 'react';

export interface ArticlesState {
    articles: Article[];
}

const initialState: ArticlesState = {
    articles: [],
};

export type ArticlesReducer = Reducer<ArticlesState, ArticleAction>;

export const articlesReducer = (state: ArticlesState = initialState, action: ArticleAction): ArticlesState => {
    if (action.type === ArticleActionType.addArticle) {
        return {
            ...state,
            articles: state.articles.concat(action.payload),
        };
    }

    return state;
};
