function add2(tableID)
{ 
    var table=document.getElementById(tableID); 
	var tag2 = document.createElement ('input');
    var i,j,n=table.rows.length, m=table.rows[0].cells.length; 
    for (i=0;i<n;i++) 
    { 
     table.rows[i].cells[m-2].innerHTML=table.rows[i].cells[m-1].innerHTML; 
     table.rows[i].insertCell(m); 
//	table.rows[i].cells[m].innerHTML='<input id="min1" type="button" value="-" onclick="deleteCol(this)">';    
   }
   }

//       var table=document.getElementById(tableID); 
 //       for (var r = 0, n = table.rows.length; r < n; r++) 
//		{
 //       table.rows[r].insertCell(0);
 //       table.rows[r].cells[0].innerHTML =  ( "<input id='plus' type='button' value='+' onClick='add2 ('tabl')' display=>" + "<input id='plus1' type='button' value='+' onClick='addRow ('tabl')'>" + "<input id='min' type='button' value='-' onClick='del();'>" + "<input id='min1' type='button' value='-' onClick='deleteRightCol('tabl')'>");
    
//	   }

 //   }
//var tbl = document.getElementById (tableID);
//var trArr = tbl.getElementsByTagName('tr');	
//    for (var i = 0, l = trArr.length; i < l; i++)	
//	{
 //       trArr[i].insertCell(0);
		
//		tbl.rows[0]		
//		}
		
function deleteRow(obj)  
{  
  var table = document.getElementById('tabl');  
  var ntr = obj.parentNode.parentNode.rowIndex;  
  table.deleteRow(ntr);  
 var i, n=table.rows.length, m=table.rows[0].cells.length;
/* if (table.rows.length < 2)
{ 
console.log("Осталась одна строка");
} 
else
{*/
 for (i=0;i<n;i++)
 {       table.rows[table.rows.length-1].cells[m-1].innerHTML='<input id="min" type="button" value="-" onclick="deleteRow(this)">';     
   }
}  

 function deleteCol(tableID) 
   { 
    var table=document.getElementById(tableID); 
    var i,j,n=table.rows.length, m=table.rows[0].cells.length; 
    for (i=0;i<n;i++) 
    { 
     table.rows[i].cells[m-2].innerHTML=table.rows[i].cells[m-1].innerHTML; 
     table.rows[i].deleteCell(m-1); 
   } 
   }
   
function addRow(tableID){
  
  var table = document.getElementById(tableID);
//var row = document.getElementById("myTable");
var x = table.insertRow(0);
var e =table.rows.length-1;
var l =table.rows[e].cells.length;

for (var c =0,  m=l; c < m; c++) {
table.rows[0].insertCell(c);
//   var a = document.getElementById('tabl');
	
/*  a.onmouseout = function(e) {
	document.getElementById('min').style.display='block';
	document.getElementById('min1').style.display='block';
  }

  a.onmouseover = function(e) {
   document.getElementById('min').style.display='block';
   document.getElementById('min1').style.display='block';
   }; */
 table.rows[0].cells[c].innerHTML='<input id="min" type="button" value="-" onclick="deleteRow(this)">';
 }  
 
}