import React from 'react';

import { Article } from '../../../store/articles';

interface Props {
    articles: Article[];
}

export const ArticlesList = ({ articles }: Props) => {
    if (articles && articles.length > 0) {
        return (
            <ul>
                {articles.map((article: Article, index: number) => (
                    <li key={index}>{article.title}</li>
                ))}
            </ul>
        );
    }

    return (
        <em>None created yet</em>
    );
}
