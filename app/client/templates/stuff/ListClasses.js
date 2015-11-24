Template.ListClasses.helpers({

  /**
   * @returns {*} All of the Classes documents.
   */
  classesList: function () {
    return Classes.find();
  }
});