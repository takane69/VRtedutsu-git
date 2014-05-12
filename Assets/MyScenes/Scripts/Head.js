#pragma strict

var Cube:Transform;
var Default:Vector3;

function Start () {
Default=this.transform.eulerAngles;
}

function Update () {
	transform.eulerAngles = Cube.eulerAngles + Vector3(Default.x ,Default.y,Default.z);
}