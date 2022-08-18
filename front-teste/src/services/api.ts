import axios from 'axios';

const githubToken = '${Token}';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${githubToken}`,
  },
});
