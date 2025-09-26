await kreya.invokeOperation('./List books');

const ids = kreya.variables.get('bookIds');
for (var i = 0; i < ids.length; i++) {
  kreya.variables.set('bookId', ids[i]);
  await kreya.invokeOperation('./Delete book');
}
