'use strict';

const getSongUri = require('./getSongUri');

getSongUri('hello', 'adele')
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e);
  });

