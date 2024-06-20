import Country from '@salesforce/schema/Asset.Country';
import { LightningElement ,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    Fullname="Salesforce Developer "
   
    name="Sumit"
    title="Developer"

    chnageHandler(event){
        this.title=event.target.value
    }
// // With @track 
//     @track address={
//         city:"Kolhapur",
//         pincode:416205,
//         Country:"India"
//     }
//     changeCity(event){
//         this.address.city=event.target.value
//     }


//Standard Practice to follow 
address={
    city:"Pune",
    State:"maharashtra",
    Country:"India"
}

changeCity(event){
    this.address={...this.address,"city":event.target.value}
}

/** getter in LWC */
users=["Sushant","Varad","Sumit"]

num1=10
num2=20

get firstUser(){
    return this.users[0].toUpperCase()
}

get multiply(){
    return this.num1*this.num2
}

}