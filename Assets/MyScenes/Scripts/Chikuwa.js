#pragma strict

var tedutsu:Transform;

function Start () {
}

function Update () {
	transform.eulerAngles = tedutsu.eulerAngles;
}