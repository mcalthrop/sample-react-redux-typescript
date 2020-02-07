import React, { Component } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { Article, addArticle } from '../../../store/articles';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        addArticle: (article: Article) => dispatch(addArticle(article)),
    }
};

interface State {
    title: string;
}

interface Props {
    addArticle: (article: Article) => void;
}

class UnconnectedAdd extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }

    handleTitleChange(event: any) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: '' });
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>
                        Title:
                        <input type="text" value={title} onChange={this.handleTitleChange.bind(this)} />
                    </label>
                </div>
                <button type="submit">Add new article</button>
            </form>
        );
    }
}

export const AddArticle = connect(null, mapDispatchToProps)(UnconnectedAdd);
