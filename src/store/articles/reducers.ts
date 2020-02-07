import { ADD_ARTICLE } from './types';

const initialState = {
    articles: [],
};

export const articlesReducer = (state: any = initialState, action: any) => {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            articles: state.articles.concat(action.payload),
        };
    }

    return state;
};
