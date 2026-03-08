// Select the Discord logo image
    const discordLogo = document.querySelector('.discord-logo');

    // Add a click event listener
    discordLogo.addEventListener('click', () => {
        // Text to copy
        const discordUsername = "_Chanty_";

        // Copy to clipboard
        navigator.clipboard.writeText(discordUsername)
            .then(() => {
                alert(`Copied "${discordUsername}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    // Select the Gmail logo image
    const gmailLogo = document.querySelector('.gmail-logo');

    // Add a click event listener
    gmailLogo.addEventListener('click', () => {
        // Text to copy
        const gmailAddress = "jd2004ack@gmail.com";

        // Copy to clipboard
        navigator.clipboard.writeText(gmailAddress)
            .then(() => {
                alert(`Copied "${gmailAddress}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    // Select the Phone logo image
    const phoneLogo = document.querySelector('.phone-logo');

    // Add a click event listener
    phoneLogo.addEventListener('click', () => {
        // Text to copy
        const phone_number = "+27 081 539 9878";

        // Copy to clipboard
        navigator.clipboard.writeText(phone_number)
            .then(() => {
                alert(`Copied "${phone_number}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });