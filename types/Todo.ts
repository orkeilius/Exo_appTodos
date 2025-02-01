class Todo {
    pos: number;
    text: string;
    status: boolean;

    constructor(pos:number,text:string,status:boolean) {
        this.pos = pos;
        this.text = text;
        this.status = status;
    }
}

export default Todo;