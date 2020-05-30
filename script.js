(function () {
  if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
  ) {
    alert("Camera API is not available in your browser");
    return;
  }

  // get page elements
  const video = document.querySelector("#video");
  const btnPlay = document.querySelector("#btnPlay");
  const btnPause = document.querySelector("#btnPause");
  const btnScreenshot = document.querySelector("#btnScreenshot");
  const btnChangeCamera = document.querySelector("#btnChangeCamera");
  const screenshotsContainer = document.querySelector("#screenshots");
  const canvas = document.querySelector("#canvas");
  const devicesSelect = document.querySelector("#devicesSelect");

  // video constraints
  const constraints = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440,
      },
    },
  };

  // use front face camera
  let useFrontCamera = true;

  // handle events
  // play
  btnPlay.addEventListener("click", function () {
    video.play();
    btnPlay.classList.add("is-hidden");
    btnPause.classList.remove("is-hidden");
  });

  // pause
  btnPause.addEventListener("click", function () {
    video.pause();
    btnPause.classList.add("is-hidden");
    btnPlay.classList.remove("is-hidden");
  });

  // screenshot
  btnScreenshot.addEventListener("click", function () {
    const img = document.createElement("img");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    img.src = canvas.toDataURL("image/png");
    screenshotsContainer.prepend(img);
  });

  // switch camera
  btnChangeCamera.addEventListener("click", function () {
    useFrontCamera = !useFrontCamera;

    initializeCamera(null, useFrontCamera);
  });

  // initialize
  function initializeCamera(deviceId = null, frontFace = useFrontCamera) {
    if (deviceId) {
      constraints.video.deviceId = deviceId;
    }

    if (!frontFace) {
      constraints.video.facingMode = { exact: "environment" };
    }

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        /* navigator.mediaDevices.enumerateDevices().then(function (devices) {
          const options = devices
            .filter((device) => device.kind === "videoinput")
            .map((device) => {
              const option = document.createElement("option");
              option.value = device.deviceId;
              option.text = device.label;

              return option;
            });

          devicesSelect.append(...options);
        }); */

        video.srcObject = stream;
      })
      .catch(function () {
        alert("You didn't allow the page to access your camera");
      });
  }

  initializeCamera();
})();
