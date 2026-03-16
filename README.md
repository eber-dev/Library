# My Library

## Overview

My Library is a small web application that allows users to manage a personal collection of books.

Users can:

* Add new books
* Mark books as read or unread
* Delete books from the library

This project was built as part of The Odin Project JavaScript curriculum.

---

## Features

* Modal form to add new books
* Books displayed as cards
* Toggle read / unread status
* Delete books from the library

---

## Technologies Used

* HTML
* CSS
* JavaScript
* DOM Manipulation
* Constructor Functions
* Prototype Methods

---

## Project Structure

index.html → structure of the application
styles.css → styling of the interface
script.js → main JavaScript logic

---

## Data Structure

Books are stored inside an array called:

`myLibrary`

Each book is created using a constructor function.

Example book object:

```javascript
{
  id: "a83f1c2d",
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  pages: 295,
  read: "Read"
}
```

---

## Book Constructor

Books are created using the `Book` constructor.

```javascript
function Book(title, author, pages, read){
  this.id = crypto.randomUUID().slice(0,8)
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
```

This constructor generates a unique ID for each book and stores the book's information.

---

## Application Flow

1. The user clicks the **Add Book** button.
2. A modal form appears.
3. The user fills the book information.
4. A new `Book` object is created.
5. The book is added to the `myLibrary` array.
6. A card is created in the DOM representing the book.
7. The user can delete the book or toggle its read status.

---

## Main Functions

### addBookToLibrary()

Creates a new book object and adds it to the library array.

### addCart()

Creates a card element in the DOM to display the book information.

### Book.prototype.alternar()

Changes the read status of a book between **Read** and **Unread**.

---

## Future Improvements

Possible improvements for this project:

* Refactor the code using JavaScript classes
* Separate UI logic from data logic
* Improve form validation
* Store books using Local Storage

