var HTTP = require('../services/HttpService');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var EmailStore = Reflux.createStore({
  listenables: [Actions],
  submitEmail: function(subscriber) {
    HTTP.post('/subscribers', subscriber).then(function(res) {
      var msg = '';

      if(res.status == 200) {
        msg = 'Email Submitted';
      } else {
        msg = 'Submission failed!';
      }

      this.trigger(msg);
      
    }.bind(this));
  }
});

module.exports = EmailStore;
