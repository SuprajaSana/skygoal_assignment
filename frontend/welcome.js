function logoutHandler() {
  localStorage.removeItem("token");
  window.location.href = "./login.html";
}

async function getUserDetails() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5000/user/details", {
      headers: { Authorization: token },
    });
    if (response.status === 200) {
      document.body.innerHTML = ` <div class="container d-flex justify-content-center">
      <div class="mt-5 border p-5 shadow p-3 mb-5 bg-body rounded" style="width:500px">
        <div class="mb-3">
          <label for="Username" class="form-label fw-bold">Username</label>
          <div>${response.data.details[0].name}</div>
        </div>
        <div class="mb-3">
          <label for="Email" class="form-label fw-bold">Email</label>
          <div>${response.data.details[0].email}</div>
        </div>
        <div class="d-grid gap-2 col-3 mx-auto">
            <button type="submit" class="btn btn-primary" onclick=backButtonHandler()>Back</button>
        </div>
      </div>
    </div>`;
    }
  } catch (err) {
    document.body.innerHTML += `<div style="color:red;text-align:center;">${err.message}</div>`;
  }
}

function backButtonHandler() {
  window.location.href = "./welcome.html";
}
