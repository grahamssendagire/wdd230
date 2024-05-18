localStorage.setItem("numVisits-ls", numVisits);
document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage has last visit date
    if(localStorage.getItem("lastVisit")) {
        // Get last visit date from localStorage
        var lastVisitDate = new Date(localStorage.getItem("lastVisit"));
        var currentDate = new Date();

        // Calculate the difference in days between visits
        var timeDifference = currentDate.getTime() - lastVisitDate.getTime();
        var daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        // Display appropriate message based on days difference
        var messageElement = document.getElementById("message");
        if(daysDifference === 0) {
            messageElement.textContent = "Welcome back! You visited today.";
        } else if(daysDifference === 1) {
            messageElement.textContent = "Welcome back! You visited yesterday.";
        } else {
            messageElement.textContent = "Welcome back! It's been " + daysDifference + " days since your last visit.";
        }
    } else {
        // First visit, set current date as last visit date
        localStorage.setItem("lastVisit", new Date());
        document.getElementById("message").textContent = "Welcome! This is your first visit.";
    }
});
