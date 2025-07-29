function indexOfIgnoreCase(s1, s2) {
  // write your code here
s1=s1.toLowerCase();
s2=s2.toLowerCase();
let ans=-1;
for(let i=0;i<=s1.length-s2.length;i++){
        let isIndex=true;
for(let j=0;j<s2.length;j++){
          if(s1[i+j]!=s2[j]){
             isIndex=false;
 break;
 
 }

}
if(isIndex){
          ans=i;
break;
}
}
return ans;  

}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
