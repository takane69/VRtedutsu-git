#pragma strict

var threshold:float =0.2;
function Start () {
}

//function FIxedUpdate () {
function Update () {
	if( Mathf.Abs(transform.rotation.x)<threshold &&
		Mathf.Abs(transform.rotation.z)<threshold){
		GameManager.rtChk++;
	}else{
		GameManager.rtChk = 0;
	}
	Debug.Log(GameManager.rtChk);
//	Debug.Log(transform.rotation);
}