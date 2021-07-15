import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../router.animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { Observable } from 'rxjs';
import *  as moment from 'moment';
import { Router } from '@angular/router';
//import { map } from 'rxjs/operators';
// import { ChartsComponent } from '../charts/charts.component';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DataAccess } from 'src/app/services/data-access';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public loading : boolean = true;
    userId: string;       
    
    firstDayOfMonth:any 
    lastDayOfMonth:any
    public totalUser: number = 0;
    public openinvoice: number = 0;
    public totalDist: number = 0;
    public totalinvoice: number = 0;
    public distCoveredByDriver = [];
    public currentDate: string = new Date().toISOString().substr(8,2);
    public currentMonth: string = new Date().toISOString();
    // public currentMonth: string = new Date().toISOString().substr(6,1);
    public currentYear: string = new Date().toISOString().substr(0,4);
    
    public today : Date = new Date();
    public last7Days:Date = new Date(new Date().setDate(new Date().getDate() - 7));
    public dateBeforeWeek = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().substr(0,10);

    public beginningDayOfMonth = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().substr(0,10);

    public allDates = [];
    public labelDays = [];
    public monthDayslabel = [];
    monthDays = []
    public labelStatus = [];
    public orderedByDate = [];
    public orderedByStatus = [];
    appointmentList = []
    public arrangedOrderedByDate = [];

    public costArrangedOrderedByDate = [];
    public totalCost:number = 0;
    public totalDataByDate = [];
    public totalDataByStatus = [];
    public totalStatusByDate = [];
    public ArrangedTotalDistanceCoveredByDate = [];

    // invoice Chart
    public invoiceChartType: string = 'line';
    public invoiceChartLegend: boolean = false;
    public invoiceChartLabels: Array<any> = [];
    public invoiceChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public invoiceChartData: any[] = [
        { data: []}
    ];
    //monthList:any =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    // bar chart
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;
    public barChartLabels: Array<any> = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartData: any[] = [
        { data: []}
    ];
        
    // lineChart
    public lineChartData: Array<any> = [
        { data: [] }];
    public lineChartLabels: Array<any> = [];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [{
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
    
    public invoiceChartColors: Array<any> = [{
        // green
        backgroundColor: 'rgba(83, 154, 125, 1)',
        borderColor: 'rgba(85, 101, 138, 1)',
        pointBackgroundColor: 'rgba(85, 101, 138, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.4)'
    }];

    
    public lineChartLegend: boolean = false;
    public lineChartType: string = 'line';

    constructor(
public router: Router,
        public toastr: ToastrManager,
        public dataService: DataAccess
        
    ) {
/*
        if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
        }
  */      
        this.getDaysOfMonth()
        this.getDaysInMonth(this.currentMonth, this.currentYear);
    
        // setting the month if its later than september
        if((new Date().getMonth()+1)>=10) {
            this.currentMonth = new Date().toISOString().substr(5,2);
        }
        else {
            this.currentMonth = new Date().toISOString().substr(6,1);
        }                        
        this.invoiceChartLabels = this.monthDayslabel;                        
        this.fetchAllData()

    }
    async fetchAllData(){
        
        await this.fetchDaysApointment()
        await this.fetchMonthInvoices()
        await this.fetchAllmonthsAppointment()

        this.loading = false;
    }
    fetchMonthInvoices(){
        try {         
            
            let firstDayOfMonth = moment(this.firstDayOfMonth).format('DD-MM-YYYY');
            let lastDayOfMonth = moment(this.lastDayOfMonth).format('DD-MM-YYYY');
           let dateRange = {fromDate:firstDayOfMonth,toDate:lastDayOfMonth,allDates:this.monthDays}

         //  console.log("****** Date range   ===== **"+JSON.stringify(dateRange))
                    
            return new Promise((resolve,reject) => {

                    this.dataService.fetchMonthInvoices(dateRange).then((result:[]) => {
            
                        let data = result.map(element => element)

                        this.invoiceChartData = [
                        { data: data, label: 'Monthly Invoices' }
                        ];
                         console.log("****** invoice data   ===== **"+JSON.stringify(data))
                    
                        resolve(data)                 
                
                    }, (err) => {
                    //this.loading = false;
                    resolve(err)
                    console.log(err);
                    });

            });

         
           
        }
        catch(error) {
            console.log('Error', error);
        }
    }
    fetchDaysApointment(){
        try {
            
            return new Promise((resolve,reject) => {
               
               
                    
                        this.dataService.fetchDaysApointment().then((result:[]) => {

                            this.appointmentList = result.map(element => element)
        
                       // console.log("****** this.appointmentList   ===== **"+JSON.stringify(this.appointmentList))
                            resolve(this.appointmentList)                 
                    
                        }, (err) => {
                            this.appointmentList = []
                        //this.loading = false;
                        resolve(err)
                        console.log(err);
                        });

                

              });

         
           
        }
        catch(error) {
            console.log('Error', error);
        }
    }
    fetchAllmonthsAppointment(){
        try {
            return new Promise((resolve,reject) => {
               
                setTimeout(() => {
                    this.dataService.fetchAllmonthsAppointment().then((result:[]) => {
            
                        let data = result.map(element => element)

                        this.barChartData = [
                        { data: data, label: 'Monthly Appointments' }
                        ];
                         console.log("****** this.barChartData   ===== **"+JSON.stringify(this.barChartData))
                    
                        resolve(data)                 
                
                    }, (err) => {
                    //this.loading = false;
                    resolve(err)
                    console.log(err);
                    });
                }, 500);
              

              });

         
           
        }
        catch(error) {
            console.log('Error', error);
        }
    }

    convertToHumanDate(dbDate){
        return  moment(dbDate).format('DD-MMM-YYYY');
    }
    ngOnInit() {
       
    }

    getGraphValues() {
       
    }

    basePath(basePath: any) {
        throw new Error("Method not implemented.");
    }

    
    // Getting all days of the current month

    getDaysOfMonth(){
      
        let thisday: Date = new Date(this.beginningDayOfMonth);
        this.firstDayOfMonth = new Date(this.beginningDayOfMonth);
        this.allDates = [];
        this.labelDays = [];
        let nextDay
        let daysInMonth = moment().daysInMonth();
        for (let i: number = daysInMonth; i>0; i--) {
            nextDay = new Date(thisday.setDate(thisday.getDate() + 1));

          //  console.log('nextDay.toISOString() == ', nextDay.toISOString());
          // console.log('nextDay.toISOString() .substr(0,10) == ', nextDay.toISOString().substr(0,10));

            //this.monthDayslabel.push(nextDay.toISOString().substr(0,10));
            this.monthDayslabel.push(moment(nextDay).format("DD-MM-YY"));
            this.monthDays.push(moment(nextDay).format("DD-MM-YYYY"));
            
            this.lastDayOfMonth = nextDay    
        }
        
        return this.monthDayslabel;
    }
    getDaysInMonth(month, year) {
        let thisday: Date = new Date(this.dateBeforeWeek);
        this.allDates = [];
        this.labelDays = [];
        for (let i: number = 7; i>0; i--) {
            let nextDay = new Date(thisday.setDate(thisday.getDate() + 1));

          //  console.log('nextDay.toISOString() == ', nextDay.toISOString());
          //  console.log('nextDay.toISOString() .substr(0,10) == ', nextDay.toISOString().substr(0,10));

            this.labelDays.push(nextDay.toISOString().substr(0,10));
            this.allDates.push({
                date: nextDay.toISOString().substr(0,10)
            });
        }
        return this.labelDays;
    }
    // Reduce the array by dates
    reduceByDate(objectArray, property, val1, val2, val3) {
        return objectArray.reduce((acc, obj)=> {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
                acc[key].push(obj);
            }
            else {
                obj[val1] = obj[val1]+parseFloat(acc[key][0][val1]);
                obj[val2] = obj[val2]+parseFloat(acc[key][0][val2]);
                obj[val3] = obj[val3]+parseFloat(acc[key][0][val3]);
                acc[key][0] = obj;
            }
            this.orderedByDate = acc;
            // this.distCoveredByDriver = acc;
            return acc;
        }, {});
    }

    // Formated data
    formatedData(orderedByDate) {
        let arrangedOrderedByDate = [];
        for (let property in orderedByDate) {
            arrangedOrderedByDate.push(orderedByDate[property][0]);
        }
        this.arrangedOrderedByDate = arrangedOrderedByDate;
        return arrangedOrderedByDate;
    }

    getAllDatesRecord(dates, completedRidesDate) {
        this.totalDist = 0;
        this.totalCost = 0;
        this.totalinvoice = 0;
        for (let i = 0; i < dates.length; i++) {
            dates[i].distanceCovered = 0;
            dates[i].cost = 0;
            dates[i].invoice = 0;
            for (let j = 0; j < completedRidesDate.length; j++) {
                if (dates[i].date == completedRidesDate[j].date) {
                    dates[i].distanceCovered = completedRidesDate[j].distanceCovered;
                    dates[i].cost = completedRidesDate[j].cost;
                    dates[i].invoice = completedRidesDate[j].invoice;
                }
            }
            this.totalDataByDate = dates;
            this.totalDist += dates[i].distanceCovered;
            this.totalCost += dates[i].cost;
            this.totalinvoice += dates[i].invoice;
        }
        this.totalDist = parseFloat(this.totalDist.toFixed(2));
        return dates;
    }

    getValuesForAllDates(getAllDatesRecord, value) {
        let valuesForAllDates = [];
        for(let i=0; i<getAllDatesRecord.length; i++) {
            valuesForAllDates.push(getAllDatesRecord[i][value])
        }
        return valuesForAllDates;
    }
    
    // /////////
    reduceStatusByDate(objectArray, property) {
        return objectArray.reduce((acc, obj)=> {
            let key = obj[property];
            let count = 1;
            if (!acc[key]) {
                acc[key] = [];
                obj.count = 1
                acc[key].push(obj);
            }
            else {
                obj.count = count+1;
                acc[key][0] = obj;
            }
            this.orderedByStatus = acc;
            return acc;
        }, {});
    }
    
    getAllStatusRecord(statusList, rides) {
        for (let i = 0; i < statusList.length; i++) {
            statusList[i].count = 0;
            for (let j = 0; j < rides.length; j++) {
                if (statusList[i].status == rides[j].status) {
                    statusList[i].count = rides[j].count;
                }
            }
            this.totalDataByStatus = statusList;
        }
        return statusList;
    }

    getStatusKey(value) {
        var finalVal;
        
        return finalVal;
    }

    
    convertStatusLabel(labelStatus) {
        var finalVal;
        
    }

   

    getTotalUsers() {
        let count: number = 0;
       
    }

    getTodaysOpenRides() {
        let count: number = 0;
        let current = this.today.toISOString().substr(0,10);
       
    }
}