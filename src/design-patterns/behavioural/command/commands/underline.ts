import { EditorCommand } from "./type";

export class UnderlineTextCommand implements EditorCommand {

    constructor(
        private state: string
    ){}

    
    execute() {
        console.log("underlining the text", this.state)
    }

    undo() {
        console.log("undoing underlining command on", this.state)
    }

}