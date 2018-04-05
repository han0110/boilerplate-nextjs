import fetch from 'isomorphic-unfetch';

if (!process.browser) global.fetch = fetch;
