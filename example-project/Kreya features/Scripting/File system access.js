import { readFile } from 'fs/promises';
import { expect } from 'chai';

const expectedResponse = await readFile('book-1-expected-response.json', 'utf8');

kreya.rest.onCallCompleted(call => {
  kreya.test('Response should match snapshot', () => {
    expect(call.response.rawContentText).to.eql(expectedResponse);
  });
});
