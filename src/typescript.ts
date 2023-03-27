enum Methods{
        add = 0,
        sub = 1
    };

interface IExample<T>{
    type:string;
    value: T;
    isEmpty: boolean;
}

export class Console{    
    
    consoleMy(){
        console.log('Hello World!');
        const one:Methods = Methods.add;
        console.log(one);
    }

    calculate(method:Methods,left:number,right:number):number{
        switch(method){
            case Methods.add:return left + right;
            case Methods.sub:return left - right;
        }
    }

    omittedObject:Omit<IExample<number>, "isEmpty"> = {//Omit<> - убирает обозначенные элементы интерфейса
        type:'asd',
        value:123,
    };
    
    picked:Pick<IExample<string>,'value' | 'isEmpty'> = {//Pick - для работы с обозначенным в условии элементом
        value:'fghjasdhg',
        isEmpty: true        
    };
    /*const partial:Partial<IExample<object>> = {//делает все поля не обязательными
        
    };*/
}

export class Constructor{
    field:number = 123;
    public mistake:Array<number> = [];
    public right = [] as Array<number>;
    constructor(arg:number){
        this.field = arg;
        this.mistake.push(arg);
        this.right.push(arg * -1);
    }
    method():number{
        return this.field;
    }
    getMistake(){
        return this.mistake;
    }
    getRight(){
        return this.right;
    }
    addMistake(arg:number){
        this.mistake.push(arg);
        this.right.push(arg * -1);
    }
}

export class Child extends Constructor{
    public str:string = 'never';
    constructor(arg:number, str:string){
        super(arg);
        this.str = str;
    }
    public methodChild(){        
        const temp = {
            a: this.field,
            b: this.str,
        }
        return temp;
    }
    method(): number {
        return super.method() * 10;
    }
}