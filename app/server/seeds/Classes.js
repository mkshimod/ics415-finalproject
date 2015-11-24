/**
 * A list of Classes to pre-fill the Collection.
 * @type {*[]}
 */
var classesSeeds = [
  /*{courseName: "EE 160", professor: "T. Dobry", startTime: "10:30",endTime: "11:20" },*/
  /*{name: "Bicycle", quantity: 2}*/
];

/**
 * Initialize the Class collection if empty with seed data.
 */
if (Classes.find().count() === 0) {
  _.each(classesSeeds,  function(classes) {
    Classes.insert(classes);
  });
}
