/**
 * After successful addition of a new Classes document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddClassesForm: {
    /**
     * After successful form submission, go to the ListClasses page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListClasses');
    }
  }
});