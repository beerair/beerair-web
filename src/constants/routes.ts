export const ROUTE_PATH = {
  ROOT: '/',
  HOME: '/home',
  WELCOME: '/welcome',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
  },
  BEERS: {
    LIST: '/beers',
    INFO: '/beers/[id]',
    RECOMMENDS_AND_LIKES: '/beers/recommends-and-likes',
    REQUESTS: {
      LIST: '/beers/requests',
      CREATE: {
        MAIN: '/beers/requests/create',
        COMPLETE: '/beers/requests/create/complete',
      },
    },
  },
  MY: {
    MAIN: '/my',
    ETC: '/my/etc',
    PRIVACY_POLICY: '/my/privacy-policy',
    TERMS: '/my/terms',
  },
  REVIEWS: {
    LIST: '/reviews',
  },
  SEARCH: {
    MAIN: '/search',
  },
};
