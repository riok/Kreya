import { expect } from 'chai';

kreya.variables.delete('messages');

// Invoke operations and access variables set by them
await kreya.invokeOperation('../Scripting/Advanced scripting example');
kreya.test('messages should be set', () => {
  const messages = kreya.variables.get('messages');
  expect(messages?.length).to.eql(3);
});

// Invoke operations multiple times
for (let i = 0; i < 3; i++) {
  const result = await kreya.invokeOperation('../../REST/Get book');

  if (!result.success) {
    // Stop the loop if an error occurs
    break;
  }
}
