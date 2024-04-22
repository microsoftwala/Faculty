// Get the container and text elements
const infoContainer = document.getElementById("info");
const infoText = document.getElementById("infoText");
const show = document.getElementById("show");
const buttonShow = document.getElementById("buttonshow");
const maincontent = document.getElementById("maincontent");

// Define the information text
const infoTextLargeScreen = `
  <p class="text-blue-800 font-semibold text-xl flex justify-center">
    Indian Institute of Information Technology, Design and Manufacturing
  </p>
  <p class="text-blue-800 font-semibold text-xl flex justify-center">
    Kancheepuram, Chennai - 600127
  </p>
  <p class="text-blue-600 font-bold flex justify-center">
    (An Institute of National Information Importance Fully Funded by Govt of India)
  </p>
`;

const infoTextSmallScreen = `
   <div class="flex justify-center">
      <p class="text-blue-800 text-2xl font-bold">
      IIITDM Kancheepuram
      </p>
   </div>
  <p class="text-blue-800 font-bold text-2xl flex justify-center">
    Chennai - 600127
  </p>
`;

// Check window width and update content accordingly
function updateContent() {
  const width = window.innerWidth;

  if (width > 600) {
    infoText.innerHTML = infoTextLargeScreen;
  } else {
    infoText.innerHTML = infoTextSmallScreen;
  }
}

// Initial call to update content
updateContent();

const MenuIcon = '<i class="fa-solid fa-bars"></i>';
const CrossIcon = '<i class="fa-solid fa-xmark top-0 z-60"></i>';
const ButtonBlur = `<div class="fixed top-15 left-0 w-full  flex items-center justify-center z-50">
  <div class="bg-slate-300 w-11/12 p-4 rounded-lg">
    <div class="flex flex-col text-white font-serif font-semibold justify-center">
      <a href="/" target="_blank" class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">Notification</a>
      <a href="/" target="_blank" class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">Register</a>
      <a href="/" target="_blank" class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">Login</a>
      <a href="/" target="_blank" class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto">Contact Us</a>
    </div>
  </div>
</div>`;

const showIcon = document.getElementById("showIcon");
function updatemenuarrow() {
  const width = window.innerWidth;

  if (width > 768) {
    showIcon.style.display = "none";
    showIcon.innerHTML = "";
  } else {
    showIcon.style.display = "flex";
    showIcon.innerHTML = MenuIcon;
  }
}

function toggleIcon() {
  if (showIcon.innerHTML == MenuIcon) {
    showIcon.innerHTML = CrossIcon;
    buttonShow.innerHTML = ButtonBlur;
    maincontent.classList.add("blur");
  } else {
    showIcon.innerHTML = MenuIcon;
    maincontent.classList.remove("blur");
    buttonShow.innerHTML = "";
  }
}
showIcon.addEventListener("click", toggleIcon);

updatemenuarrow();

const Buttonbig = `<div
          class="md:flex md:flex-col font-serif font-semibold mt-10 justify-center md:visible text-white"
        >
          <a
            href="/"
            target="_blank"
            class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto justify-center flex"
            >Notification</a
          >
          <a
            href="/"
            target="_blank"
            class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto justify-center flex"
            >Register</a
          >
          <a
            href="/"
            target="_blank"
            class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto justify-center flex"
            >Login</a
          >
          <a
            href="/"
            target="_blank"
            class="btn-1 m-2 p-3 rounded-xl w-3/5 ml-auto mr-auto justify-center flex"
            >Contact Us</a
          >
        </div>
`;

function updateButtonShow() {
  const width = window.innerWidth;
  if (width >= 768) {
    buttonShow.innerHTML = Buttonbig;
  } else {
    buttonShow.innerHTML = "";
  }
}

updateButtonShow();

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    const formData = new FormData(this);

    // Access form data by name
    const email = formData.get("email");
    const password = formData.get("password");

    // Do something with the form data (e.g., send it to server)
    console.log("Email:", email);
    console.log("Password:", password);

//     fetch("process_login.php", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.text();
//       })
//       .then((data) => {
//         // Handle response from server
//         console.log("Response from server:", data);
//         // You can do further processing here
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });

//     // Reset the form
//     this.reset();

  });

// Add event listener for window resize
window.addEventListener("resize", updateContent);
window.addEventListener("resize", updateButtonShow);
window.addEventListener("resize", updatemenuarrow);
