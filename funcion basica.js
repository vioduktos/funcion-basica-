function a(){
    return 35;
}
console.log(a())
// respuesta 35

function a(){//a=4
    return 4;
}
console.log(a(4)+a(4));
// respuesta 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
//respuesta 6 
        
function a(b){//b=3
        console.log(b);
        return b*3;
    }
    console.log(a(3));
    // respuesta console log b 3 
    //console log a 9 

    function a(b){//b=10
        return b*4;
        console.log(b);//console log b
     }
     console.log(a(10));
     //respuesta console log 40 

     function a(b){//b=15
        if(b<10) {
            return 2;//15 mayor 
        }
        else     {
            return 4;
        }
        console.log(b);
    }
    console.log(a(15));
    // respuesta 4

    function a(b,c){//b=3c=10
        return b*c;
    }
    console.log(10,3);//10,3 sin definir 
    console.log( a(3,10) );
    //respuesta console log 10,3
    //respuesta console log a 30

    function a(b){//nunca llama a funcion a 
        for(var i=0; i<10; i++){
            console.log(i);
        }
        return i;
    }
    console.log(3);
    console.log(4);
    // respuesta console.log 3 
     // respuesta console.log 4 

     function a(){//
        for(var i=0; i<10; i++){//i=3/6/9
            i = i +2;
            console.log(i);//2/5/8/11
        }
    }
    a();
    // respuesta console.log i 2,5,8,11

    function a(b,c){//b=0 c=10

        for(var i=b; i<c; i++) {//1/2/3/4/5/6/7/8/9/10
           console.log(i);//0/1/2/3/4/5/6/7/8/9
       }
       return b*c;
    }
    a(0,10);//
    console.log(a(0,10));
    //respuesta console.log i /0/1/2/3/4/5/6/7/8/9
    // console.log a 0 

    function a(){
        for(var i=0; i<10; i++){
           for(var j=0; j<10; j++){
               console.log(j);
           }
           console.log(i);// no hay variable 
        }
    }
    // indifinido 

    function a(){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                console.log(i,j);
            }
            console.log(j,i);
        }
    }
// respuesta indifinido     

var z = 10;
function a(){
    var z = 15;
    console.log(z);//15 preguntar x que no es oparte del resultado final
}
console.log(z);//10
// respuesta console.log 10 

var z = 10;//z=15
function a(){//
    var z = 15;//
    console.log(z);//console.log z 15 vuelve a subir
    return z;//
}
z = a();//
console.log(z);// console.log 15

//respuesta console.log z = 15 
// respuesta console.log z=15
