async function fetchLatestComic() {
    const latestComicNum = 1; // Change this to the latest comic number you have.
    const comicPage = `comic${latestComicNum}.html`; // Template literal fixed

    try {
        const response = await fetch(comicPage);
        if (response.ok) {
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            
            // Get the full div with class comic-content
            const comicContent = doc.querySelector('.comic-content');
            
            // Replace the current comic container with the fetched content
            if (comicContent) {
                document.getElementById('latest-comic-container').innerHTML = comicContent.outerHTML;
            } else {
                document.getElementById('latest-comic-description').innerHTML = "No latest comic content available.";
            }
        } else {
            document.getElementById('latest-comic-description').innerHTML = "No latest comic available.";
        }
    } catch (error) {
        console.error("Failed to fetch the latest comic:", error);
        document.getElementById('latest-comic-description').innerHTML = "Error loading latest comic.";
    }
}

fetchLatestComic();

function logChange(changeDescription) {
    console.log(`Change Log: ${changeDescription}`);
}

// Example usage of logChange function
logChange("Added a new function logChange to log the changes made to address the identified issue.");
