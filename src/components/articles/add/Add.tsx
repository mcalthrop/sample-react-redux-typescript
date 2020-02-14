import React, { useReducer, useState, FunctionComponent } from 'react';

import { Article, articlesReducer, ArticlesReducer, createArticleAction } from '../../../store/articles';

interface State {
    article: Article;
}

export const AddArticle: FunctionComponent = () => {
    const [state, setState] = useState<State>();
    const [, dispatch] = useReducer<ArticlesReducer>(articlesReducer, { articles: [] });
    const title = state ? state.article.title : '';

    const handleTitleChange = (event: any) => {
        setState({ article: { title: event.target.value } });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newArticle: Article = { title };

        dispatch(createArticleAction(newArticle));
        setState({ article: { title: '' } });
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>
                Title: <input type="text" value={title} onChange={handleTitleChange} />
            </label>
        </div>
        <button type="submit">Add new article</button>
    </form>;
}
