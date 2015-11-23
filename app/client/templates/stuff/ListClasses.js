Template.ListClasses.helpers({

  /**
   * @returns {*} All of the Classes documents.
   */
  stuffList: function () {
    return Classes.find();
  }
});