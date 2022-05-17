import { expect } from 'chai';

kreyaRest.onCallCompleted(call => {
  kreya.trace('The REST call completed.');

  kreya.test('Status code', () => expect(call.status.code).to.equal(200));
  kreya.test('status is success', () => expect(call.status.isSuccess).to.be.true);

  kreya.test('Content type', () => expect(call.response.contentType).to.eq('application/json'));

  const curlyBraceCharCode = '{'.charCodeAt(0);
  kreya.test('Byte content first entry should be a curly brace', () => expect(call.response.rawContentBytes[0]).to.eq(curlyBraceCharCode));
  kreya.test('Text content first char should be a curly brace', () => expect(call.response.rawContentText[0]).to.eq('{'));

  kreya.test('Deserialized method should equal', () => expect(call.response.content.method).to.eq('GET'));
});