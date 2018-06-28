//JavaScript examples

var a = 10;
var b = 20;
console.log(`a + b = ${a} + ${b} = ${a+b}`);

//displaying results in grades

var m, p, c;
m = prompt("Please enter marks in Maths: ");
m = parseInt(m);
p = prompt("Please enter marks in Physics: ");
p = parseInt(p);
c = prompt("Please enter marks in Chemistry: ");
c = parseInt(c);
var r = (m+p+c)/3;
var r = parseFloat(r);
if(r>=65)
{
  console.log(`Maths: ${m}\nPhysics: ${p}\nChemistry: ${c}\n`);
  console.log(`Percentage of marks: ${r}`);
  console.log("RESULT : PASS");
  console.log("Grade A");
}
else if(r>=50 && r<65)
{
    console.log(`Maths: ${m}\nPhysics: ${p}\nChemistry: ${c}\n`);
    console.log(`Percentage of marks: ${r}`);
    console.log("RESULT : PASS");
    console.log("Grade B");
}
else if(r>=40 && r<50)
{
    console.log(`Maths: ${m}\nPhysics: ${p}\nChemistry: ${c}\n`);
    console.log(`Percentage of marks: ${r}`);
    console.log("RESULT : PASS");
    console.log("Grade C");
}
else
{
console.log(`Percentage of marks: ${r}`);
console.log("You're Failed!");
}
