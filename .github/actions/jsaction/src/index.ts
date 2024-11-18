import * as core from '@actions/core';
import * as github from '@actions/github';
import { getMostRecentChange } from './getrecentedit.js';
async function mainInsideTry() {
    const octokit = github.getOctokit(core.getInput('github-token'));
    const prHistory = await getMostRecentChange(octokit, {
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        pullRequestNumber: 1,
    });
    core.info(JSON.stringify(prHistory));
    await octokit.rest.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: 1,
        name: 'testlabel1',
    });
}

function main() {
    mainInsideTry().catch((error: unknown) => {
        core.setFailed(error instanceof Error ? error.message : String(error));
    });
}

main();
