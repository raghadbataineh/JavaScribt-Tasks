/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  
let num1, num2;
num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the second integer");
                                                 
if(parseInt(num1) > parseInt(num2)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if(parseInt(num2) > parseInt(num1)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  let a,b,c ;
  a=prompt ('Enter the first Number');
  b=prompt ('Enter the Second Number');
  c=prompt ('Enter the third Number');

  let product= a*b*c ;

  if (product<0) {
    alert("The sign is - ")
  }
  else {
    alert ("The sign is +")
  }


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var x,y,z;
x=0,
y=-1,
z=4;
if (x>y && x>z)
{
        if (y>z)
        {
            alert(x + ", " + y + ", " +z);
        }
        else
        {
           alert(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             alert(y + ", " + x + ", " +z);
        }
        else
        {
            alert(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            alert(z + ", " + x + ", " +y);
        }
        else
        {
           alert(z + ", " + y + ", " +x);
        }
}        

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
 

    d=prompt ('Enter the first Number');
  e=prompt ('Enter the Second Number');
  f=prompt ('Enter the third Number');
  g=prompt ('Enter the fourth Number');
  h=prompt ('Enter the fifth Number');


const array1=[d, e , f , g , h];
let largest1=array1[0];
for(i=0 ; i<(array1.length-1); i++) {
    if (array1[i]>largest1)
    {
        largest1=array1[i];
    }
    
}

console.log ("The largest is ",largest1);




 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x_1=20;
let y_1=26;
 
if(x_1>y_1) {
    console.log("Hello World");
}
else {
    console.log("Goodbye");
}


  
 /******* End Your Code ********* */


 