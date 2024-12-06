import { expect } from 'chai';

let responseCount = 0;

kreyaWebSocket.onResponseMessage(response => {
  responseCount++;
  kreya.test('Response content', () => expect(response.content).to.contain(`Message ${responseCount}`));
});

kreyaWebSocket.onCallCompleted(call => {
  kreya.trace('The WebSocket call completed.');

  kreya.test('Status code', () => expect(call.status.code).to.equal(1000));
});