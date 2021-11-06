import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  name: Scalars['String'];
  releaseDate: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  aliases?: Maybe<Array<Scalars['String']>>;
  allegiances?: Maybe<Array<House>>;
  appearedIn: Array<TvSeason>;
  books?: Maybe<Array<Book>>;
  born?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Character>>;
  culture?: Maybe<Scalars['String']>;
  died?: Maybe<Scalars['String']>;
  father?: Maybe<Character>;
  id: Scalars['ID'];
  isAlive: Scalars['Boolean'];
  mother?: Maybe<Character>;
  name: Scalars['String'];
  playedBy?: Maybe<Scalars['String']>;
  spouse?: Maybe<Character>;
  titles?: Maybe<Array<Scalars['String']>>;
};

export type House = {
  __typename?: 'House';
  ancestralWeapons?: Maybe<Array<Scalars['String']>>;
  coatOfArms?: Maybe<Scalars['String']>;
  currentLord?: Maybe<Character>;
  founder?: Maybe<Character>;
  id: Scalars['ID'];
  members: Array<Character>;
  name: Scalars['String'];
  overlord?: Maybe<Character>;
  seats?: Maybe<Array<Scalars['String']>>;
  slogan?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  getCharacter?: Maybe<Character>;
  getCharacters: Array<Character>;
  getHouse?: Maybe<House>;
  getHouses: Array<House>;
};


export type QueryGetCharacterArgs = {
  characterId: Scalars['ID'];
};


export type QueryGetCharactersArgs = {
  sortDirection?: Maybe<SortDirection>;
};


export type QueryGetHouseArgs = {
  houseId: Scalars['ID'];
};


export type QueryGetHousesArgs = {
  sortDirection?: Maybe<SortDirection>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TvSeason = {
  __typename?: 'TvSeason';
  characters: Array<Character>;
  endDate: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate: Scalars['String'];
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', getCharacters: Array<{ __typename?: 'Character', id: string, name: string, playedBy?: string | null | undefined, culture?: string | null | undefined, isAlive: boolean, allegiances?: Array<{ __typename?: 'House', name: string }> | null | undefined }> };


export const Document = gql`
    {
  getCharacters(sortDirection: ASC) {
    id
    name
    playedBy
    culture
    allegiances {
      name
    }
    isAlive
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Query, QueryVariables>(Document, options);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;