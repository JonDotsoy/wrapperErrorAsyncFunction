
/**
SOURCE:

export const wrapperErrorAsyncFunction = (asyncFn) => (...args) => Promise.resolve(asyncFn(...args)).catch(console.error)

export default wrapperErrorAsyncFunction

PRESETS:
 - env:
    - browser >5%
    - node >=8.9
    - Electron >=1.5

http://babeljs.io/repl/build/7.0/#?babili=false&browsers=%3E%205%25&build=&builtIns=false&code_lz=KYDwDg9gTgLgBAYwgOwM7wO5QIZjMKAUSimgEFUBPZBAMQFcaYBLFOAXjgApsqbbkASg4A-bgDpJ2KAHNUw9mIAKpALbNUwcVGCoIAGwBuwHnzrIuk8dLmDB4hNhgIAFlyRoDWgqSiCAUP6gkLBwACbAAGbY9PqYOHgExL4U1HSMCCwoQA&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=env&targets=Electron-1.5%252CNode-8.9&version=7.0.0-beta.31

**/

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const wrapperErrorAsyncFunction = exports.wrapperErrorAsyncFunction = asyncFn => (...args) => Promise.resolve(asyncFn(...args)).catch(console.error);

exports.default = wrapperErrorAsyncFunction;
