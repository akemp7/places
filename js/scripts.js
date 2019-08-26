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
  this.destinations = [],
  this.currentID = 0
}

passport.prototype.addDestination = function(destination) {
  destination.id = this.assignID();
  this.destinations.push(destination);
  console.log("its new");

}

passport.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}

///////////// Front End /////////////////
$(document).ready(function() {
  var myPassport = new passport();
  $(".form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var landmark= $("input#landmark").val();
    var date =$("input#date").val();
    var note= $("input#note").val();
    var myDestination = new destination(name, landmark, date, note);
    myPassport.addDestination(myDestination);
    console.log(myPassport);
    $("#places").append("<li>" + myDestination.name   + "</li>");

  });
});
