import { graphql } from './generated/gql.js';
import { print } from 'graphql';
import { getOctokit } from '@actions/github';
import {
    ListBodyEditsQuery,
    ListBodyEditsQueryVariables,
    ListLabelsAddedAndRemovedQuery,
    ListLabelsAddedAndRemovedQueryVariables,
} from './generated/graphql.js';

// query generated with the help of the GraphQL Explorer
// https://docs.github.com/en/graphql/overview/explorer
const listBodyEditsQuery = graphql(/* GraphQL */ `
    query ListBodyEdits($owner: String!, $repo: String!, $pullRequestNumber: Int!, $after: String) {
        viewer {
            login
        }
        repository(owner: $owner, name: $repo) {
            pullRequest(number: $pullRequestNumber) {
                # edits are listed from newest to oldest, unlike timelineItems
                # so to get the newest ones we use the forward pagination arguments first, after
                userContentEdits(first: 10, after: $after) {
                    nodes {
                        diff
                        editedAt
                        id
                        createdAt
                        deletedAt
                        editor {
                            url
                            login
                        }
                    }
                }
            }
        }
    }
`);
const listLabelsAddedAndRemovedQuery = graphql(/* GraphQL */ `
    query ListLabelsAddedAndRemoved($owner: String!, $repo: String!, $pullRequestNumber: Int!, $before: String) {
        viewer {
            login
        }
        repository(owner: $owner, name: $repo) {
            pullRequest(number: $pullRequestNumber) {
                # timeline items are listed from oldest to newest, unlike edits
                # so to get the newest ones we use the backward pagination arguments last, before
                timelineItems(itemTypes:[LABELED_EVENT, UNLABELED_EVENT], last:10, before: $before){
                    nodes{
                    ...on LabeledEvent{
                        __typename
                        createdAt
                        label{
                        name
                        id
                        description
                        }
                    }
                    ...on UnlabeledEvent{
                        __typename
                        createdAt
                        label{
                        name
                        id
                        description
                        }
                    }
                    }
                }
            }
        }
    }
`);

export function listBodyEdits(
    octokit: ReturnType<typeof getOctokit>,
    variables: ListBodyEditsQueryVariables,
): Promise<ListBodyEditsQuery> {
    return octokit.graphql<ListBodyEditsQuery>(
        print(listBodyEditsQuery),
        variables,
    );
}
export function listLabelsAddedAndRemoved(
    octokit: ReturnType<typeof getOctokit>,
    variables: ListLabelsAddedAndRemovedQueryVariables,
): Promise<ListLabelsAddedAndRemovedQuery> {
    return octokit.graphql<ListLabelsAddedAndRemovedQuery>(
        print(listLabelsAddedAndRemovedQuery),
        variables,
    );
}
