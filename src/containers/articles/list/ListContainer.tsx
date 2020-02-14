import React, { FunctionComponent, useReducer } from 'react';

import { ArticlesReducer, articlesReducer } from '../../../store/articles';
import { ArticlesList } from '../../../components/articles';

export const ArticlesListContainer: FunctionComponent = () => {
    const [articlesState] = useReducer<ArticlesReducer>(articlesReducer, { articles: [] });

    return <ArticlesList articles={articlesState.articles} />;
}
