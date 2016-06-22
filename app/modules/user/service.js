class UserService {
  constructor($q, $firebaseAuth, $http) {
   this._$q = $q;
   this._$http = $http;

   this.ref = new Firebase("https://recipeezy.firebaseio.com/");
   this.auth = $firebaseAuth(this.ref);
 }

   isLoggedIn() {
    return this.auth.$requireAuth();
  }

  logout() {
    this.auth.$unauth();
  }

  login(user) {
    return new this._$q((resolve, reject) => {
      this.auth.$authWithPassword(user)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
          reject(error);
        });
    });
  }

  new() {
    return {
      email: "",
      password: ""
    }
  }

  create(user) {
    return new this._$q((resolve, reject) => {
      this.auth.$createUser(user)
        .then((response) => {
          this.user = response;
          return this.auth.$authWithPassword(user);
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
    });
  }
}



export default UserService;
