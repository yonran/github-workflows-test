import { getOctokit } from '@actions/github';
export interface GetMostRecentChangeOptions {
    owner: string;
    repo: string;
    pullRequestNumber: number;
}
export declare function getMostRecentChange(octokit: ReturnType<typeof getOctokit>, options: GetMostRecentChangeOptions): Promise<void>;
