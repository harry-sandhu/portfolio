import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS);
const base = isGitHubPagesBuild && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
