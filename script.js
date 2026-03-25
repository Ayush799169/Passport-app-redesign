const loginForm = document.getElementById("loginForm");
const passportForm = document.getElementById("passportForm");
const appointmentForm = document.getElementById("appointmentForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    window.location.href = "dashboard.html";
  });
}

function saveFormData() {
  const formData = {
    fullName: document.getElementById("fullName").value,
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("formEmail").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value
  };

  localStorage.setItem("passportFormData", JSON.stringify(formData));

  const saveMessage = document.getElementById("saveMessage");
  if (saveMessage) {
    saveMessage.innerText = "Draft saved successfully";
  }
}

if (passportForm) {
  const savedData = JSON.parse(localStorage.getItem("passportFormData"));

  if (savedData) {
    document.getElementById("fullName").value = savedData.fullName || "";
    document.getElementById("dob").value = savedData.dob || "";
    document.getElementById("gender").value = savedData.gender || "";
    document.getElementById("mobile").value = savedData.mobile || "";
    document.getElementById("formEmail").value = savedData.email || "";
    document.getElementById("city").value = savedData.city || "";
    document.getElementById("address").value = savedData.address || "";
  }

  passportForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const city = document.getElementById("city").value.trim();

    if (fullName === "" || dob === "" || mobile === "" || city === "") {
      alert("Please fill all important fields");
      return;
    }

    saveFormData();
    localStorage.setItem("applicationStatus", "Form completed");
    window.location.href = "upload.html";
  });
}

function showUploadMessage() {
  const uploadMsg = document.getElementById("uploadMsg");
  if (uploadMsg) {
    uploadMsg.innerText = "Documents information saved";
  }

  localStorage.setItem("applicationStatus", "Documents uploaded");
}

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const office = document.getElementById("office").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const timeSlot = document.getElementById("timeSlot").value;

    if (office === "" || appointmentDate === "" || timeSlot === "") {
      alert("Please select all appointment details");
      return;
    }

    localStorage.setItem("appointmentOffice", office);
    localStorage.setItem("appointmentDate", appointmentDate);
    localStorage.setItem("appointmentTime", timeSlot);
    localStorage.setItem("applicationStatus", "Appointment booked");

    window.location.href = "confirmation.html";
  });
}

function downloadReceipt() {
  alert("Receipt downloaded successfully");
}

window.onload = function () {
  const savedInfo = document.getElementById("savedInfo");
  const statusText = document.getElementById("statusText");
  const saved = localStorage.getItem("passportFormData");
  const applicationStatus = localStorage.getItem("applicationStatus");

  if (savedInfo) {
    if (saved) {
      savedInfo.innerText = "Your draft is saved";
    } else {
      savedInfo.innerText = "No saved draft yet";
    }
  }

  if (statusText) {
    if (applicationStatus) {
      statusText.innerText = applicationStatus;
    }
  }
};