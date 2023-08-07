import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerFamily = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Family, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly headName: string;
  readonly memberCount?: number | null;
  readonly description?: string | null;
  readonly members?: (FamilyMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFamily = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Family, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly headName: string;
  readonly memberCount?: number | null;
  readonly description?: string | null;
  readonly members: AsyncCollection<FamilyMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Family = LazyLoading extends LazyLoadingDisabled ? EagerFamily : LazyFamily

export declare const Family: (new (init: ModelInit<Family>) => Family) & {
  copyOf(source: Family, mutator: (draft: MutableModel<Family>) => MutableModel<Family> | void): Family;
}

type EagerFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly family?: Family | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly familyMembersId?: string | null;
}

type LazyFamilyMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FamilyMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly family: AsyncItem<Family | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly familyMembersId?: string | null;
}

export declare type FamilyMember = LazyLoading extends LazyLoadingDisabled ? EagerFamilyMember : LazyFamilyMember

export declare const FamilyMember: (new (init: ModelInit<FamilyMember>) => FamilyMember) & {
  copyOf(source: FamilyMember, mutator: (draft: MutableModel<FamilyMember>) => MutableModel<FamilyMember> | void): FamilyMember;
}