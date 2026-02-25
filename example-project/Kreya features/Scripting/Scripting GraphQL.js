import { expect } from 'chai';

kreya.graphql.onQueryCompleted(call => {
  kreya.trace('The GraphQL query completed.');

  kreya.test('Status code', () => expect(call.status.code).to.equal(200));
  kreya.test('status is success', () => expect(call.status.isSuccess).to.be.true);

  const books = call.response.content.data.books;
  kreya.test('First book should have ID 1', () => expect(books[0].id).to.eq(1));
});
