import { EditorCommand } from "./type";

export class BoldenTextCommand implements EditorCommand {

    constructor(
        private state: string
    ){}

    execute() {
        console.log("bolding the text", this.state)
    }

    undo() {
        console.log("undoing bold command on", this.state)
    }

}