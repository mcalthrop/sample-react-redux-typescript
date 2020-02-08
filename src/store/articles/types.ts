export interface Article {
    title: string;
}

export enum ArticleActionType {
    addArticle = 'ADD_ARTICLE',
}

export interface ArticleAction {
    type: ArticleActionType;
    payload: Article;
}
