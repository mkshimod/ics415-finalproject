classes = "Classes";  // avoid typos, this string occurs many times.

Classes = new Mongo.Collection(classes);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Classes record.
   * @param doc The Classes document.
   */
  addClasses: function(doc) {
    check(doc, Classes.simpleSchema());
    Classes.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Classes record.
   * @param doc The Classes document.
   * @param docID It's ID.
   */
  editClasses: function(doc, docID) {
    check(doc, Classes.simpleSchema());
    Classes.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(classes, function () {
    return Classes.find();
  });
}


/**
 * Create the schema for Classes
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Classes.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: classes,
      placeholder: "Bicycle"
    }
  },
  quantity: {
    label: "Quantity",
    type: Number,
    optional: false,
    autoform: {
      group: classes,
      placeholder: "3"
    }
  }
}));
