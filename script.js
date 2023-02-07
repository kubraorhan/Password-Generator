const pLength = document.getElementById("p-length");
const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const empty = "";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

submit.addEventListener("click", () => {
  let initialPassword = "";
  uppercase.checked ? (initialPassword += uCase) : "";
  lowercase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";
  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(x, initialPassword) {
  let passG = "";
  for (let i = 0; i < x; i++) {
    passG += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  console.log(passG)
  return passG;
}

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  if(password.value == "") {
    alert("Please, generate a password!");
  }else{
    password.select();
    document.execCommand("copy")
    alert("Password has been copied to clipboard");
  }
})