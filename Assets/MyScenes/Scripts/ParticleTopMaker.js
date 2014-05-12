#pragma strict

var bomb1:Transform;
var bomb2:Transform;

function Start () {
}

function Update () {
	if(GameManager.rtChk == 180){
		TopBomb();
	}
}

function TopBomb(){
	var rot = this.transform.rotation;
//	var rot = this.transform.eulerAngles;
	var pos = this.transform.position;
	rot.x -= 1;
//	rot.x -= 0.5;
	Instantiate(bomb1, pos, rot);
	Instantiate(bomb2, pos, rot);
}