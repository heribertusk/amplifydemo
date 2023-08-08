/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
      id
      headName
      memberCount
      address
      members {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          familyMembersId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
      id
      headName
      memberCount
      address
      members {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          familyMembersId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
      id
      headName
      memberCount
      address
      members {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          familyMembersId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember(
    $input: CreateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    createFamilyMember(input: $input, condition: $condition) {
      id
      name
      family {
        id
        headName
        memberCount
        address
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      familyMembersId
      __typename
    }
  }
`;
export const updateFamilyMember = /* GraphQL */ `
  mutation UpdateFamilyMember(
    $input: UpdateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    updateFamilyMember(input: $input, condition: $condition) {
      id
      name
      family {
        id
        headName
        memberCount
        address
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      familyMembersId
      __typename
    }
  }
`;
export const deleteFamilyMember = /* GraphQL */ `
  mutation DeleteFamilyMember(
    $input: DeleteFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    deleteFamilyMember(input: $input, condition: $condition) {
      id
      name
      family {
        id
        headName
        memberCount
        address
        members {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      familyMembersId
      __typename
    }
  }
`;
