
document.addEventListener('DOMContentLoaded', function () {
    const url = "https://www.dbooks.org/api/search/recent";
    let currentPage = 1;
    const itemsPerPage = 12;
    let totalPages = 0;
    let data = [];

    const booksMain = document.getElementById("books-main");
    const prevButton = document.querySelector("#prev-button");
    const nextButton = document.querySelector("#next-button");
    const pageNumber = document.querySelector("#page-number");

    function showSkeletonLoader() {
        booksMain.innerHTML = ""; 
        for (let i = 0; i < 12; i++) {
            const skeletonBook = document.createElement('div');
            skeletonBook.classList.add('book', 'skeleton');
            const skeletonContent = `
                <div class="book-img skeleton-img"></div>
                <div class="description">
                    <div class="skeleton-text subtitle skeleton"></div>
                    <div class="skeleton-text author skeleton"></div>
                    <div class="btns">
                        <div class="skeleton-btn view-details-btn"></div>
                        <div class="skeleton-btn download-link"></div>
                    </div>
                </div>
            `;
            skeletonBook.innerHTML = skeletonContent;
            booksMain.appendChild(skeletonBook);
        }
    }

  
    function hideSkeletonLoader() {
        setTimeout(() => {
            displayPage(currentPage); 
        }, 2000);  
    }

    fetch(url)
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData.books;
            totalPages = Math.ceil(data.length / itemsPerPage);
            showSkeletonLoader();
            hideSkeletonLoader();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            booksMain.innerHTML = "<p>Sorry, we couldn't fetch any books at the moment. Please try again later.</p>";
        });

    function displayPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const limitedData = data.slice(startIndex, endIndex);

        if (limitedData.length === 0) {
            booksMain.innerHTML = "<p>No books found on this page.</p>";
        } else {
            addData(limitedData);
        }
    }

    function addData(data) {
        booksMain.innerHTML = ""; 

    
        data.forEach((bookData, index) => {
            let book = document.createElement("div");
            book.className = "book"; 

            let bookTitle = bookData.title;
            let bookAuthors = Array.isArray(bookData.authors) ? bookData.authors : [bookData.authors || 'Unknown']; 
            let bookSubtitle = bookData.subtitle;
            let bookImage = bookData.image;
            let bookId = bookData.id;

    
            if (bookAuthors.length > 2) {
                bookAuthors = bookAuthors.slice(0, 2).join(', ') + '...';  
            } else {
                bookAuthors = bookAuthors.join(', ');  
            }

 
            const downloadURLPrefix = 'https://www.dbooks.org/api/book/';
            const downloadURL = downloadURLPrefix + bookId;

            let downbookUrl = '#';  

 
            fetch(downloadURL)
                .then(response => response.json())
                .then(fetchedData => {
                    downbookUrl = fetchedData.download || '#';  
                    renderBook(book, downbookUrl, index);  
                })
                .catch(error => {
                    console.error("Error fetching download link:", error);
                    renderBook(book, '#', index); 
                });

       
            function renderBook(book, downbookUrl, index) {
                book.innerHTML = `
                    <img src="${bookImage}" alt="${bookTitle}" class="book-img">
                    <div class="description">
                     <p class="subtitle"><b>${bookTitle}</b>
                        <p class="subtitle"><b>${bookSubtitle}</b>
                        <span class="author ellipsis"><b>author:</b> ${bookAuthors}</span>
                        </p>
                        <span class="btns">
                            <button class="view-details-btn view-details" data-index="${index}">Details</button>  
                            <a href="${downbookUrl}" class="download-link btn-style">Download</a>
                        </span>
                    </div>`;

                booksMain.appendChild(book);

             
                setTimeout(() => {
                    book.style.animationDelay = `${index * 0.1}s`; 
                    book.style.opacity = 1; 
                }, 100);

          
                const viewDetailsBtn = book.querySelector('.view-details-btn');
                viewDetailsBtn.addEventListener('click', () => {
                    const index = viewDetailsBtn.getAttribute('data-index');
                    const bookData = data[index];
                    bookData.downloadUrl = downbookUrl; 
                    localStorage.setItem('selectedBook', JSON.stringify(bookData));
                    location.href = 'html/book-details.html';
                });
            }
        });
    }


    function buttonControl() {
       
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                displayPage(currentPage);
                pageNumber.value = currentPage;
            }
        });

      
        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayPage(currentPage);
                pageNumber.value = currentPage;
            }
        });

        pageNumber.addEventListener('input', () => {
            const inputPage = parseInt(pageNumber.value);
            if (inputPage >= 1 && inputPage <= totalPages) {
                currentPage = inputPage;
                displayPage(currentPage);
            }
        });
    }

    buttonControl();
});
