import { cmd } from './ExecCommand'

export const getCommits = async () => {
    let line = 'git log --pretty=format:"%H %s |"'
    let output = (await cmd(line));
    console.log('COMMITS ' + output);
}

export const getTags = async () => {
    let line = 'git tag -l';
    let output = (await cmd(line)).trim();
    console.log('TAGS ' + output);
}