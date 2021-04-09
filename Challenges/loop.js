let i=100;

while(i>0){
    ((i%3==0) && (i%5==0))? console.log("fizzbuzz", i):
    (i%3==0)? console.log("buzz", i) :
    (i%5==0)? console.log("fizz", i) :    
    null
    --i
}