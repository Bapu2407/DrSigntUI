import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

import { Config } from '../config';
@Injectable()
export class DataAccess {
  data: any;
  //apiUrl = 'http://'+Config.productionHost//'http://'+Config.host+':'+Config.port;
  apiUrl = 'http://' + Config.host + ':' + Config.port;

  headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    //'Access-Control-Allow-Credentials': true ,
    'Content-Type': 'application/json'
  }

  constructor(public http: HttpClient) {
    if (Config.forProduction) {
      this.apiUrl = Config.productionHost
    }
    //console.log('Hello Restapi Provider = '+this.apiUrl);
  }


  fetchAttendantList(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    //  var data ={"jinishKey":jinishKey}
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/attendant-list', data, { headers: Config.headers })
        //.map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** patient response  ===== **"+JSON.stringify(response))
          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside attendant-list "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });
  }
  fetchPatients(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    //  var data ={"jinishKey":jinishKey}
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchPatients', data, { headers: Config.headers })
        //.map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** patient response  ===== **"+JSON.stringify(response))
          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });
  }
  fetchDoctors(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDoctors', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchUsers(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchUsers', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  editUser(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/editUser', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          ////console.log("******  response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  addUser(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addUser', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addDoctor(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/signup', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }




  fetchAllmonthsAppointment() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-allmonths-appointment', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchUsersCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchUsersCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchUsersCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }

  fetchDoctorsCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDoctorsCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchDoctorsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }

  fetchPatientsCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchPatientsCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** Patient response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchPatientsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }
  fetchMonthInvoices(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    // //console.log("**data   ===== **"+JSON.stringify(data))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMonthInvoices', data, { headers: Config.headers })
        .subscribe(response => {

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchAllPatients(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-patients-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchAllLocations(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/all-practice-locations-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAllMedicines(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-medicines-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          ////console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            // //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchAllOrdersById(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-orders-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchAllDoctors(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-doctors-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAll() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/all-practice-locations-autocom', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchDaysApointment() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/view-todays-appointment', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchPatientById(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchPatientDetails', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchLocationById(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/practice-location-byid', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside practice-location "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  fetchDoctrById(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDoctorDetails', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  updatePatient(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateProfile', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });
  }

  updateDoctor(data) {
    var headersVal: any = new Headers({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, DELETE', 'Access-Control-Allow-Headers': 'X-Requested-With,content-type', 'Content-Type': 'application/json' })

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateDoctor', data, { headers: headersVal })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** doctor response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  loginUser(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/login-user', data, { headers: Config.headers })
        .subscribe(response => {

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside loginUser "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  customLoginUser(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
    let customUrl: string = "http://101.53.155.156/auth/login"

    return new Promise((resolve, reject) => {
      this.http.post(customUrl, data, { headers: Config.headers })
        .subscribe(response => {
          let data = response['data']
          resolve(data);
          // console.log("inside response " + JSON.stringify(response))
          /*   if (response && response['status'] == true) {
               let data = response['data']
               //console.log("inside loginUser "+data)
               resolve(data);
             } else if (response && response['status'] == false) {
               reject(response)
             }
   */
        });
    });

  }

  secondAPIcall(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
    let customUrl: string = "http://101.53.155.156/api/local/charges/fetch/4434ecb2-91c9-4daf-b597-83b6b4df58a9/Import"


    Config.headers["Authorization"] = "BslogiKey " + Config.jwtValue
    Config.headers["aId"] = "86f15c81-66d3-4237-bb29-6c4e7a9daacf"

    return new Promise((resolve, reject) => {
      this.http.get(customUrl, { headers: Config.headers })
        .subscribe(response => {
          let data = response['data']
          resolve(data);
          // console.log("inside response " + JSON.stringify(response))
          /*   if (response && response['status'] == true) {
               let data = response['data']
               //console.log("inside loginUser "+data)
               resolve(data);
             } else if (response && response['status'] == false) {
               reject(response)
             }
   */
        });
    });

  }




  validateCoupon(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-coupon-by-code', data, { headers: Config.headers })
        .subscribe(response => {

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside loginUser "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAppointmentsCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchAppointmentsCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** appointment response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchAppointmentsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }
  fetchAppointments(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchAppointments', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** appointment response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  addAppointment(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/raise-appointment-request', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  updateAppointment(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/update-appointment', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchLocationsCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchLocationsCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** location response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchLocationsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }
  fetchLocations(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchLocations', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** location response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  addLocation(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/practice-location-add', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  updateLocation(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/practice-location-edit', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchCustomers(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCustomers', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** customer response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcustomers "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addCustomer(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addCustomer', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** customer response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcustomers "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchCustomersCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCustomersCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** customer response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchCustomersCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllCustomers(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-customers-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** customer response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }





  fetchAllPinCode(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-pincode-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          console.log("****** customer response  ===== **" + JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            console.log("inside fetch-pincode " + JSON.stringify(data))
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  updateCustomer(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateCustomer', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** customer response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchcustomers "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchOrders(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchOrders', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchOrdersByFilters(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchOrdersByFilters', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchOrdersByFilterCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchOrdersByFilterCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['data'] && response['data']['recordCount']) {
            let data = response['data']['recordCount']
            //console.log("inside fetchOrdersCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }
          resolve(0)

        });
    });
  }
  addPharmaOrder(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addPharmaOrder', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchPharmaOrdersByFilters(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchPharmaOrdersByFilters', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchPharmaOrdersByFilterCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchPharmaOrdersByFilterCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['data'] && response['data']['recordCount']) {
            let data = response['data']['recordCount']
            //console.log("inside fetchOrdersCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }
          resolve(0)

        });
    });
  }
  addOrder(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addOrder', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addOrderPrescription(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
    ////console.log("data == "+JSON.stringify(this.userGroup))  
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/upload-order-prescription', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchOrdersCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchOrdersCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchOrdersCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllOrders(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-orders-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAllOrderPrescriptions(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-order-prescriptions-for-orders', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAllCustomersNotByName() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-customers', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** customer response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });
  }


  updatePharmaOrder(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updatePharmaOrder', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** order response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  updateOrder(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateOrder', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** order response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchorders "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }




  addInvoice(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/invoice-create', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoice response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoices "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  updateInvoice(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/invoice-update', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** invoice response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchinvoices "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }




  fetchInvoicesCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoicesCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** invoice response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchInvoicesCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }
  fetchInvoices(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoices', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoice response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchPatients "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchMedicines(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMedicines', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addMedicine(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addMedicine', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  insertBulkMedicine(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/insertBulkMedicine', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchMedicineCategory() {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMedicineCategory', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** medicine response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });
  }
  fetchMedicinesCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMedicinesCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** medicine response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchMedicinesCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }
  /*
  
  fetchAllMedicines(data){
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
  
  return new Promise((resolve,reject) => {
  this.http.post(this.apiUrl+'/api/fetch-all-medicines-autocom',data,{headers : Config.headers})
   // .map(res => res.json()) 
    .subscribe(response => {
                  
    //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))
     
      if(response && response['status'] == true){                
        let data = response['data']
        //console.log("inside fetch-allmonths-appointment "+data)
        resolve(data);
      }else if(response && response['status'] == false){                
        reject(response)
      }
  
    });
  });
  
  }
  */
  updateMedicine(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateMedicine', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** medicine response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchCategorys(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCategorys', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** category response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcategorys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addCategory(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addCategory', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** category response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcategorys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchCategorysCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCategorysCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** category response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchCategorysCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllCategorys(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-categorys-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** category response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  updateCategory(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateMedicineCategory', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** category response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchcategorys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchDeliverys(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDeliverys', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdeliverys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addDelivery(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addDeliverys', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdeliverys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchDeliverysCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDeliverysCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** delivery response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchDeliverysCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllDeliverys(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-deliverys-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  updateDelivery(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateDeliverys', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** delivery response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchdeliverys "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchCoupons(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCoupons', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcoupons "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addCoupon(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addCoupons', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchcoupons "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchCouponsCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchCouponsCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** coupon response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchCouponsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllCoupons(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-coupons-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  updateCoupon(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateCoupons', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** coupon response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchcoupons "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchChargess(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchServiceChargess', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** charges response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchchargess "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addCharges(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addCharges', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** charges response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchchargess "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchChargessCount() {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchServiceChargessCount', { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** charges response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchChargessCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllChargess(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-chargess-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** charges response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  updateCharges(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateMedicineCharges', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** charges response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchchargess "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchDiscounts(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDiscounts', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdiscounts "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchDiscountsByFilters(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDiscountsByFilters', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdiscounts "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchDiscountsByFilterCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDiscountsByFilterCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['data'] && response['data']['recordCount']) {
            let data = response['data']['recordCount']
            //console.log("inside fetchDiscountsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }
          resolve(0)

        });
    });
  }

  addDiscount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addDiscount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdiscounts "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addDiscountPrescription(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
    ////console.log("data == "+JSON.stringify(this.userGroup))  
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/upload-discount-prescription', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdiscounts "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchDiscountsCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDiscountsCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchDiscountsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllDiscounts(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-discounts-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** discount response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  updateDiscount(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateDiscount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** discount response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchdiscounts "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchInvoicecrms(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoicecrms', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  sendOTP(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/send-otp-dm', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchInvoicecrmsByFilters(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoicecrmsByFilters', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchInvoicecrmsByFilterCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoicecrmsByFilterCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['data'] && response['data']['recordCount']) {
            let data = response['data']['recordCount']
            //console.log("inside fetchInvoicecrmsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }
          resolve(0)

        });
    });
  }

  addInvoicecrm(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addInvoicecrm', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addInvoicecrmPrescription(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
    ////console.log("data == "+JSON.stringify(this.userGroup))  
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/upload-invoicecrm-prescription', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchInvoicecrmsCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchInvoicecrmsCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchInvoicecrmsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllInvoicecrms(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-invoicecrms-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAllInvoicecrmPrescriptions(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-invoicecrm-prescriptions-for-invoicecrms', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  updateInvoicecrm(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateInvoicecrm', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchinvoicecrms "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }



  fetchMedicinesByFilters(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMedicinesByFilters', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchmedicines "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  fetchMedicinesByFilterCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchMedicinesByFilterCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** order response  ===== **"+JSON.stringify(response))

          if (response && response['data'] && response['data']['recordCount']) {
            let data = response['data']['recordCount']
            //console.log("inside fetchMedicinesCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }
          resolve(0)

        });
    });
  }



  fetchDigitalmargetings(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDigitalmargeting', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdigitalmargetings "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  addDigitalmargeting(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    ////console.log("data == "+JSON.stringify(this.userGroup))

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/addDigitalmarketing', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdigitalmargetings "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }
  addDigitalmargetingPrescription(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
    ////console.log("data == "+JSON.stringify(this.userGroup))  
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/upload-digitalmargeting-prescription', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetchdigitalmargetings "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchDigitalmargetingsCount(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetchDigitalmarketingCount', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response) {
            let data = response['data']['recordCount']
            //console.log("inside fetchDigitalmargetingsCount "+data)
            resolve(data);
          } else if (!response) {
            reject(response)
          }

        });
    });
  }


  fetchAllDigitalmargetings(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-digitalmargetings-autocom', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

  fetchAllDigitalmargetingPrescriptions(data) {
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/fetch-all-digitalmargeting-prescriptions-for-digitalmargetings', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {

          //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))

          if (response && response['status'] == true) {
            let data = response['data']
            //console.log("inside fetch-allmonths-appointment "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }


  updateDigitalmargeting(data) {
    // var headersVal:any = this.getCustomHeaders()
    //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/updateDigitalmargeting', data, { headers: Config.headers })
        // .map(res => res.json()) 
        .subscribe(response => {
          //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))         
          if (response && response['status'] == true) {
            let data = response['data']
            //  //console.log("inside fetchdigitalmargetings "+data)
            resolve(data);
          } else if (response && response['status'] == false) {
            reject(response)
          }

        });
    });

  }

}