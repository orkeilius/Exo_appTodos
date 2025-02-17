class Todo {
    pos: number | null = null;
    title: string;
    text: string | null = null;
    status: Status;
    id: number|null = null;

    constructor(text:string,status:Status) {
        this.title = text;
        this.status = status;
        this.text = null
    }
}

type Status = 'done'|'inProgress'|'todo';
export default Todo;
export {Todo,Status}