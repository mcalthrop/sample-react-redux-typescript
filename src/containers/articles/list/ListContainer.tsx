import React from 'react';
import { connect } from 'react-redux';

import { Article } from '../../../store/articles';
import { ArticlesList } from '../../../components/articles';

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
    return <ArticlesList articles={articles} />;
}

export const ArticlesListContainer = connect(mapStateToProps)(UnconnectedList);
