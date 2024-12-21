document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector(".profile");
    const userInfo = document.querySelector(".dropdown-menu");

    // Toggle menu display on avatar click
    avatar.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event propagation
        const isHidden = userInfo.style.display === "none" || !userInfo.style.display;
        userInfo.style.display = isHidden ? "block" : "none";
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!userInfo.contains(event.target) && event.target !== avatar) {
            userInfo.style.display = "none";
        }
    });
});
