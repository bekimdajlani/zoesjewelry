
class User {
  constructor(email, name){
  this.email = email;
  this.name = name;
  this.score = 0;
  }
  login (){
    console.log(this.email, "just logged in");
    return this;
  }
  logout(){
    console.log(this.email, "just logged out");
    return this;
  }
  updatescore (){
    this.score++;
    console.log(this.email, 'the score is', this.score);
    return this;
  }
}

class Admin extends User {
 deleteUser (user){
  users = users.filter(u =>{
    return u.email != user.email;
  })

 }
}
var userOne = new User('beke@varja.com', 'bekim');
var userTwo = new User('dajlani@gje.it', 'dajlani');
var admin = new Admin('bosi@baba.al', 'bisha');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);
