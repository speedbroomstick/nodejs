process.on('message', (msg) => {
    console.log('Message from parent:', msg);
    process.send({ foo: 'bar' });
  });
  /////////////////////////////////dfskl;df;lksdf;lksd;lkf;sdk;fksldfk;skdf