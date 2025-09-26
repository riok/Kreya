kreya.rest.onCallCompleted(ctx => {
  if (!ctx.status.isSuccess || ctx.response.content.length == 0) {
    kreya.variables.delete('bookIds');
    return;
  }

  const bookIds = ctx.response.content.map(x => x.id);
  kreya.variables.set('bookIds', bookIds);
});
