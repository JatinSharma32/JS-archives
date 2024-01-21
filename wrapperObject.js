/* 
This is not a normal javascript string its a Wrapper object, when javascript have to creat an immidiate premitive datatype like 
        let ss = "jatin";
then this premotive datatype if combined with a Wrapper Object (Like the value "jatin" will be passed to constructer and then it recives some properties like .length .concat() etc)
*/

/*
        let ss = new String("jatin");
But by this meathod we our self create a wrapper object which results in a actual object.
Benifits: We can add Properties or Methods to those objects which can't be done by the above approch.
        ss.bb = "jaku";
*/

let ss = new String("jatin");

ss.bb = "jaku";
console.log(ss.bb);
