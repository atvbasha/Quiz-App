import { Injectable } from '@angular/core';
declare const gapi: any;
@Injectable({
  providedIn: 'root'
})
export class GoogleSignInService {

  constructor() { }

  public authenticateUser(clientId: any) {
    alert(clientId)
    let auth2 : any;
    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({client_id: clientId, scope: 'profile email'});
      //Login button reference
      let element : any = document.getElementById('google-login-button');
      auth2.attachClickHandler(element, {}, function (googleUser: any) {
        //Getting profile object
        let profile = googleUser.getBasicProfile();
        //Setting data to localstorage.
        localStorage.setItem('token', googleUser.getAuthResponse().id_token);
        localStorage.setItem('image', profile.getImageUrl());
        localStorage.setItem('name', profile.getName());
        localStorage.setItem('email', profile.getEmail());

        console.log("User profile : ", googleUser)
        // Alternatively you can create an object and return it like that - result = {
        // token: googleUser.getAuthResponse().id_token, name: profile.getName(), image:
        // profile.getImageUrl(), email: profile.getEmail(), };
      }, function (error: any) {
        alert(JSON.stringify(error, undefined, 2));
      });
    });
  }
}
