import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment TwaiksFragment on Twaik {
     _id
     createdAt
   }
`);
