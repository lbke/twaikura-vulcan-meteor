import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment TweeksFragment on Tweek {
     _id
     createdAt
   }
`);
