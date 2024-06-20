import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    Fullname="Salesforce Developer "
   
    name="Sumit"
    title="Developer"

    chnageHandler(event){
        this.title=event.target.value
    }
}