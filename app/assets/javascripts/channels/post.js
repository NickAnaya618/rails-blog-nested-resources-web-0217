//= require cable
//= require_self
//= require_tree .

this.App = {};

App.cable = Cable.createConsumer("/cable");  