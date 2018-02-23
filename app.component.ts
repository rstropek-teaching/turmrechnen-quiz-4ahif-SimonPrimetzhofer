import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  startValue:number = 5;
  height:number = 4;
  result:string[][] = [];

  //Clear array and call tower logic
  calculate (){

    //Clear array for every click on Calculate
    this.clearArray();

    //Get result of multiplication to start with division
    const multiplyResult=this.towerLogic(this.startValue,1);
    
    //start with multiplication result
    this.towerLogic(multiplyResult,0);

  }

  //Operation = 1 ... multiply | Operation = 0 ... divide
  towerLogic(startValue:number,operation:number) :number {
    
    // //Skip multiplication by 1 and start at 2
    let currentHeight=2;
    
    //Start as lastResult with startValue
    let lastResult=startValue;

    //While the current step is lower or equal than the maximum height
    while(currentHeight<=this.height){

      //Calculate the currentResult depending on the operation ... simple maths
      let currentResult=lastResult*(operation==1?currentHeight : 1/currentHeight);
      
      //Push result to array
      let currentResultString:string[]=[];
      currentResultString.push(lastResult.toString());
      currentResultString.push(operation==1?" * ":" / ");
      currentResultString.push(currentHeight.toString());
      currentResultString.push(currentResult.toString());
      this.result.push(currentResultString);
      
      //The result for the next operation is the current result
      lastResult=currentResult;
      
      //Increment current height for next step
      currentHeight++;

    }
    //Return last result
    return lastResult;

  }

  //Clears the array consisting of all calculation results from the last execution
  clearArray(){
    this.result = [];
  }

}
