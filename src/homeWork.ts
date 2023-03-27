
//задача 1
export class HWOne{    
    concat(arg1:string,arg2:string):string{
        return arg1 + ' ' + arg2;
    }

}
//задача 2
interface HomeTask<T>{//comment any
    howDolt:T;
    simeArray:Array<any>;
    withData:Array<Omit<HomeTask<T>,'withData'>>;
}

export class MyHomeTask implements HomeTask<string>{
    howDolt: string = 'I Do It Well';
    simeArray: any[] = ["string one", 42];
    withData: Omit<HomeTask<string>, "withData">[] = [{howDolt:"I Do It Well", simeArray:["string one",23]}];

}
//задача 3
interface MyArray<T>{
        reduce(arg0: (acc: T, value: T) => T, initialValue:T):T;
        [N:number]:T;
}

export class MyMyArray implements MyArray<number>{
    [N: number]: number;
    reduce(arg0: (acc: number,
        value: number) => number, initialValue: number): number {
            throw new Error("Method not implemented.");
    }
    
}
//задача 4
interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}


type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

let myPart:MyPartial<IHomeTask> = {
    externalData:{
        value:'win'        
    }
}


/*const TTTT:One = {
    externalData:{
        basis:7,
        value:'sss'
    }
}

const TempPP: MyPartial<Only>|One = {
    
    externalData: {basis:6, value:'string any'}
};
console.log(TempPP);

function* createFibonachGen(){//функции генераторы * 
    let a = 0;
    let b = 1;
    while(true){
        yield a;
        [a,b] = [b, a+b];
    }
}*/
//let fib = createFibonachGen();
/*console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());*/