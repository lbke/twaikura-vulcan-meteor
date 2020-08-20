import twaikuCommonSchema from '../twaikuCommon/schema';
const schema = {
  ...twaikuCommonSchema,
  tweekId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['admins'],
    relation: {
      fieldName: 'tweek',
      typeName: 'Tweek',
      kind: 'hasOne',
    },
  },
};

export default schema;
