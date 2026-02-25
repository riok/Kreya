import { readFile } from 'fs/promises';

const content = await readFile('./greet-test-data.json', 'utf-8');
const testCases = JSON.parse(content);

for (const testCase of testCases) {
  // Set variable consumed by the operation script
  kreya.variables.set('testCase', testCase);

  // Invoke the operation (relative path to the saved operation in the project tree)
  await kreya.invokeOperation('./Greet');
}
