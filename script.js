// Select the Discord logo image
    const discordLogo = document.querySelector('.discord-logo');

    // Add a click event listener
    discordLogo.addEventListener('click', () => {
        // Text to copy
        const discordUsername = "_Chanty_";                           //Copies text to clipboard by clicking on footer icons

        // Copy to clipboard
        navigator.clipboard.writeText(discordUsername)
            .then(() => {
                alert(`Copied "${discordUsername}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    
    const gmailLogo = document.querySelector('.gmail-logo');
    gmailLogo.addEventListener('click', () => {
        const gmailAddress = "jd2004ack@gmail.com";
        navigator.clipboard.writeText(gmailAddress)
            .then(() => {
                alert(`Copied "${gmailAddress}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    
    const phoneLogo = document.querySelector('.phone-logo');
    phoneLogo.addEventListener('click', () => {
        const phone_number = "+27 081 539 9878";
        navigator.clipboard.writeText(phone_number)
            .then(() => {
                alert(`Copied "${phone_number}" to clipboard!`);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });