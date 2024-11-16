import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
declare const documents: {
    "\n    query ListBodyEdits($owner: String!, $repo: String!, $pullRequestNumber: Int!, $after: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # edits are listed from newest to oldest, unlike timelineItems\n                # so to get the newest ones we use the forward pagination arguments first, after\n                userContentEdits(first: 10, after: $after) {\n                    nodes {\n                        diff\n                        editedAt\n                        id\n                        createdAt\n                        deletedAt\n                        editor {\n                            url\n                            login\n                        }\n                    }\n                }\n            }\n        }\n    }\n": DocumentNode<types.ListBodyEditsQuery, types.Exact<{
        owner: types.Scalars["String"]["input"];
        repo: types.Scalars["String"]["input"];
        pullRequestNumber: types.Scalars["Int"]["input"];
        after?: types.InputMaybe<types.Scalars["String"]["input"]>;
    }>>;
    "\n    query ListLabelsAddedAndRemoved($owner: String!, $repo: String!, $pullRequestNumber: Int!, $before: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # timeline items are listed from oldest to newest, unlike edits\n                # so to get the newest ones we use the backward pagination arguments last, before\n                timelineItems(itemTypes:[LABELED_EVENT, UNLABELED_EVENT], last:10, before: $before){\n                    nodes{\n                    ...on LabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    ...on UnlabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    }\n                }\n            }\n        }\n    }\n": DocumentNode<types.ListLabelsAddedAndRemovedQuery, types.Exact<{
        owner: types.Scalars["String"]["input"];
        repo: types.Scalars["String"]["input"];
        pullRequestNumber: types.Scalars["Int"]["input"];
        before?: types.InputMaybe<types.Scalars["String"]["input"]>;
    }>>;
};
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export declare function graphql(source: string): unknown;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n    query ListBodyEdits($owner: String!, $repo: String!, $pullRequestNumber: Int!, $after: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # edits are listed from newest to oldest, unlike timelineItems\n                # so to get the newest ones we use the forward pagination arguments first, after\n                userContentEdits(first: 10, after: $after) {\n                    nodes {\n                        diff\n                        editedAt\n                        id\n                        createdAt\n                        deletedAt\n                        editor {\n                            url\n                            login\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ListBodyEdits($owner: String!, $repo: String!, $pullRequestNumber: Int!, $after: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # edits are listed from newest to oldest, unlike timelineItems\n                # so to get the newest ones we use the forward pagination arguments first, after\n                userContentEdits(first: 10, after: $after) {\n                    nodes {\n                        diff\n                        editedAt\n                        id\n                        createdAt\n                        deletedAt\n                        editor {\n                            url\n                            login\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function graphql(source: "\n    query ListLabelsAddedAndRemoved($owner: String!, $repo: String!, $pullRequestNumber: Int!, $before: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # timeline items are listed from oldest to newest, unlike edits\n                # so to get the newest ones we use the backward pagination arguments last, before\n                timelineItems(itemTypes:[LABELED_EVENT, UNLABELED_EVENT], last:10, before: $before){\n                    nodes{\n                    ...on LabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    ...on UnlabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ListLabelsAddedAndRemoved($owner: String!, $repo: String!, $pullRequestNumber: Int!, $before: String) {\n        viewer {\n            login\n        }\n        repository(owner: $owner, name: $repo) {\n            pullRequest(number: $pullRequestNumber) {\n                # timeline items are listed from oldest to newest, unlike edits\n                # so to get the newest ones we use the backward pagination arguments last, before\n                timelineItems(itemTypes:[LABELED_EVENT, UNLABELED_EVENT], last:10, before: $before){\n                    nodes{\n                    ...on LabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    ...on UnlabeledEvent{\n                        __typename\n                        createdAt\n                        label{\n                        name\n                        id\n                        description\n                        }\n                    }\n                    }\n                }\n            }\n        }\n    }\n"];
export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
export {};
