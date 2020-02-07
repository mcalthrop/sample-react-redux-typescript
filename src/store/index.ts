import { createStore } from 'redux';

import { articlesReducer } from './articles/reducers';

export const store = createStore(articlesReducer);
