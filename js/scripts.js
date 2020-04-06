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
function add(a,b){ return a+b}

//front end
$(document).ready(function(){
  let adressbook = new AddressBook();
  $("#add-contact").submit(function(event){
    event.preventDefault();
    let first =$('#first').val()
    let phone =$('#middle').val()
    let last =$('#last').val()
    console.log('adress before: ', adressbook)
    let newContact = new Contact(first,last,phone)
    adressbook.addContact(newContact);
    $('#contacts').empty();
   adressbook.contacts.forEach(function(person){
     $('#contacts').append(`<li> name :${person.fullName()} phone: ${person.phoneNumber}</li>`)
   })
  })
})
