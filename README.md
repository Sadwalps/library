# Libo - Library Website 

*Libo* is a modern frontend library website designed for book lovers. It allows users to explore library details, view available books, interact with custom components, and enjoy a clean, user-friendly interface.

> *Note:* This is a *pure frontend demonstration website*. There is no backend database or server integration; form actions and interactions are handled purely on the client side for demonstration purposes.

---

##  Features

* *3 Main Pages:*
  * *Home:* Overview of the library with embedded sections and modular components.
  * *Our Books:* Complete showcase of available books with details.
  * *Contact:* Interactive client-side contact form with simulated alerts and reset features.

* *Responsive Design:* Optimized for mobile, tablet, and desktop screens using dynamic layout grids.
* *Interactive UI:* Smooth hover effects on social media icons and call-to-action buttons.
* *Front-End Validation:* Instant visual feedback without needing a backend server.

---

##  Structure & Component Architecture

###  Navigation Bar (Navbar.jsx)
* *Logo/Image:* Libo Library image positioned on the left side.
* *Navigation Links:* Positioned on the right side, providing smooth access to:
  * *Home*
  * *Our Books*
  * *Contact*

###  Home Page (Home.jsx)
The main landing page directly incorporates the *Hero Section* within Home.jsx, while integrating separate JSX components for the remaining sections:

1. *Hero Section (Directly built in Home.jsx)*
   * Background image featuring a modern library.
   * Main heading accompanied by a short description paragraph.
   * *More* button (redirects to the Our Books page).
   * Social media logos with dynamic hover effects .

2. *About Section (About.jsx)*
   * Overview and details about Libo Library paired with a featured image.
   * *Check It* button (redirects to the Our Books page).

3. *Our Library Section (Library.jsx)*
   * Features library image along with visiting hours/time schedules.

4. *Our Book Section (OurBook.jsx)*
   * Previews 3  book images and categories/genres available at the library.
   * *Check It* button (redirects to the Our Books page).

---

##  Page Details

###  Our Books Page
Displays all available books arranged in clean, responsive *Cards*. Each card includes:
* Book Name
* Author Name
* Price

###  Contact Page (UI Simulation)
Allows users to input details into form fields with local state logic (No Backend API):
* *Input Fields:* Name, Phone Number, Email, Message.
* *Send Button:*
  * Shows a simulated "Message send successful" popup if all inputs are filled.
  * Displays "Fill the form complete" if any required field is empty.
* *Cancel Button:* Resets and clears all entered text from the form fields locally.

###  Footer Component (Footer.jsx)
* *Follow Us:* Social media links.
* *Newsletter:* Subscription section containing an Email input field and a Subscribe button.
* Formatted in a *2-Column Grid* on larger screens and stacks vertically on smaller screens.

---

##  Tech Stack

* *Frontend Framework:* React (JSX)
* *Styling:* CSS3 / Responsive Grids & Flexbox
* *Architecture:* Pure Client-Side (No Backend Service /Api)
