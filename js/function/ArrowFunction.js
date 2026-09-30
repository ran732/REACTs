const vowelcount = (str) => {
    let count = 0 ;
    
    for( let val of str){
        if (val =='a'||val =='e'||val =='i'||val =='o'||val =='u'){

            count ++;
        };

    };
    console.log(count);

};

vowelcount('aeiou');

const sum =(a,b) => a+b;
console.log(sum(23,34));
