let disp = document.getElementById("disp");
let iscap = false;
let shf = false;

function updat() {
  document.querySelectorAll(".keys input").forEach((key) => {
    if (
      key.value !== "SPACE" &&
      key.value !== "CAPS" &&
      key.value !== "ENTER" &&
      key.value !== "SHIFT" &&
      key.value !== "BACKSPACE"
    ) {
        if (iscap) {
            key.value = shf ? key.value.toLowerCase() : key.value.toUpperCase();
          } else {
            key.value = shf ? key.value.toUpperCase() : key.value.toLowerCase();
          }
    }
  });
  let capsL = document.querySelector('.keys input[value="CAPS"]');
  if (iscap) {
    capsL.classList.add("caps-on");
  } else {
    capsL.classList.remove("caps-on");
  }
}

document.querySelectorAll(".keys input").forEach((key) => {
  key.addEventListener("click", () => {
    if (key.value === "SPACE") {
      disp.value += " ";
    } else if (key.value === "CAPS") {
      iscap = !iscap;
      updat();
    } else if (key.value === "BACKSPACE") {
      disp.value = disp.value.slice(0, -1);
    } else if (key.value === "ENTER") {
      disp.value += "\n";
    } else if (key.value === "SHIFT") {
      shf = !shf;
      updat();
    } else {
      disp.value += key.value;
    }
    if (shf && key.value !== "SHIFT") {
      shf = false;
      updat();
    }
  });
});
updat();

let wel = "**Welcome**";
let index = 0;
let interval = setInterval(() => {
  if (index < wel.length) {
    disp.value += wel[index];
    index++;
  } else {
    clearInterval(interval);
    setTimeout(() => {
      if (disp.value === "**Welcome**") {
        disp.value = "Start Typing";
      }
    }, 1000);

    setTimeout(() => {
      if (disp.value === "Start Typing") {
        disp.value = "";
        disp.style.textAlign = "left";
        disp.style.fontSize = "20px";
      }
    }, 2000);
  }
}, 200);
