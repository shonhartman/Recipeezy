class RegisterController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;
    this.newUser = this._UserService.new();
  }

  register() {
    this._UserService
    .create(this.newUser.email, this.newUser.password)
    .then((response) => {
      // this._$state.go("profile");
      console.log("promise");
    })
    .catch((error) => {
      console.error(error);
    })
  }
}

export default RegisterController;
