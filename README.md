<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
  <header>
    <h1>Boredom Smash Library</h1>
    <p>Welcome to the official documentation for the Boredom Smash Library. This website allows you to explore, search, and download free PDF books without the need for any sign-ups.</p>
  </header>

  <section>
    <h2>Features</h2>
    <ul>
      <li><strong>No Sign-In Required</strong>: Browse, search, and download books freely without the need for registration.</li>
      <li><strong>Book Categories</strong>: Explore a wide range of books categorized into genres like Computer Science, Science, Economics, History, and more.</li>
      <li><strong>Search Functionality</strong>: Search books by keywords or categories using the built-in search bar.</li>
      <li><strong>Responsive Design</strong>: The website is fully responsive, ensuring a great user experience across desktop, tablet, and mobile devices.</li>
      <li><strong>Pagination</strong>: Navigate through pages of books using easy-to-use pagination controls.</li>
    </ul>
  </section>

  <section>
    <h2>Technologies Used</h2>
    <ul>
      <li><strong>HTML</strong>: Provides the structure and markup for the web pages.</li>
      <li><strong>CSS</strong>: Used for styling and layout, making the website visually appealing.</li>
      <li><strong>JavaScript</strong>: Handles interactive elements such as book search, pagination, and data fetching from the API.</li>
      <li><strong>JSON</strong>: Data format for storing and transferring book details.</li>
      <li><strong>REST API</strong>: Used to fetch dynamic data about books and their categories.</li>
      <li><strong>Fonts</strong>: Google Fonts integration (e.g., Anton SC).</li>
      <li><strong>SVG Icons</strong>: For various book and UI icons.</li>
    </ul>
  </section>

  <section>
    <h2>Installation and Setup</h2>
    <p>To set up this project locally, follow the steps below:</p>
    <h3>Prerequisites</h3>
    <ul>
      <li>A modern web browser (Chrome, Firefox, Safari, etc.)</li>
      <li>A code editor (VS Code, Sublime Text, etc.)</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li><strong>Clone the Repository</strong><br>Clone the repository to your local machine:
        <pre><code>git clone https://github.com/yourusername/boredom-smash-library.git</code></pre>
      </li>
      <li><strong>Navigate to the Project Folder</strong><br>
        <pre><code>cd boredom-smash-library</code></pre>
      </li>
      <li><strong>Open in a Browser</strong><br>Open `index.html` in your preferred web browser. You can do this by double-clicking the file or opening it through your code editor.</li>
    </ol>
  </section>

  <section>
    <h2>Usage</h2>
    <p>Once the project is set up, you can explore the following features:</p>
    <ul>
      <li><strong>Browse Categories</strong>: Explore books by clicking on the predefined categories like "Computer Science," "Economics," "History," etc.</li>
      <li><strong>Search for Books</strong>: Use the search bar to find books based on keywords or titles.</li>
      <li><strong>Book Details and Download</strong>: Click on any book to view its details, and use the download link to download the PDF for free.</li>
      <li><strong>Pagination</strong>: Use the pagination controls to navigate between different pages of books.</li>
    </ul>
  </section>

  <section>
    <h2>API Documentation</h2>
    <p>This website fetches book data dynamically via a REST API. The following endpoints are used:</p>
    <h3>Endpoints</h3>
    <ul>
      <li><strong>GET /books</strong>: Retrieves a list of books with metadata such as title, author, category, and download link.</li>
      <li><strong>GET /books/{id}</strong>: Fetches detailed information about a specific book.</li>
    </ul>
    <h4>Example Request</h4>
    <pre><code>GET /books</code></pre>
  </section>

  <section>
    <h2>Contributing</h2>
    <p>Contributions are welcome! If you'd like to contribute, please follow these steps:</p>
    <ol>
      <li>Fork the repository.</li>
      <li>Create a new branch (`git checkout -b feature-branch`).</li>
      <li>Commit your changes (`git commit -am 'Add new feature'`).</li>
      <li>Push the branch (`git push origin feature-branch`).</li>
      <li>Open a pull request.</li>
    </ol>
    <p>Please ensure you follow proper code formatting, write clear commit messages, and include tests if applicable.</p>
  </section>

  <section>
    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
  </section>

  <section>
    <h2>Acknowledgements</h2>
    <ul>
      <li><a href="https://example.com">Free PDF Book API</a>: The API used to fetch book data for this library.</li>
      <li><a href="https://fontawesome.com/">Font Awesome</a>: For UI icons used throughout the website.</li>
      <li><a href="https://fonts.google.com/">Google Fonts</a>: Fonts used for styling text (Anton SC).</li>
    </ul>
  </section>

  <section>
    <h2>Contact</h2>
    <p>For any questions, suggestions, or issues, feel free to open an issue or contact the repository owner.</p>
  </section>

  <footer>
    <h2>Website Structure and Design</h2>
    <p>The website is built with a focus on usability and ease of navigation. Here's a brief overview of the website's structure:</p>
    <ul>
      <li><strong>Header Section</strong>: Includes a navigation bar and a landing image with a brief introduction.</li>
      <li><strong>Main Content</strong>: Displays book categories, books with download links, and pagination controls.</li>
      <li><strong>Footer Section</strong>: Contains developer information and copyright notice.</li>
    </ul>
    <h3>Visual Elements</h3>
    <ul>
      <li><strong>Landing Image</strong>: The website's main page features an image (`assets/Studying-amico.svg`) to engage visitors visually.</li>
      <li><strong>Icons</strong>: Each book category and button on the site is represented by custom icons for easy identification.</li>
    </ul>
    <h3>Example of a Book Entry</h3>
    <pre><code>
      &lt;div class="book"&gt;
        &lt;img src="assets/book.png" alt="" class="book-img"&gt;
        &lt;h3 class="title anton-sc-regular"&gt;Book1&lt;/h3&gt;
        &lt;span class="author"&gt;Author Name&lt;/span&gt;
        &lt;p class="subtitle"&gt;A brief description of the book content.&lt;/p&gt;
        &lt;span class="btns"&gt;
          &lt;button class="book-details"&gt;View Details&lt;/button&gt;
          &lt;a href="#" class="download-link"&gt;Download&lt;/a&gt;
        &lt;/span&gt;
      &lt;/div&gt;
    </code></pre>
  </footer>
</body>
</html>

