let str="mada"
let temp=""
for(let i=str.length-1;i>=0;i--)
{
temp=temp+str[i]
}
if(temp==str)
{
    console.log("string is palindrome");
}
else{
    console.log("string is not palindrome");
    
}

