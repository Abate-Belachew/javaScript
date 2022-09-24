
/*
12) (The science of this might not be accurate)
Write a function that takes DNA strand as a parameter. 
The four nucleotides found in DNA are 
adenine (A), cytosine (C), guanine (G) and thymine (T).
So, the function should accept any sequence of A, C, G, & T, in any order. 
A matches with T, G matches with C. 

Your function should return the complement of the given strand. 

e.g. if given G, A, T, C the output should be C, T, A, G

(inspired by: 	https://exercism.org/tracks/javascript/exercises/rna-transcription)
*/
let strand1 = ['A', 'C', 'G', 'T'];


function rnaTranscriber(strand){

    let strd = [];
    for (i = 0; i < strand.length; i++ ){
        if (strand[i] === 'A') {
        strd.push('T');
    } else if (strand[i]  === 'G'){
        strd.push('C');
    } else if (strand[i]  === 'T'){
        strd.push('A');
           
    } else if (strand[i]  === 'C'){
        strd.push('G');
    }
    }
    
    return strd; 
}

console.log(rnaTranscriber(strand1));