#pragma strict

var bomb1:Transform;
var bomb2:Transform;

function Start () {
}

function Update () {
	if(GameManager.rtChk == 180){
		BottomBomb();
	}
}

function BottomBomb(){
		var rot = this.transform.rotation;
		var pos = this.transform.position;
		rot.x += 1;
		Instantiate(bomb1, pos, rot);
		Instantiate(bomb2, pos, rot);
}