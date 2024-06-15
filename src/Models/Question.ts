import { Header } from "./Header";
import { Statement } from "./Statement";
import{Option} from "./Option";

export class Question{
    header:Header
    statement:Statement
    options:Option[]
    tip:string
    id:Number
    correct:boolean

constructor(header:Header,statement:Statement,options:Option[],tip:string,id:number,correct:boolean){

this.header = header
this.statement = statement
this.options=options
this.tip = tip
this.id = id
this.correct = correct
}



}