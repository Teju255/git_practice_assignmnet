// Check whether a number is Prime or not
let n=12;
let factor=0;
for(let i=0;i<=n;i++){

    if(n%i==0)
    {
        factor++
    }
}
if(factor==2)
{
    console.log("number is palindrom")
}
else{

    console.log("number is not palindrom")
}