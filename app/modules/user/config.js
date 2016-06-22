function config($stateProvider) {
  $stateProvider
  .state("register", {
    url:"/register",
    controller: "RegisterController as registerCtrl",
    template: require("./views/register.html")
  })

}

export default config;
