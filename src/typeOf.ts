
export class TypeDev<T>{
    private mistake = [] as Array<T>;

    constructor(arg:T){
        this.mistake.push(arg);
    }

    addMistake(arg:T){
        this.mistake.push(arg);
    }    
}

