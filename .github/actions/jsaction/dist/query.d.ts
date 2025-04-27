import { getOctokit } from '@actions/github';
import { ListBodyEditsQuery, ListBodyEditsQueryVariables, ListLabelsAddedAndRemovedQuery, ListLabelsAddedAndRemovedQueryVariables } from './generated/graphql.js';
export declare function listBodyEdits(octokit: ReturnType<typeof getOctokit>, variables: ListBodyEditsQueryVariables): Promise<ListBodyEditsQuery>;
export declare function listLabelsAddedAndRemoved(octokit: ReturnType<typeof getOctokit>, variables: ListLabelsAddedAndRemovedQueryVariables): Promise<ListLabelsAddedAndRemovedQuery>;
