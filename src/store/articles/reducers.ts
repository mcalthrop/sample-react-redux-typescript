import { Article, ArticleAction, ArticleActionType } from './types';

export interface ArticlesState {
    articles: Article[];
}

const initialState: ArticlesState = {
    articles: [],
};

export const articlesReducer = (state: ArticlesState = initialState, action: ArticleAction): ArticlesState => {
    if (action.type === ArticleActionType.addArticle) {
        return {
            ...state,
            articles: state.articles.concat(action.payload),
        };
    }

    return state;
};
