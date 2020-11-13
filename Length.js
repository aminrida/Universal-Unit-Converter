function from_M(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue/1000;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*100;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*1000;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*1000000000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.0006213711922373339;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*1.0936132983377078; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*3.2808398950131235;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*39.37007874015748; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.0570008340246156e-16;
      }

function from_Km(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue*1000;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*100000;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*1000000;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*1000000000000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.6213711922373339;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*1093.6132983377078; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*3280.8398950131235;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*39370.07874015748; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.0570008340246156e-13;
      }

function from_Cm(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue/100;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue/100000;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*10;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*10000000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.000006213711922373339;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*0.010936132983377078; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*0.032808398950131235;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*0.3937007874015748; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.0570008340246156e-18;
      }

function from_Mm(fromUnit, toUnit, fromValue){
       
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue/1000;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue/1000000;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue/10;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*1000000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*6.213711922373339e-7;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*0.0010936132983377078; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*0.0032808398950131235;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*0.03937007874015748; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.0570008340246156e-19;
      }

function from_Nm(fromUnit, toUnit, fromValue){
       
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue/1000000000;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue/1000000000000;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue/10000000;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue/1000000;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*6.213711922373339e-13;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*1.0936132983377078e-9; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*3.2808398950131235e-9;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*3.937007874015748e-8; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.0570008340246156e-25;
      }

function from_Mi(fromUnit, toUnit, fromValue){
       
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue/0.0006213711922373339;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue/0.6213711922373339;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue/0.000006213711922373339;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue/6.213711922373339e-7;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue/6.213711922373339e-13;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*1760.0065617; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*5280.019685;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*63360.23622; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*1.701096963e-13;

      }

function from_Yd(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue*0.9144;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue*0.0009144;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*91.44;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*914.4;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*914400000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.0005681797;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*3;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*36; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*9.665287622e-17;

      }

function from_Ft(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue*0.3048;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue*0.0003048;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*30.48;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*304.8;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*304800000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.0001893932;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue/3; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*12; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*3.22176254e-17;

      }

function from_In(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue*0.0254;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue*0.0000254;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*2.54;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*25.4;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*25400000;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*0.0000157828;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue/36; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue/12;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue*2.684802117e-18;

      }

function from_Ly(fromUnit, toUnit, fromValue){
        
        if(toUnit=="Metre")   document.getElementById("toValue").value = fromValue*9460660000000000;
        else if(toUnit=="Kilometre")  document.getElementById("toValue").value = fromValue*9460660000000;
        else if(toUnit=="Centimetre") document.getElementById("toValue").value = fromValue*946066000000000000;   
        else if(toUnit=="Millimetre") document.getElementById("toValue").value = fromValue*9460660000000000000;
        else if(toUnit=="Nanometre")  document.getElementById("toValue").value = fromValue*9.460659999E+24;
        else if(toUnit=="Mile") document.getElementById("toValue").value = fromValue*5878559666946;    
        else if(toUnit=="Yard") document.getElementById("toValue").value = fromValue*10346303587051618; 
        else if(toUnit=="Foot") document.getElementById("toValue").value = fromValue*31038910761154856;
        else if(toUnit=="Inch") document.getElementById("toValue").value = fromValue*372466929133858300; 
        else if(toUnit=="Light Year") document.getElementById("toValue").value = fromValue;

      }