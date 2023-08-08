/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFamilyInput = {
  id?: string | null,
  headName: string,
  memberCount?: number | null,
  address?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelFamilyConditionInput = {
  headName?: ModelStringInput | null,
  memberCount?: ModelIntInput | null,
  address?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFamilyConditionInput | null > | null,
  or?: Array< ModelFamilyConditionInput | null > | null,
  not?: ModelFamilyConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Family = {
  __typename: "Family",
  id: string,
  headName: string,
  memberCount?: number | null,
  address?: string | null,
  members?: ModelFamilyMemberConnection | null,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelFamilyMemberConnection = {
  __typename: "ModelFamilyMemberConnection",
  items:  Array<FamilyMember | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FamilyMember = {
  __typename: "FamilyMember",
  id: string,
  name: string,
  family?: Family | null,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  familyMembersId?: string | null,
};

export type UpdateFamilyInput = {
  id: string,
  headName?: string | null,
  memberCount?: number | null,
  address?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteFamilyInput = {
  id: string,
  _version?: number | null,
};

export type CreateFamilyMemberInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  _version?: number | null,
  familyMembersId?: string | null,
};

export type ModelFamilyMemberConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFamilyMemberConditionInput | null > | null,
  or?: Array< ModelFamilyMemberConditionInput | null > | null,
  not?: ModelFamilyMemberConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  familyMembersId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFamilyMemberInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  _version?: number | null,
  familyMembersId?: string | null,
};

export type DeleteFamilyMemberInput = {
  id: string,
  _version?: number | null,
};

export type ModelFamilyFilterInput = {
  id?: ModelIDInput | null,
  headName?: ModelStringInput | null,
  memberCount?: ModelIntInput | null,
  address?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFamilyFilterInput | null > | null,
  or?: Array< ModelFamilyFilterInput | null > | null,
  not?: ModelFamilyFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFamilyConnection = {
  __typename: "ModelFamilyConnection",
  items:  Array<Family | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFamilyMemberFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFamilyMemberFilterInput | null > | null,
  or?: Array< ModelFamilyMemberFilterInput | null > | null,
  not?: ModelFamilyMemberFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  familyMembersId?: ModelIDInput | null,
};

export type ModelSubscriptionFamilyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  headName?: ModelSubscriptionStringInput | null,
  memberCount?: ModelSubscriptionIntInput | null,
  address?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
  or?: Array< ModelSubscriptionFamilyFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFamilyMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFamilyMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionFamilyMemberFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateFamilyMutationVariables = {
  input: CreateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type CreateFamilyMutation = {
  createFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFamilyMutationVariables = {
  input: UpdateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type UpdateFamilyMutation = {
  updateFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFamilyMutationVariables = {
  input: DeleteFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type DeleteFamilyMutation = {
  deleteFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFamilyMemberMutationVariables = {
  input: CreateFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type CreateFamilyMemberMutation = {
  createFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type UpdateFamilyMemberMutationVariables = {
  input: UpdateFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type UpdateFamilyMemberMutation = {
  updateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type DeleteFamilyMemberMutationVariables = {
  input: DeleteFamilyMemberInput,
  condition?: ModelFamilyMemberConditionInput | null,
};

export type DeleteFamilyMemberMutation = {
  deleteFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type GetFamilyQueryVariables = {
  id: string,
};

export type GetFamilyQuery = {
  getFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFamiliesQueryVariables = {
  filter?: ModelFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamiliesQuery = {
  listFamilies?:  {
    __typename: "ModelFamilyConnection",
    items:  Array< {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFamiliesQueryVariables = {
  filter?: ModelFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFamiliesQuery = {
  syncFamilies?:  {
    __typename: "ModelFamilyConnection",
    items:  Array< {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFamilyMemberQueryVariables = {
  id: string,
};

export type GetFamilyMemberQuery = {
  getFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type ListFamilyMembersQueryVariables = {
  filter?: ModelFamilyMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamilyMembersQuery = {
  listFamilyMembers?:  {
    __typename: "ModelFamilyMemberConnection",
    items:  Array< {
      __typename: "FamilyMember",
      id: string,
      name: string,
      family?:  {
        __typename: "Family",
        id: string,
        headName: string,
        memberCount?: number | null,
        address?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      familyMembersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFamilyMembersQueryVariables = {
  filter?: ModelFamilyMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFamilyMembersQuery = {
  syncFamilyMembers?:  {
    __typename: "ModelFamilyMemberConnection",
    items:  Array< {
      __typename: "FamilyMember",
      id: string,
      name: string,
      family?:  {
        __typename: "Family",
        id: string,
        headName: string,
        memberCount?: number | null,
        address?: string | null,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      familyMembersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnCreateFamilySubscription = {
  onCreateFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnUpdateFamilySubscription = {
  onUpdateFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFamilySubscriptionVariables = {
  filter?: ModelSubscriptionFamilyFilterInput | null,
};

export type OnDeleteFamilySubscription = {
  onDeleteFamily?:  {
    __typename: "Family",
    id: string,
    headName: string,
    memberCount?: number | null,
    address?: string | null,
    members?:  {
      __typename: "ModelFamilyMemberConnection",
      items:  Array< {
        __typename: "FamilyMember",
        id: string,
        name: string,
        createdAt?: string | null,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        familyMembersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnCreateFamilyMemberSubscription = {
  onCreateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type OnUpdateFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnUpdateFamilyMemberSubscription = {
  onUpdateFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};

export type OnDeleteFamilyMemberSubscriptionVariables = {
  filter?: ModelSubscriptionFamilyMemberFilterInput | null,
};

export type OnDeleteFamilyMemberSubscription = {
  onDeleteFamilyMember?:  {
    __typename: "FamilyMember",
    id: string,
    name: string,
    family?:  {
      __typename: "Family",
      id: string,
      headName: string,
      memberCount?: number | null,
      address?: string | null,
      members?:  {
        __typename: "ModelFamilyMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    familyMembersId?: string | null,
  } | null,
};
