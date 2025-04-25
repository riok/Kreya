await kreya.invokeOperation('../../REST/Create book');
await kreya.invokeOperation('../../REST/Delete book');

await kreya.invokeOperation('../../gRPC/Say hello (unary call)');

await kreya.invokeOperation('../../WebSocket/Echo');