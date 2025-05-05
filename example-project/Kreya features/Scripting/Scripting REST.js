import { expect } from 'chai';

kreyaRest.onCallCompleted(call => {
  kreya.trace('The REST call completed.');

  kreya.test('Status code', () => expect(call.status.code).to.equal(200));
  kreya.test('status is success', () => expect(call.status.isSuccess).to.be.true);

  kreya.test('Content type', () => expect(call.response.contentType).to.eq('application/json'));

  const books = call.response.content;
  kreya.test('First book should have ID 1', () => expect(books[0].id).to.eq(1));
});
