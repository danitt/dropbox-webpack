var Dropbox = require('dropbox')
var dbx = new Dropbox({ accessToken: '[ACCESS-TOKEN]' })
dbx.filesListFolder({path: ''})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
