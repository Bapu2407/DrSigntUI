import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class Config {


    static nameRegex = "[0-9a-zA-Z -@./#&+]*";//"^[a-zA-Z]\w{3,14}$";//"^[\w\s]*$";//""/^[-@./#&+\w\s]*$/"
    static host: any = "localhost"
    static jwtValue: string = "abc"
    static RECORDSIZE: any = 50
    static productionHost: any = "http://drsignet-prod-alb-957410967.ap-south-1.elb.amazonaws.com:8181"//"15.206.60.228"
    static forProduction: boolean = false
    public static showSideBar: boolean = false
    public static headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, DELETE,GET', 'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin', 'Content-Type': 'application/json' })
    //static host:any = "127.0.0.1"
    //static host:any = "http://127.0.0.1:8078"
    static port: any = "5000"
    static states: any = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]

    static xcelPredefinedHeaders: any = [
        { fName: "name", fValue: "Name" },
        { fName: "mrp", fValue: "MRP" },
        { fName: "b2bPrice", fValue: "B2B Price" },
        { fName: "gst", fValue: "GST" },
        { fName: "hsnCode", fValue: "HSN CODE" },
        { fName: "otherTax", fValue: "Other Tax" },
        { fName: "discounts", fValue: "Discounts" },
        { fName: "medicineType", fValue: "Type of Commodity" },
        { fName: "category", fValue: "Category" }
    ]

    static dateDelimitor = "-"

    /*commenting the below 2 lines change made to the following paths on March 18 2020*/

    //public static headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-this.headers: this.headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  })

    //	static catIagePrefix:any="http://"+Config.host+":"+Config.port+"/images/cat/"
    //static proIagePrefix:any="http://"+Config.host+":"+Config.port+"/images/pro/"

    static imagePrefix: any = "http://" + Config.host + ":" + Config.port + "/public/images"

    //static imagePrefix:any="http://"+Config.host+"/images/"
    //	static proIagePrefix:any="http://"+Config.host+"/images/pro/"

}


