Template.ListClasses.helpers({

  /**
   * @returns {*} All of the Classes documents.
   */
  classesList: function () {
    return Classes.find();
  }
});

Template.ListClasses.events({

  "click .delete":function(e) {
    e.preventDefault();
    Meteor.call("deleteClasses", this._id);
    Router.go('ListClasses');
  }
});