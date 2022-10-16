const videoELement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream. pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoELement.srcObject = mediaStream;
    videoELement.onloadedmetadata = () => {
      videoELement.play();
    };
  } catch (err) {
    // Catch Error Here
    console.log("Error here:", err);
  }
};

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoELement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
