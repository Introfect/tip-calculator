
import { splitConstraints } from "../components/TipCalculatorModal";

export default function splitConstraintsReducer(split:splitConstraints,action:{ type: string; value:number}) {
    switch (action.type) {
        case 'billChange': {
          return {
            ...split,
            bill:action.value

          };
        }
        case'tipChange':{
          console.log(action.value)
            return{
                ...split,
                tipPercent:action.value

            }
        }
        case 'peopleChange':{
          return{
            ...split,
            people:action.value

            
          }
        }
        case "reset":{
          return{
            bill:0,
            tipPercent:0,
            people:1
          }
        }
        default:{
            throw new Error("case not defined")
        }

}
}