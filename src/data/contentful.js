import { createClient } from 'contentful';

const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

export const client = space && accessToken
  ? createClient({ space, accessToken })
  : null;