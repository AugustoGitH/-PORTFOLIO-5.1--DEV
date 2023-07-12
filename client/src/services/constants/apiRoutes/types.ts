export type TRoutesProjectPublic =
  | 'GET_PROJECTS'
  | 'LIKE_PROJECT'
  | 'VIEW_PROJECT';

export type TRoutesProjectPrivate =
  | 'GET_PROJECTS'
  | 'GET_REPOSITORIES'
  | 'DELETE_PROJECT'
  | 'CREATE_PROJECT'
  | 'RELOAD_REPO_PROJECT'
  | 'UPDATE_PROJECT';

export type TRoutesAuthPublic = 'LOGIN' | 'VERIFY_CREDENTIALS';
