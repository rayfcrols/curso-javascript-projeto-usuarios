class User {
  constructor(name, gender, birth, email, country, password, photo, admin) {
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._email = email;
    this._country = country;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._register = new Date();
  }

  get register() {
    //return new Date();
    return this._register;
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get email() {
    return this._email;
  }

  get country() {
    return this._country;
  }

  get password() {
    return this._password;
  }

  get photo() {
    return this._photo;
  }

  get admin() {
    return this._admin;
  }

  set photo(value) {
    this._photo = value;
  }
}
