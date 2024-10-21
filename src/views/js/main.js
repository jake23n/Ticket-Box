const inputUsername = document.querySelector('.username');
const inputPassword = document.querySelector('.password');
const btnLogin = document.querySelector('.submitButton'); 

btnLogin.addEventListener("click", async (e) => {
    e.preventDefault();

    // Kiểm tra xem input có trống không
    if (inputUsername.value === "" || inputPassword.value === "") {
        alert('Please enter a username and password')
        return
    }

    if(inputUsername.value === "admin" && inputPassword.value === "admin@1234"){
        alert("Login successful")
        window.location.href = "home/temp.html" 
        return
    }
    // Gửi yêu cầu đăng nhập đến server
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Định dạng dữ liệu gửi đi
            },
            body: JSON.stringify({
                username: inputUsername.value, 
                password: inputPassword.value, 
            }),
        });

        const data = await response.text(); // Nhận phản hồi từ server

        if (response.ok) {
            alert("Login successful");
            window.location.href = "home/temp.html"; // Chuyển hướng nếu đăng nhập thành công
        } else {
            alert(data); 
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred during login");
    }
});


// -------------------------------------
// Hàm hiển thị hoặc ẩn form đăng nhập
function CancelHidden() {
    const loginSection = document.getElementById('Login');
    const overlay = document.getElementById('overlay');
    const header = document.querySelector('.header');
    
    // Toggled visibility
    if (loginSection.classList.contains('hidden')) {
        loginSection.classList.remove('hidden');
        overlay.classList.remove('hidden');
        header.classList.add('hidden'); // Ẩn header
    } else {
        loginSection.classList.add('hidden');
        overlay.classList.add('hidden');
        header.classList.remove('hidden'); // Hiện lại header
    }
}

// Lắng nghe sự kiện click vào overlay
document.getElementById('overlay').addEventListener('click', function(event) {
    const loginSection = document.getElementById('Login');
    const header = document.querySelector('.header');
    const navbar = document.getElementById('navbar');
    
    if (!loginSection.contains(event.target)) {
        loginSection.classList.add('hidden');
        this.classList.add('hidden'); 
        header.classList.remove('hidden'); // Hiện lại header
        navbar.classList.remove('hidden'); // Hiện lại navbar
    }
});

// Lắng nghe sự kiện click vào overlay
document.getElementById('overlay').addEventListener('click', function(event) {
    const loginSection = document.getElementById('Login');
    const header = document.querySelector('.header'); // Lấy phần header
    const navbar = document.getElementById('navbar'); // Lấy phần navbar
    
    if (!loginSection.contains(event.target)) {
        loginSection.classList.add('hidden');
        this.classList.add('hidden'); 
        header.classList.remove('hidden'); // Hiện lại header
        navbar.classList.remove('hidden'); // Hiện lại navbar
    }
});

