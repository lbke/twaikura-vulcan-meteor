import twaikuCommonSchema from '../twaikuCommon/schema';
const schema = {
  ...twaikuCommonSchema,
  twaikId: {
    type: String,
    optional: true,
    input: 'select',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['admins'],
    relation: {
      fieldName: 'twaik',
      typeName: 'Twaik',
      kind: 'hasOne',
    },
  },
};

export default schema;
