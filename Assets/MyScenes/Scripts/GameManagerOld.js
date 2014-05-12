#pragma strict

static var rtChk : int;

function Start () {
	rtChk = 0;
}

function Update () {
	if(Input.GetKeyDown("1")){
		Application.LoadLevel("Scene4");
	}
}