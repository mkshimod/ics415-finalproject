/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Classes"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListClasses'
});

Router.route('/add', {
  name: 'AddClasses'
});


Router.route('/classes/:_id', {
  name: 'EditClasses',
  data: function() { return Classes.findOne(this.params._id); }
});

Router.route('/about', {
  name: 'About'
});

Router.route('/howto', {
  name: 'HowTo'
});