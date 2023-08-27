
  function distSumRec(arr,n,sum,currindex,s)
            {
                if (currindex > n)
                    return;
        
                if (currindex == n) {
                    s.add(sum);
                    return;
                }
        
                distSumRec(arr, n, sum + arr[currindex],
                            currindex + 1, s);
                distSumRec(arr, n, sum, currindex + 1, s);
            }
           
 function printDistSum(arr,n)
            {
                let s=new Set();
                distSumRec(arr, n, 0, 0, s);
                let s1=[...s]
                s1.sort(function(a,b){return a-b;})
                
                for (let [key, value] of s1.entries())
                    document.write(value + " ");
            }
            
          
let arr=[2, 3, 4, 5, 6 ];
let n = arr.length;
printDistSum(arr, n);
            
            
         