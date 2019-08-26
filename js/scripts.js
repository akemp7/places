 function destination(name, landmark, dates, notes) {
   this.name = name,
   this.landmark = landmark,
   this.dates = [dates],
   this.notes = [notes]
 }
destination.prototype.addDates = function(newDate) {
  this.dates.push(newDate);
}

destination.prototype.addNotes = function(newNotes) {
  this.notes.push(newNotes);
}

function passport() {
  this.destinations = [];
}

passport.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}
