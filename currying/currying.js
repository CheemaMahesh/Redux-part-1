


// function sum(x,y,z){
//     return x+y+z;
// }

function sum(x){
    return function sumY(y){
        return function sumZ(z){
            return x+y+z;
        }
    }
}

// const result=sum(1);
// const resultY=result(4);
// const resultZ=resultY(5);

const resultZ=sum(1)(100)(3);
console.log(resultZ);

// 
// 
// 
//
// 
// 
// 