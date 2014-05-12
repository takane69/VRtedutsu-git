
var wiimote: Transform;
static var whichRemote: int;


//var motionPlus:    Transform;


//private var searching = false;
var theText : GUIText;
//var theRemoteNumber: GUIText;
var WiiObject: GameObject;
var Wii;

Wii = WiiObject.GetComponent("Wii");

function setVisibility(t : Transform , v : boolean)
{
	if (t.renderer && t.renderer.enabled != v) 
	{
		t.renderer.enabled = v;
	}
	renderers = t.GetComponentsInChildren (Renderer);
		for (var rendy : Renderer in renderers) {
    		rendy.enabled = v;
		}
}

function Start () {
theText.text="";//	theText.text = "Ready.";
	setVisibility(wiimote,false);
//	setVisibility(motionPlus,false);
}
 var totalRemotes = 0;
function OnGUI () {
	totalRemotes = Wii.GetRemoteCount();
	
//	theRemoteNumber.text = "Remote on Display:"+(whichRemote+1).ToString();
/*	
	for(var x=0;x<16;x++)
	{
		if(Wii.IsActive(x))
		{
			if (GUI.Button (Rect ((x*70),0, 70, 50), ("remote "+(x+1)) )) 
			{
				whichRemote = x;
				if(!Wii.IsActive(whichRemote))
				{
					if(Wii.IsSearching())
						theText.text = ("I'm looking.");
					else
						theText.text = ("remote "+whichRemote+" is not active.");
				}
			}
		}
	}
*//*	
	if (Wii.IsActive(whichRemote))
	{
		if(GUI.Button (Rect (150,50, 50, 30), "drop")) {
			Wii.DropWiiRemote(whichRemote);   
			theText.text = ("Dropped "+whichRemote);
		}

		if(Wii.HasMotionPlus(whichRemote))
		{
			if(GUI.Button (Rect (170,80, 160, 30), "Deactivate Motion Plus")) 
			{
				Wii.DeactivateMotionPlus(whichRemote);
			}
			if(Wii.IsMotionPlusCalibrated(whichRemote))
			{
				if(GUI.Button (Rect (190,110, 180, 30), "Uncalibrate Motion Plus")) 
				{
					Wii.UncalibrateMotionPlus(whichRemote);
				}
			}
			else
			{
				if(GUI.Button (Rect (190,110, 160, 30), "Calibrate Motion Plus")) 
				{
					Wii.CalibrateMotionPlus(whichRemote);
				}
			}   
		}
		else
		{
			if(GUI.Button (Rect (170,80, 160, 30), "Check For Motion Plus")) 
			{
				Wii.CheckForMotionPlus(whichRemote);
			}
		}
	}
*/	
	if(Wii.IsSearching())
	{
		if (GUI.Button (Rect (0,60, 128, 58), "Cancel")) {
			//searching = false;
			Wii.StopSearch();   
			theText.text = "Cancelled.";
		}	
	}
	else
	{
		if (!Wii.IsSearching() && (totalRemotes<16) && GUI.Button (Rect (0,50, 128, 58), "Find")) {
			searching = true;
			Wii.StartSearch();   
theText.text="";//			theText.text = "I'm looking.";
			Time.timeScale = 1.0;
		}
	}	
}

function OnDiscoveryError(i : int) {
	theText.text = "Error:"+i+". Try Again.";
	//searching = false;
}

function OnWiimoteFound (thisRemote: int) {
	Debug.Log("found this one: "+thisRemote);
	if(!Wii.IsActive(whichRemote))
		whichRemote = thisRemote;
}

function OnWiimoteDisconnected (whichRemote: int) {
	Debug.Log("lost this one: "+ whichRemote);	
}

function Update () {
	if(Wii.IsActive(whichRemote))
	{		
//		theRemoteNumber.enabled=true;
		var inputDisplay = "";
//		inputDisplay = inputDisplay + "Remote #"+whichRemote.ToString();
//		inputDisplay = inputDisplay + "\nbattery "+Wii.GetBattery(whichRemote).ToString();
		
		///WIIREMOTE
		setVisibility(wiimote,true);
		pointerArray = Wii.GetRawIRData(whichRemote);		
		mainPointer = Wii.GetIRPosition(whichRemote);
		wiiAccel = Wii.GetWiimoteAcceleration(whichRemote);
		
		wiimote.localRotation = Quaternion.Slerp(transform.localRotation,
			Quaternion.Euler(wiiAccel.y*90.0, 0.0,wiiAccel.x*-90.0),5.0);
///
///		transform.position = transform.position + (destinationPosition - transform.position) * Time.fixedDeltaTime * 1.0f;
///		transform.eulerAngles.x = transform.eulerAngles.x + (destinationAngles - transform.eulerAngles.x) * Time.fixedDeltaTime * 1.0f;
///
		inputDisplay = inputDisplay + "\nAccel   "+Wii.GetWiimoteAcceleration(whichRemote).ToString("#.0000");
/*		
		if(Wii.HasMotionPlus(whichRemote))
		{
			setVisibility(motionPlus,true);
			motion = Wii.GetMotionPlus(whichRemote);
			if(Input.GetKeyDown("space") || Wii.GetButtonDown(whichRemote,"HOME"))
			{
				motionPlus.localRotation = Quaternion.identity;
			}
			motionPlus.RotateAround(motionPlus.position,motionPlus.right,motion.x);
			motionPlus.RotateAround(motionPlus.position,motionPlus.up,-motion.y);
			motionPlus.RotateAround(motionPlus.position,motionPlus.forward,motion.z);
			
			inputDisplay = inputDisplay + "\nMotion+ "+motion.ToString("#.0000");
			inputDisplay = inputDisplay + "\nYAW FAST "+Wii.IsYawFast(whichRemote);
			inputDisplay = inputDisplay + "\nROLL FAST "+Wii.IsRollFast(whichRemote);
			inputDisplay = inputDisplay + "\nPITCH FAST "+Wii.IsPitchFast(whichRemote);
		}
		else
		{
			setVisibility(motionPlus,false);
		}
		
		theText.text=inputDisplay;		
*/	}
	else
	{
		setVisibility(wiimote,false);
//		setVisibility(motionPlus,false);
//		theRemoteNumber.enabled=false;
//		theText.text = "Ready.";
	}
}