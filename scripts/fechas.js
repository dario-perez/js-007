const currentDate = new Date();

const myBirthday = new Date(1988, 5, 21);

const compar = currentDate > myBirthday;

const dayOfBirth = myBirthday.getDate();
const monthOfBirth = myBirthday.getMonth() + 1;
const yearOfBirth = myBirthday.getFullYear();
