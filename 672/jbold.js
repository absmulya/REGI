function jailbreakold(){
if (main_ret == 179 || main_ret == 0){
	window.msgs.innerHTML="<h1>"+LoadedMSG+"</h1>";
} 
else {
	window.msgs.innerHTML="<h1>Failed to Load Jailbreak! - Restart your Console.</h1>";
	return;
}
}