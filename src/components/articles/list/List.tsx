import React from 'react';
import { connect } from 'react-redux';

import { Article } from '../../../store/articles';

interface Props {
    articles: Article[];
}

interface State {
    articles: Article[];
}

const mapStateToProps = (state: State): Props => {
    return { articles: state.articles };
};

const UnconnectedList = ({ articles }: Props) => {
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

export const ListArticles = connect(mapStateToProps)(UnconnectedList);
