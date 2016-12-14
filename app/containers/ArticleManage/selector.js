import { createSelector } from 'reselect';

const selectArticle = () => (state) => state.get('article');

const selectArticleInfo = () => createSelector(
  selectArticle(),
  (articleState) => articleState.get('articleInfo').toJS()
);

export {
  selectAuthInfo,
  selectArticleList,
  selectRequesting,
} from '../MainPage/selector';

export {
  selectArticleInfo,
};
