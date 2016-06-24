class UserService {
  constructor($q, $firebaseAuth, $http,) {
   this._$q = $q;
   this._$http = $http;

   //old ref
  //  this.ref = new Firebase("https://recipeezy-2a342.firebaseio.com");

   //new ref
   var config = {
  apiKey: "AIzaSyAJt8tb_M3T1ZaHO15ezhM59n4-ZHvexfs",
  authDomain: "recipeezy-2a342.firebaseapp.com",
  databaseURL: "https://recipeezy-2a342.firebaseio.com"
};

firebase.initializeApp(config);

var rootRef = firebase.database().ref();


   //auth
   this.auth = $firebaseAuth(this.ref);
   console.log('user service');
 }

   isLoggedIn() {
    return this.auth.$requireAuth();
  }

  logout() {
    this.auth.$unauth();
  }

  login(user) {
    return new this._$q((resolve, reject) => {
      this.auth.$signInWithEmailAndPassword(user)
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

  create(email, password) {
    return new this._$q((resolve, reject) => {
      this.auth.$createUserWithEmailAndPassword(email, password)
        .then((response) => {
          this.user = response;
          return this.auth.$signInWithEmailAndPassword(email, password);
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
