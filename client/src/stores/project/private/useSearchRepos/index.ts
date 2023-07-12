import { create } from 'zustand';

import { type IActions, type IStates } from './types';

const useSearchReposStore = create<IStates & IActions>((set) => ({
  repos: undefined,
  canvasRepos: [],
  setRepos: (repos) => {
    set({
      repos,
      canvasRepos: repos
    });
  },
  searchRepos: (name) => {
    set((state) => {
      const { repos } = state;
      if (repos) {
        const reposFiltered = repos.filter((repo) => {
          const repoNameTrated = repo.name.replace(/-/g, ' ').toLowerCase();
          return repoNameTrated.includes(name.toLowerCase());
        });
        return {
          canvasRepos: reposFiltered
        };
      }
      return {
        repos: null
      };
    });
  }
}));

export default useSearchReposStore;
