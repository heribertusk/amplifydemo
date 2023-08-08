/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onCreateFamily(filter: $filter) {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onUpdateFamily(filter: $filter) {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onDeleteFamily(filter: $filter) {
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
export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onCreateFamilyMember(filter: $filter) {
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
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onUpdateFamilyMember(filter: $filter) {
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
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onDeleteFamilyMember(filter: $filter) {
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
