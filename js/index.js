var tableState = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];
window.onload = function () {
    createTable(tableState, 'tabl');
};

function createTable(tableState, id) {
}

function add2(tableID)
{ 
    var table=document.getElementById(tableID); 
	var tag2 = document.createElement ('input');
    var i,j,n=table.rows.length, m=table.rows[0].cells.length; 
    for (i=0;i<n;i++) 
    { 
     table.rows[i].cells[m-2].innerHTML=table.rows[i].cells[m-1].innerHTML; 
     table.rows[i].insertCell(m); 
   }
   }		
function deleteRow(obj)  
{  
  var table = document.getElementById('tabl');  
  var ntr = obj.parentNode.parentNode.rowIndex;  
  table.deleteRow(ntr);  
 var i, n=table.rows.length, m=table.rows[0].cells.length;

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
var x = table.insertRow(0);
var e =table.rows.length-1;
var l =table.rows[e].cells.length;

for (var c =0,  m=l; c < m; c++) {
table.rows[0].insertCell(c);
 table.rows[0].cells[c].innerHTML='<input id="min" type="button" value="-" onclick="deleteRow(this)">';
 }  
 
}
