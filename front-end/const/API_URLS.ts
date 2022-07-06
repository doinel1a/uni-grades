const MODE = process.env.NODE_ENV || 'development';

export const BASE_URL: string = MODE === 'development' ? 'http://localhost:5007/api' : 'http://api:5007/api';