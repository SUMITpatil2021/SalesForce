import Company from '@salesforce/schema/Lead.Company';
import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=["Maruti","Tata", "KIA","Rolls-Royce", "Porche","Tesla"]

    ceoList=[
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Amezon",
            name:"Joes Bezos"
        },
        {
            id:3,
            company:"Tesla",
            name:"Elon Musk"
        },
        {
            id:4,
            company:"Microsoft",
            name:"Team Cook"
        }
    ]
}