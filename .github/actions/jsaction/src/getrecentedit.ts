import { getOctokit } from '@actions/github'
import {listBodyEdits, listLabelsAddedAndRemoved} from './query.js'
export interface GetMostRecentChangeOptions {
    owner: string;
    repo: string;
    pullRequestNumber: number;
}
export async function getMostRecentChange(octokit: ReturnType<typeof getOctokit>, options: GetMostRecentChangeOptions) {
    const a = await listBodyEdits(octokit, {
        ...options,
        after: null,
    })
    const b = await listLabelsAddedAndRemoved(octokit, {
        ...options,
        before: null,
    })
    console.log(a.repository?.pullRequest?.userContentEdits?.nodes, b.repository?.pullRequest?.timelineItems.nodes)
}