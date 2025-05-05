import { expect } from 'chai';

kreyaGrpc.onResponse(msg => {
  kreya.test('Size should be ok', () => expect(msg.size).to.be.gt(10));
  kreya.test('Message should start with Hello', () => expect(msg.content.message.startsWith('Hello')).to.be.true);
});
