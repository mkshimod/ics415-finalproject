/**
 * A list of Class to pre-fill the Collection.
 * @type {*[]}
 */
var classesSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the Class collection if empty with seed data.
 */
if (Classes.find().count() === 0) {
  _.each(classesSeeds,  function(classes) {
    Classes.insert(classes);
  });
}
