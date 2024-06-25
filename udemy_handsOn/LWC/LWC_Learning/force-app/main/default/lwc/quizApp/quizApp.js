import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}  //for storing answers
    correctAnswers=0 //to show number of correct answers
    isSubmitted=0   // flag used to show the result 
    // array of questions ans answers 
    myQuestions=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop ?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop" 
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which one of the following is invalid file in LWC ? ",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },

        {
            id:"Question3",
            question:"Which one of the following is not a directive ?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }

    ]
    
//used for the disabling the submit button 
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
//for  applying Dyanamic styling to our result  
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }

    changeHandler(event){
        console.log("name: " ,event.target.name)
        console.log("value : ", event.target.value)
        const {name,value}=event.target
        this.selected={...this.selected,[name]:value}

    }

    submitHandler(event){
        event.preventDefault()
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers=correct.length
        console.log("   this.correctAnswers",this.correctAnswers)
        this.isSubmitted=true
    }

    resetHandler(event){
        this.selected={}
        this.correctAnswers=0
    }
}