import {
  CHANGE_ARTICLE_INFO,
  PUSH_ARTICLE,
  PUSH_ARTICLE_SUCCESS,
  PUSH_ARTICLE_ERROR,
  FETCH_PRIVATE_ARTICLE,
  CHANGE_PRIVATE_ARTICLE,
  CHANGE_HIGHLIGHT_CURRENT,
  FETCH_EDITED_ARTICLE,
  FETCH_EDITED_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUC,
  CHANGE_DELETE_DIALOG,
} from './constants';

export function changeArticleInfo(info) {
  return {
    type: CHANGE_ARTICLE_INFO,
    info,
  };
}

export function pushArticle() {
  return {
    type: PUSH_ARTICLE,
  };
}

export function pushArticleSuccess(data) {
  return {
    type: PUSH_ARTICLE_SUCCESS,
    data,
  };
}

export function pushArticleError(err) {
  return {
    type: PUSH_ARTICLE_ERROR,
    err,
  };
}

export function fetchPrivateArticle() {
  return {
    type: FETCH_PRIVATE_ARTICLE,
  };
}

export function changePrivateArticle(data) {
  return {
    type: CHANGE_PRIVATE_ARTICLE,
    data,
  };
}

export function changeHightlightCurrent(id) {
  return {
    type: CHANGE_HIGHLIGHT_CURRENT,
    id,
  };
}

export function fetchEditedArticle() {
  return {
    type: FETCH_EDITED_ARTICLE,
  };
}

export function fetchFetchEditedSuc() {
  return {
    type: FETCH_EDITED_ARTICLE_SUCCESS,
  };
}

export function deleteArticle() {
  return {
    type: DELETE_ARTICLE,
  };
}

export function deleteArticleSuc() {
  return {
    type: DELETE_ARTICLE_SUC,
  };
}

export function changeDialogDelete(val) {
  return {
    type: CHANGE_DELETE_DIALOG,
    val,
  };
}

export {
  fetchAllArticle,
} from '../MainPage/actions';
