  

        // Function to get the number of days between two dates
        function getDaysBetweenDates(date1, date2) {
            const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
            return Math.round(Math.abs((date1 - date2) / oneDay));
        }

        // Function to display the message based on days since last visit
        function displayVisitMessage() {
            const messageElement = document.getElementById('message');
            const lastVisit = localStorage.getItem('lastVisit');
            const currentVisit = new Date();

            if (lastVisit) {
                const lastVisitDate = new Date(lastVisit);
                const daysBetween = getDaysBetweenDates(currentVisit, lastVisitDate);

                let message = '';
                if (daysBetween < 1) {
                    message = 'Welcome back! You visited today.';
                } else if (daysBetween === 1) {
                    message = 'Welcome back! You visited yesterday.';
                } else {
                    message = `Welcome back! It's been ${daysBetween} days since your last visit.`;
                }
                messageElement.innerText = message;
            } else {
                messageElement.innerText = 'Welcome! This is your first visit.';
            }

            // Update the last visit date in localStorage
            localStorage.setItem('lastVisit', currentVisit.toString());
        }

        // Call the function to display the visit message
        displayVisitMessage();
