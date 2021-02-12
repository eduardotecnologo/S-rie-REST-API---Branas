const axios = require('axios');

test('Should get posts', async function(){
  await axios ({
    url: 'http://localhost:3000',
    method: 'get'
  });
  console.log(response);
});