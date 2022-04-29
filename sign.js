function getCount()
{
 var count=0;
 if(document.getElementById("Pilgrimage").checked===true)
 {
 count+=1;
 }
 if(document.getElementById("Heritage").checked===true)
 {
 count+=1;
 }
 if(document.getElementById("Hills").checked===true)
 {
 count+=1;
 }
 if(document.getElementById("Falls").checked===true)
 {
 count+=1;
 }
 if(document.getElementById("Beach").checked===true)
 {
 count+=1;
 }
 if(document.getElementById("Adventures").checked===true)
 {
 count+=1;
 }
 return count;
}
function getTotalCost(noOfpersons)
{
 var initcost=0;
 if(document.getElementById("Pilgrimage").checked===true)
 {
 initcost+=350;
 }
 if(document.getElementById("Heritage").checked===true)
 {
 initcost+=430;
 }
 if(document.getElementById("Hills").checked===true)
 {
 initcost+=780;
 }
 if(document.getElementById("Falls").checked===true)
 {
 initcost+=1200;
 }
 if(document.getElementById("Beach").checked===true)
 {
 initcost+=270;
 }
 if(document.getElementById("Adventures").checked===true)
 {
 initcost+=4500;
 }
 return initcost*noOfpersons;
}
function calculateDiscount(cost)
{
 if(getCount()>=2)
 {
 return (cost*(85/100));

 }
 return 0;
}
function getStayCost(noOfPersons)
{
if(document.getElementById("yes").checked===true)
{
 var noOfDays=document.getElementById("noOfDaysStay").value;
 return noOfPersons* noOfDays *150;
}
return 0;
}
function disableNoOfDaysStay()
{
 if(document.getElementById("no").checked===true)
 {
 document.getElementById("noOfDaysStay").setAttribute("disabled",true);
 }
/*if(document.getElementById("yes").checked===true)
{
 document.getElementById("noOfDaysStay").setAttribute("disabled",false);

}*/

}
function calculateCost()
{
 var noOfPersons=document.getElementById("noOfPersons").value;
 var totalcost=getTotalCost(noOfPersons);
 var discount=calculateDiscount(totalcost);
 var staycost=getStayCost(noOfPersons);
 var packagecost=discount+staycost;
 var res=packagecost+936;
 document.getElementById("result").innerHTML="Your preferred package cost "+res+"$";
 return true;
}