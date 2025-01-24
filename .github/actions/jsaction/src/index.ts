import * as core from '@actions/core';
import * as github from '@actions/github';
import { getMostRecentChange } from './getrecentedit.js';
import { readFileSync } from 'fs';
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
        labels: ['testlabel1'],
    });

    const jsonInput = JSON.parse(core.getInput('json-input'));
    core.setOutput('output-one', 'output-one-value');
    core.setOutput('json-output', JSON.stringify(jsonInput));
    console.log('output output-one and json-output');
    if (process.env['GITHUB_OUTPUT'] !== undefined) {
        console.log(`value of GITHUB_OUTPUT=${process.env['GITHUB_OUTPUT']}`);
        console.log(readFileSync(process.env['GITHUB_OUTPUT'], 'utf-8'));
    } else {
        console.log('GITHUB_OUTPUT is not set; output must have been sent to console.log');
    }
}

function main() {
    mainInsideTry().catch((error: unknown) => {
        core.setFailed(error instanceof Error ? error.message : String(error));
    });
}

main();
