const videoElement = document.getElementById("video");
const btnElement = document.getElementById("button");

// prompt user to select media screen, pass to video element, then Play

async function selectMediaScreen() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = ()=>{
        videoElement.play();
    }
} catch (error) {
    // catch errors
    console.log("error here :", error);
  }
}
btnElement.addEventListener('click',async ()=>{
    // disable button 
    btnElement.disabled = true;
    // Strart pic in pic
    await videoElement.requestPictureInPicture();
    // reset btn
    btnElement.disabled = false;
});
// on load
selectMediaScreen();
