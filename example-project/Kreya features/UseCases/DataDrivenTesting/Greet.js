import { expect } from 'chai';

kreya.grpc.onResponse(msg => {
  const testCase = kreya.variables.get('testCase');
  kreya.test(testCase.name, () => expect(msg.content.message).to.eql(testCase.expectedOutput.greeting));
});
