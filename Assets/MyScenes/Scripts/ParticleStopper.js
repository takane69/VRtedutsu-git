#pragma strict

function Start () {
}

function Update () {
	if(GameManager.rtChk == 180){
		Stopper();
	}
}

function Stopper(){
		this.GetComponent(ParticleSystem).Stop();
		this.GetComponent(AudioSource).Stop();
}