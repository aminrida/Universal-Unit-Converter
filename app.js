var len = ["Metre", "Kilometre", "Centimetre", "Millimetre", "Nanometre", "Mile", "Yard", "Foot", "Inch", "Light Year"];
var temp = ["Celsius", "Kelvin", "Fahrenheit"];
var area = ["Square Meter", "Square Kilometre", "Square Centimetre", "Square Millimetre", "Square Micrometre", "Hectare", "Square Mile", "Square Yard", "Square Foot", "Square Inch", "Acre"];
var volume = ["Cubic Metre", "Cubic Kilometre", "Cubic Centimetre", "Cubic Millimetre", "Litre", "Millilitre", "US Gallon", "Imperial Gallon", "Cubic Mile", "Cubic Yard", "Cubic Foot", "Cubic Inch"];
var weight = ["Kilogram", "Gram", "Milligram", "Metric Ton", "Long Ton", "Short Ton", "Pound", "Ounce", "Carat", "Atomic Mass Unit"];
var time =  ["Second", "Millisecond", "Microsecond", "Nanosecond", "Picosecond", "Minute", "Hour", "Day", "Week", "Month", "Year"];

var fList = document.getElementById("unitFrom");
var tList = document.getElementById("unitTo");

var newUnitText = document.getElementById("newUnitText");
var newUnitValue = document.getElementById("newUnitValue");
var s = document.getElementById("sub");
var f = document.getElementById("in");

choose();

function emptyInput(){
var isEmpty = document.getElementById("fromValue").value;
(isEmpty ==null || isEmpty=="") ? alert ('Please enter a number.') : "";
}

function getFormulas(){
var j=0; 
var formula = document.getElementsByName("formulas");
var lenFormulas = []; var tempFormulas = []; var areaFormulas = []; 
var volFormulas = []; var wFormulas = []; var tFormulas = [];
var cat = _category();
var catArr;
var formulaFlag= 0;

if(cat == "Length") catArr = len.length;
else if(cat == "Temperature") catArr = temp.length;
else if(cat == "Area") catArr = area.length;
else if(cat == "Volume") catArr = volume.length;
else if(cat == "Weight") catArr = weight.length;
else if(cat == "Time") catArr = time.length;

for(j=0; j<catArr-1; j++){
if(cat == "Length") lenFormulas[j] = formula[j].value;
else if(cat == "Temperature") tempFormulas[j] = formula[j].value;
else if(cat == "Area") areaFormulas[j] = formula[j].value;
else if(cat == "Volume") volFormulas[j] = formula[j].value;
else if(cat == "Weight") wFormulas[j] = formula[j].value;
else if(cat == "Time") tFormulas[j] = formula[j].value;
}

// for(j=0; j<catArr-1; j++){
// console.log(document.getElementsByName("formulas")[j].value);
//console.log(formula.value);
//console.log(lenFormulas[2]);
// formulas[j] = formula[j].value;
//console.log(tempFormulas[2]);

    // }
}

function _category(){
    var obj = document.getElementById("category");
    var category = obj.options[obj.selectedIndex].text;
    return category;
}
function submitForm(){

    var newUnit = document.getElementById("newUnitValue").value;

    if (newUnit ==null || newUnit=="") {alert ('Please enter a new unit.');}
    else{
    var selectedCategory = _category();
    if(selectedCategory=="Length") len.push(newUnit);
    else if(selectedCategory=="Temperature") temp.push(newUnit);
    else if(selectedCategory=="Area") area.push(newUnit);
    else if(selectedCategory=="Volume") volume.push(newUnit);
    else if(selectedCategory=="Weight") weight.push(newUnit);
    else if(selectedCategory=="Time") time.push(newUnit);

    getFormulas();
    choose();
    showHideForm(0);

    (document.getElementById("listView").value == "≡") ? listView() : "";
    document.getElementById("add").value = "Add Unit";
    }
}

