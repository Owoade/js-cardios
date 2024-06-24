import { EditorCommand } from "./commands/type";

export class Editor {
    
    constructor(
        public state: string = '',
        private active_command: EditorCommand | null = null,
        private history: EditorCommand[]
    ){}

    set set_command( command: EditorCommand ){
        this.active_command = command;
    }

    exec(){
        this.history.push(this.active_command!);
        return this.active_command?.execute();
    }

    undo(){
        const last_command = this.history.pop();
        return last_command?.undo();
    }
    
}