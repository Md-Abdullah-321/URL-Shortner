# Short URL Maker Website Documentation

## Overview

The Short URL Maker website is a simple web application built using React and Tailwind CSS. It allows users to generate short URLs for long input URLs. The website consists of three pages: Home, URLs List, and History.

## Pages

### Home Page

- The Home page is the landing page of the website.
- Users can enter a long URL in an input field.
- Upon clicking the "Generate Short URL" button, a short URL is created and displayed to the user.
- The generated short URL is stored in the LocalStorage along with the corresponding long URL.

### URLs List Page

- The URLs List page displays a table with the list of user-created short URLs and their corresponding long URLs.
- Users can view their URL history on this page.
- Users can edit or delete URLs in the list.
- Editing a URL allows users to change the long URL associated with the short URL.
- Deleting a URL removes the short URL and its associated long URL from the LocalStorage.

### History Page

- The History page shows the user's URL history in a chronological list.
- Each history entry includes both the long URL and the short URL.
- Users can copy the short URL to the clipboard using the "Copy" button next to each history entry.
- The history is retrieved from the LocalStorage and displayed on this page.

## Live Demo

You can access the live version of the Short URL Maker website by visiting <a href="https://long-to-short-url.netlify.app" target="_blank">long-to-short-url.netlify.app</a>.

## Technologies Used

- React: The frontend framework used for building the user interface and managing application state.
- Tailwind CSS: A utility-first CSS framework used for styling the website.
- LocalStorage: The client-side storage used to store the short URLs and their corresponding long URLs.

## Setup and Installation

To run the Short URL Maker website locally, follow these steps:

1. Clone the repository from GitHub.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Access the website in your web browser at `http://localhost:3000`.

## Usage

1. Open the website in your web browser.
2. On the Home page, enter a long URL in the input field and click "Generate Short URL."
3. The short URL will be displayed below the input field.
4. To view the list of generated URLs, navigate to the URLs List page.
5. On the URLs List page, you can edit or delete the URLs using the respective buttons.
6. To view your URL history, navigate to the History page, which displays a chronological list of all your previously generated short URLs along with their corresponding long URLs.
7. To copy a short URL from the history, click the "Copy" button next to the desired entry.

## Limitations

- As the website uses LocalStorage for data storage, the generated short URLs will only be available on the same device and browser where they were created. Clearing browser data or using a different device will result in the loss of previously generated short URLs.

## Future Enhancements

- Implement server-side data storage to make short URLs accessible across different devices and browsers.
- Add user authentication to enable multiple users to manage their individual short URLs securely.
- Implement analytics to track the usage and performance of the short URLs.

---

This documentation provides an overview of your Short URL Maker website, its features, technologies used, setup instructions, and potential future enhancements. Feel free to expand on each section with more details and explanations as needed.