function showHideForm(flag){
    var i = 0;
    var selCat = _category();

    if(flag==1){
    if (selCat=="Length"){
    for(i=0; i<len.length; i++) { addOptions("To " + len[i], "to"); showHideForm(2);}}   
    else if (selCat=="Temperature")
    {for(i=0; i<temp.length; i++)   {addOptions("To " + temp[i], "to"); showHideForm(2);}}
    else if (selCat=="Area"){
    for(i=0; i<area.length; i++)    {addOptions("To " + area[i], "to"); showHideForm(2);}}
    else if (selCat=="Volume"){
    for(i=0; i<volume.length; i++)  {addOptions("To " + volume[i], "to"); showHideForm(2);}}
    else if (selCat=="Weight"){
    for(i=0; i<weight.length; i++)  {addOptions("To " + weight[i], "to"); showHideForm(2);}}
    else if (selCat=="Time"){
    for(i=0; i<time.length; i++)    {addOptions("To " + time[i], "to"); showHideForm(2);}}

    s.style.display='block';
    newUnitText.style.display='block';
    newUnitValue.style.display='block';
    document.getElementById("info").style.display = 'block';
    // document.getElementById("form").style.display='block';
   }

   else if(flag==2){
    var input = document.createElement("input");
    input.type = "text"; input.id = "formulas"; input.name = "formulas";
    f.appendChild(input); f.appendChild(document.createElement("br"));
   }

   else{
   s.style.display='none';
   newUnitText.style.display='none';
   newUnitValue.style.display='none';
//    document.getElementById("form").style.display='none';
   document.getElementById("to").innerHTML = "";
   document.getElementById("in").innerHTML = "";
   document.getElementById("newUnitValue").value = "";
   document.getElementById("info").style.display = 'none';
   }
}

function addUnit()
{    
    showHideForm(0);    

    var newUnitText = document.getElementById("newUnitText");
    var newUnitValue = document.getElementById("newUnitValue");
    

    if(document.getElementById("add").value =="Add Unit"){
    document.getElementById("add").value = "x";

        showHideForm(1);
    }
    else{
    document.getElementById("add").value = "Add Unit";
    showHideForm(0);
    }
}

function emptyLists() {
    document.getElementById("unitFrom").innerHTML = "";
    document.getElementById("unitTo").innerHTML = "";
}


function addOptions(option,listName) {
    var list = document.getElementById(listName);
    var listElement = document.createElement("option");
    listElement.value = option;
    listElement.text = option;
    list.appendChild(listElement);
}

function swap(){

// var swapValue = document.getElementById("toValue").value;
// document.getElementById("toValue").value = document.getElementById("fromValue").value;
// document.getElementById("fromValue").value = swapValue;

var unitFrom = document.getElementById("unitFrom");
var unitTo = document.getElementById("unitTo");

var swapUnit = unitTo.options[unitTo.selectedIndex].text;
unitTo.options[unitTo.selectedIndex].text = unitFrom.options[unitFrom.selectedIndex].text;
unitFrom.options[unitFrom.selectedIndex].text = swapUnit;

calculate();

console.log("unitFrom = " + swapUnit); console.log("unitTo = " + unitTo.options[unitTo.selectedIndex].text);
}

function listView(){

    if(fList.size == 0 && tList.size ==0){
        fList.size = fList.length;
        tList.size = tList.length;
        document.getElementById("listView").value = "–";
    }
    else {
        fList.size = tList.size = 0;
        document.getElementById("listView").value = "≡";
    }
}

function choose()
{
    var category = _category()
    var i = 0;
    
    switch(category)
    {
        case "Length":
        emptyLists();
        for(i=0; i<len.length; i++) {            
        addOptions(len[i],"unitFrom");
        addOptions(len[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = len.length;
        else{;}
        break;
        case "Temperature":
        emptyLists();
        for(i=0; i<temp.length; i++) {            
        addOptions(temp[i],"unitFrom");
        addOptions(temp[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = temp.length;
        else{;}
        break;
        case "Area": 
        emptyLists();
        for(i=0; i<area.length; i++) {            
        addOptions(area[i],"unitFrom");
        addOptions(area[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = area.length;
        else{;}
        break;
        case "Volume":
        emptyLists();
        for(i=0; i<volume.length; i++) {            
        addOptions(volume[i],"unitFrom");
        addOptions(volume[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = volume.length;
        else{;}
        break;
        case "Weight":
        emptyLists();
        for(i=0; i<weight.length; i++) {            
        addOptions(weight[i],"unitFrom");
        addOptions(weight[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = weight.length;
        else{;}
        break;
        case "Time":
        emptyLists();
        for(i=0; i<time.length; i++) {            
        addOptions(time[i],"unitFrom");
        addOptions(time[i],"unitTo");
        }
        if(document.getElementById("listView").value == "–")
        document.getElementById("unitFrom").size = document.getElementById("unitTo").size = time.length;
        else{;}
        break;
        default:
        break;
    }
    (document.getElementById("add").value =="x") ? (showHideForm(0), showHideForm(1)) : "";
    return category;
}
