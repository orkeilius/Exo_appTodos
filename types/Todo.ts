class Todo {
    pos: number | null = null;
    text: string;
    status: Status;
    id: number|null = null;

    constructor(text:string,status:Status) {
        this.text = text;
        this.status = status;
    }
}

type Status = 'done'|'inProgress'|'todo';
export default Todo;