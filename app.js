(function() {
  // Handlebars helper
  Handlebars.registerHelper("json", function(a) {
    return JSON.stringify(a)
  })
})()