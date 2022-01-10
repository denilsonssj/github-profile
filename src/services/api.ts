import axios from 'axios';

import { GITHUB_URL } from 'config/settings';

const api = axios.create({
  baseURL: GITHUB_URL,
});

export default api;
