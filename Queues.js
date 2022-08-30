class Queue {
    constructor(){
        this.items= [];
    }

    Enqueue(element){
        return this.items.push(element);
    }

    Dequeue(){
        if(this.items.length > 0){
            return this.items.shift();
        }else{
            console.log("IsEmpty");
        }
    }

    IsEmpty(){
        return this.items.length == 0;
    }

    front(){
        if(this.IsEmpty()){
            return " This is Empty."
        }else{
            return this.items[0]
        } 
    }

    PrintQueue(){
        let str  = "";
        for(let i = 0; i < this.items.length;i++){
        str += this.items[i] + "  ";
        }
        return str;

        // var str = "";
        // for(var i = 0; i < this.items.length; i++)
        // str += this.items[i] +" ";
        // return str;
        }
    }
let obj = new Queue;

obj.Enqueue(5);
obj.Enqueue(4);
obj.Enqueue(2);
obj.Enqueue(1);
obj.Enqueue(8);

console.log(obj.items)

console.log(obj.Dequeue())

console.log(obj.IsEmpty())

console.log(obj.PrintQueue())


