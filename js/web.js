// JavaScript Document
	function tab(pid){
  var tabs=["tab1","tab2","tab3","tab4"];
  var tabconts=["tabcont1","tabcont2","tabcont3","tabcont4"];
  for(var i=0;i<4;i++){
   if(tabs[i]==pid){
    document.getElementById(tabconts[i]).style.display="block";
	document.getElementById(tabs[i]).className="ontab";
  }else{
    document.getElementById(tabconts[i]).style.display="none";
	document.getElementById(tabs[i]).className="";
  }
  }
 }