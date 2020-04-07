// Business Logic for AddressBook --------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;

}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();
  this.contacts.push(contact);
}

AddressBook.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//front end
var addressBook = new AddressBook();

$(document).ready(function(){
  var addressBook = new AddressBook();
  let sound = new Audio('https://freesound.org/data/previews/17/17904_65748-lq.mp3')
  $("#add-contact").submit(function(event){
    event.preventDefault();
    sound.play();
    var inputtedFirstName =$('#new-first-name').val()
    var inputtedLastName =$('#new-last-name').val()
    var inputtedPhoneNumber =$('#new-phone-number').val()
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber)
    console.log('miss before: ', missbook)
    var newContact = new Contact(first,last,phone)
     missbook.addContact(newContact);
    $('#contacts').empty();
    missbook.contacts.forEach(function(person){
     $('#contacts').append(`<li> name :${person.fullName()} phone: ${person.phoneNumber}</li>`)
   })
  })
})