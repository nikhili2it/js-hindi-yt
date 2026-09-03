const accountId = 144
let accountEmail = "nikhil@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity])

//accountId = 1

accountEmail = "nik@gmail.com"
accountPassword = "54321"
accountCity = "Pune"

/*
var and let both variables

Prefer not to use var...
coz var doesn't support
block scope and functional scope.

Also prefer mentioning let or var 
even though it can work otherwise.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//console.table to print O/P as a table.
