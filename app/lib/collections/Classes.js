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
  className: {
    label: "Course name",
    type: String,
    optional: false,
    max: 10,
    autoform: {
      group: classes,
      placeholder: "EE 160"
    }
  },
  professor: {
    label: "Professor",
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: classes,
      placeholder: "T. Dobry"
    }
  },
  startTime: {
    label: "Start time",
    type: String,
    optional: false,
    autoform: {
      group: classes,
      afFieldInput: {
        type: "time"
      }
    }
  },
  endTime: {
    label: "End time",
    type: String,
    optional: false,
    autoform: {
      group: classes,
      afFieldInput: {
        type: "time"
      }
    }
  }
}));
