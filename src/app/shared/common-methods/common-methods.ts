import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

/*
  Generated class for the CommonMethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonService {

  constructor(
//    public http: HttpClient,
    private afdb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    console.log('Hello CommonMethodProvider Provider');
  }

  setRideSatus():any {
    let statusRef = firebase.database().ref('/ride-status');
    statusRef.on('value', (status)=>{
      let approved  =  status.val().approved;
      let pending  =  status.val().pending;
    })
  }
  // Converting Time from 24-hour format to 12-hour format 
  convertStr(timeString) {
    try {
      var hourEnd = timeString.indexOf(":");
      var H = +timeString.substr(0, hourEnd);
      var h = H % 12 || 12;
      var ampm = H < 12 ? "AM" : "PM";
      timeString = h + timeString.substr(hourEnd, 3) + ampm;
      return timeString;
    }
    catch(error) {
      console.log('Error', error);
    }
  }

  // Ride list filters
  
}
