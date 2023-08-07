// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Family, FamilyMember } = initSchema(schema);

export {
  Family,
  FamilyMember
};