
const User = function({userName, email, age, colorFavorite, remember}){
    this.userName = userName;
    this.email = email;
    this.age = age;
    this.colorFavorite = colorFavorite;
    this.remember = remember;
}
module.exports = User