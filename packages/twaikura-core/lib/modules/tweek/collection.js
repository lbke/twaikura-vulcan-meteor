import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import commonOptions from '../twaikuCommon/collectionOptions';

const Tweeks = createCollection({
  collectionName: 'Tweeks',
  typeName: 'Tweek',
  schema,
  ...commonOptions,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  //callbacks: {
  //  create: {
  //    before: []
  //  }
  //},
  //customFilters: [
  //  {
  //    name: "_withRatings",
  //    argument: "average: Int",
  //    filter: ({ input, context, filterArguments }) => {
  //      const { average } = filterArguments;
  //      const { Reviews } = context;
  //      // get all movies that have an average review score of X stars
  //      const xStarReviewsMoviesIds = getMoviesByScore(average);
  //      return {
  //        selector: { _id: { $in: xStarReviewsMoviesIds } },
  //        options: {}
  //      }
  //    }
  //  }
  //]
});

export default Tweeks;
