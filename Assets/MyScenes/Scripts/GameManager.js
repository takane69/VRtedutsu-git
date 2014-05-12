#pragma strict

static var rtChk : int = 0;

function Start () {
//	this.rtChk = 0;
}

function Update () {
	if(Input.GetKeyDown("z")){
//	if(Input.GetKeyDown("1")){
//		rtChk = 0;
		Application.LoadLevel("Scene5");
	}
}