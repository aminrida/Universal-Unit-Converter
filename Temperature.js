function from_C(fromUnit, toUnit, fromValue){
    if(toUnit=="Celsius")   document.getElementById("toValue").value = fromValue;
    else if(toUnit=="Kelvin")  document.getElementById("toValue").value = fromValue-(-273.15);
    else if(toUnit=="Fahrenheit") document.getElementById("toValue").value = (fromValue*1.8) + 32; 
}
function from_K(fromUnit, toUnit, fromValue){
    if(toUnit=="Celsius")   document.getElementById("toValue").value = fromValue-273.15;
    else if(toUnit=="Kelvin")  document.getElementById("toValue").value = fromValue;
    else if(toUnit=="Fahrenheit") document.getElementById("toValue").value = ((fromValue-273.15)*1.8)+32;
}
function from_F(fromUnit, toUnit, fromValue){
    if(toUnit=="Celsius")   document.getElementById("toValue").value = (fromValue-32)/1.8;
    else if(toUnit=="Kelvin")  document.getElementById("toValue").value = ((fromValue-32)/1.8)+273.15;
    else if(toUnit=="Fahrenheit") document.getElementById("toValue").value = fromValue;
}