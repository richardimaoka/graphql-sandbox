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
  aliases: Maybe<Array<Scalars['String']>>;
  allegiances: Maybe<Array<House>>;
  appearedIn: Array<TvSeason>;
  books: Maybe<Array<Book>>;
  born: Maybe<Scalars['String']>;
  children: Maybe<Array<Character>>;
  culture: Maybe<Scalars['String']>;
  died: Maybe<Scalars['String']>;
  father: Maybe<Character>;
  id: Scalars['ID'];
  isAlive: Scalars['Boolean'];
  mother: Maybe<Character>;
  name: Scalars['String'];
  playedBy: Maybe<Scalars['String']>;
  spouse: Maybe<Character>;
  titles: Maybe<Array<Scalars['String']>>;
};

export type House = {
  __typename?: 'House';
  ancestralWeapons: Maybe<Array<Scalars['String']>>;
  coatOfArms: Maybe<Scalars['String']>;
  currentLord: Maybe<Character>;
  founder: Maybe<Character>;
  id: Scalars['ID'];
  members: Array<Character>;
  name: Scalars['String'];
  overlord: Maybe<Character>;
  seats: Maybe<Array<Scalars['String']>>;
  slogan: Maybe<Scalars['String']>;
  titles: Maybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  getCharacter: Maybe<Character>;
  getCharacters: Array<Character>;
  getHouse: Maybe<House>;
  getHouses: Array<House>;
};


export type QueryGetCharacterArgs = {
  characterId: Scalars['ID'];
};


export type QueryGetCharactersArgs = {
  sortDirection: Maybe<SortDirection>;
};


export type QueryGetHouseArgs = {
  houseId: Scalars['ID'];
};


export type QueryGetHousesArgs = {
  sortDirection: Maybe<SortDirection>;
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

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', getCharacters: Array<{ __typename?: 'Character', id: string, name: string, playedBy: string | null, culture: string | null, isAlive: boolean, allegiances: Array<{ __typename?: 'House', name: string }> | null }> };


export const MyQueryDocument = gql`
    query myQuery {
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
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;