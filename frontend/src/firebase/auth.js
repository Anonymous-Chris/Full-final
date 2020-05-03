import fire from'./firebase'


class Auth{
constructor(){
this.authenticated=false
}

login(){
    fire.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)
          this.authenticated = true
          console.log(this.authenticated)
        } else {
        console.log('No user is signed in.')
        this.authenticated = false
        }
      });
}

isAuthenticated(){
    return this.authenticated
    
}



}

export default new Auth()