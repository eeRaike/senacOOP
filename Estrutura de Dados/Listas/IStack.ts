export interface IStacke{

    push(item: any):void
    pop():any | null;
    peek():any | null;
    isEmpty(): boolean;
    size():number;
}