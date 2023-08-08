/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
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
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFamilies = /* GraphQL */ `
  query SyncFamilies(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFamilies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getFamilyMember = /* GraphQL */ `
  query GetFamilyMember($id: ID!) {
    getFamilyMember(id: $id) {
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
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers(
    $filter: ModelFamilyMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        family {
          id
          headName
          memberCount
          address
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFamilyMembers = /* GraphQL */ `
  query SyncFamilyMembers(
    $filter: ModelFamilyMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFamilyMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        family {
          id
          headName
          memberCount
          address
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
      nextToken
      startedAt
      __typename
    }
  }
`;
