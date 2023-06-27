"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require('@actions/core');
const GitCommandService_1 = require("./services/GitCommandService");
async function run() {
    try {
        let gitService = new GitCommandService_1.GitCommandService();
        let commit = await gitService.getLastCommit();
        let tag = await gitService.getLastTag();
        console.log(tag);
        core.setOutput('lastTag', tag.Label);
        core.setOutput('lastCommit', `${commit.Hash} - ${commit.Msg}`);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
run();
