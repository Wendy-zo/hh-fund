// JavaScript Document
function popopen(){
	var popbox=document.getElementById("popbox");
	        if(popbox.style.display=="none"){
				popbox.style.display="block";
				}
			else{popbox.style.display="none";}	
	}
function show(){
	var popbox1=document.getElementById("popbox1");
	        if(popbox1.style.display=="none"){
				popbox1.style.display="block";
				}
			else{popbox1.style.display="none";}	
	}
function shownav(){
	var topbar=document.getElementById("topbar");
	var topnav=document.getElementById("topnav");
	var adv=document.getElementById("adv");
	        if(topnav.style.display=="none"){
				topnav.style.display="block";
				topbar.style.left="3.44rem";
				adv.style.left="3.44rem";
				}
			else{topnav.style.display="none";
			topbar.style.left="0";
				adv.style.left="0";}	
	}
function tab(pid){
  var tabs=["tab1","tab2","tab3","tab4"];
  var tabconts=["tabcont1","tabcont2","tabcont3","tabcont4"];
  for(var i=0;i<4;i++){
   if(tabs[i]==pid){
    document.getElementById(tabconts[i]).style.display="block";
	document.getElementById(tabs[i]).className="flex_1 ontab";
  }else{
    document.getElementById(tabconts[i]).style.display="none";
	document.getElementById(tabs[i]).className="flex_1";
  }
  }
 }
