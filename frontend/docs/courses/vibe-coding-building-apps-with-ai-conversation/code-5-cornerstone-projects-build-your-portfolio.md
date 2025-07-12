---
layout: doc

title: "Code 4 - Cornerstone Projects - Build Your Portfolio"
description: "Solidify your Vibe Coding skills with three cornerstone projects: an advanced to-do list, a simple budget tracker, and a recipe search app. Build your portfolio and master CRUD operations, state management, and data structuring with AI."

ogTitle: "Code 4 - Cornerstone Projects - Build Your Portfolio"
ogDescription: "Solidify your Vibe Coding skills with three cornerstone projects: an advanced to-do list, a simple budget tracker, and a recipe search app. Build your portfolio and master CRUD operations, state management, and data structuring with AI."

keywords: Vibe Coding projects, developer portfolio, to-do list app, budget tracker app, recipe app, CRUD, state management, local storage, JavaScript projects, AI coding projects
---

# Module 4: Cornerstone Projects - Build Your Portfolio

You've learned the workflow and built a complete application alongside your AI partner. Now it's time to solidify your skills and build your own portfolio. These cornerstone projects are designed to reinforce the core concepts you've learned—DOM manipulation, event handling, and data persistence with local storage.

The projects are designed to increase in complexity. The first three focus on mastering the fundamentals of building self-contained web applications. The final project introduces a critical new skill: interacting with external data sources via an API.

Each project includes a description, a list of required features, and a "starter prompt" to get your conversation with the AI going. Your mission is to use the 5-step Vibe Coding workflow to build each of these applications from scratch.

## Project 1: The Ultimate To-Do List

**Description:** This project is a classic for a reason. It's the perfect way to master the fundamentals of creating, reading, updating, and deleting (CRUD) data in a web application. You will build on the concepts from the note-taking app but add more complex state management.

**Features:**

* An input field to add new tasks.
* A button to add the task to a list.
* The ability to delete tasks from the list.
* A checkbox or button on each task to mark it as "complete."
* When a task is marked complete, its text should have a line-through style applied.
* Filter buttons ("All," "Active," "Completed") that change which tasks are visible in the list.
* All tasks and their completion status must be saved to the browser's local storage so they persist after a refresh.

**Starter Prompt:**

```text
Let's start building an advanced To-Do list app. 
First, act as a UI/UX designer and then as a web developer. 
Create the complete HTML structure needed for all the features listed above. 
This should include the input form, the container for the task list, and a footer section containing the filter buttons for "All," "Active," and "Completed."
```

::: info Pro Tip
For the to-do list, think about "edge cases." What happens if the user tries to add an empty task? Your prompt should include constraints to prevent this, such as, "Do not add the task if the input field is empty."
:::

### Bonus Features & Challenges

* **Edit in Place:** Add functionality to allow the user to click on a task's text to edit it directly.
* **Due Dates:** Add a date input to each task and display it.
* **Priority Levels:** Allow users to assign a priority (e.g., High, Medium, Low) to each task and visually indicate it with a color.

## Project 2: The Simple Budget Tracker

**Description:** This project will introduce you to handling numbers and performing basic calculations in JavaScript. You'll also practice conditional styling—making elements look different based on their value.

**Features:**

* An input form with two fields: one for the transaction name (e.g., "Coffee," "Paycheck") and one for the amount.
* Logic to handle positive numbers (income) and negative numbers (expenses).
* A running total balance that updates automatically every time a new transaction is added.
* A list displaying the last 10 transactions.
* In the transaction list, the amounts should be color-coded: green for positive amounts (income) and red for negative amounts (expenses).
* The list of transactions and the current balance must be saved to local storage.

**Starter Prompt:**

```text
Act as a full-stack developer mentoring a beginner. 
I need to build a simple budget tracker web app. 
Before we write any HTML, let's design the JavaScript logic. 
What are the main functions I will need to handle adding a new transaction, updating the total balance, displaying the transaction history, and saving everything to local storage? Please list the function names and write a one-sentence description for what each function will do.
```

::: info Pro Tip
When working with numbers, ask your AI to format the output for readability. For example, you can ask it to, "Display the balance as a currency with a dollar sign and two decimal places." This small detail can make your app feel much more polished.
:::

### Bonus Features & Challenges

* **Visual Chart:** Ask your AI to help you integrate a simple charting library (like Chart.js) to create a pie chart showing the breakdown of expenses by category.
* **Transaction Categories:** Add a dropdown menu to the input form to categorize each transaction (e.g., "Food," "Transport," "Salary").
* **Edit/Delete Transactions:** Allow users to remove or edit past transactions from the history list.

## Project 3: The "What's for Dinner?" Recipe App

**Description:** This project focuses on working with more complex data structures (specifically, an array of objects) and implementing a real-time search/filter functionality. This is a key skill for any app that needs to manage a collection of data.

**Features:**

* A pre-defined list of 10-15 recipes stored directly inside your JavaScript code as an array of objects.
* Each recipe object must have at least four properties: a unique id (number), a title (string), an ingredients list (an array of strings), and instructions (a long string).
* A search bar at the top of the page.
* As the user types into the search bar, the app should filter the list of recipes in real-time, displaying only those whose title or ingredients contain the search query.
* When a user clicks on a recipe from the list, its full details (title, ingredients, and instructions) are shown in a dedicated display area.

**Starter Prompt:**

```text
I'm creating a recipe search app where the data is stored locally in the code. 
* First, act as a data architect. Help me structure the recipe data in JavaScript. 
* Create a sample array named recipes containing at least 3 recipe objects. Each object must have a unique id (number), a title (string), an ingredients (an array of strings), and instructions (a string). 
* Format the output as a single JavaScript code block.
```

::: info Pro Tip
For the recipe app, start by asking the AI to generate a larger, more diverse set of sample data. You could prompt it with, "Create a JavaScript array of 15 recipe objects from various cuisines. Include a mix of breakfast, lunch, and dinner recipes." Having rich data to work with will make the development process more interesting and will allow you to build a more robust search functionality.
:::

### Bonus Features & Challenges

* **Add Your Own Recipes:** Create a form that allows users to add their own recipes to the list and save them to local storage.
* **Favorite Recipes:** Add a "favorite" button to each recipe. Create a filter to show only favorited recipes.
* **Random Recipe:** Add a "I'm Feeling Lucky" button that randomly selects and displays one recipe from the list.

## Project 4: The Movie Finder (API Project)

**Description:** This project takes you to the next level. Instead of working with data stored inside your app, you'll learn to fetch and display information from a real, live external source on the internet. This project teaches you how to work with APIs (Application Programming Interfaces), a fundamental skill for building modern web applications. You'll create an app that lets users search for movies and see details like posters, ratings, and summaries.

**Features:**

*   A search input field and a "Search" button.
*   When the user searches, the app will make a request to a free movie API (like The Movie Database - TMDb).
*   The app will display a grid of movie posters for the search results.
*   When a user clicks on a movie poster, it shows more details (title, release date, overview).
*   A loading indicator is shown while the data is being fetched.
*   A clear error message is displayed if the API call fails or if no movies are found.

**Starter Prompt:**

```text
Act as a senior web developer guiding a beginner. I want to build a "Movie Finder" web app using HTML, CSS, and JavaScript. The app will use the free The Movie Database (TMDb) API to search for movies.

First, explain what an API is in a simple analogy.

Second, outline the main JavaScript functions we will need to build. These should include functions for:
1. Fetching data from the TMDb API based on a search query, including how to handle an API key.
2. Displaying the list of movies on the page.
3. Handling potential errors if the API call fails.
```

::: info Pro Tip
When working with APIs, the first step is always to read the documentation. Ask your AI to "Find the documentation for The Movie Database (TMDb) API and explain how to get a free API key and how to make a basic search request." This will give you the foundational knowledge you need to start building.
:::

By completing these projects, you will have not only learned how to prompt an AI but also inadvertently absorbed the fundamental concepts of modern web development: CRUD operations, state management, numerical computation, conditional logic, data structuring, and API integration. You will have a portfolio of functional applications and a powerful new skill set for bringing your ideas to life.

## Key Takeaways

*   **Solidify your skills with portfolio projects.** The best way to learn is by building. These projects reinforce core concepts like CRUD operations, state management, data handling, and interacting with APIs.
* **Master CRUD (Create, Read, Update, Delete).** The to-do list project is a perfect exercise for understanding these fundamental operations that are the backbone of most web applications.
* **Learn to handle numbers and conditional styling.** The budget tracker teaches you how to work with numerical data, perform calculations, and visually represent data based on its value (e.g., red for expenses, green for income).
* **Work with complex data structures.** The recipe app introduces you to structuring data as an array of objects, a common pattern for managing collections of information.
* **Implement real-time filtering.** The recipe app's search functionality is a practical introduction to creating dynamic and responsive user interfaces that react instantly to user input.

## Remember This Even If You Forget Everything Else

The best way to learn is by building. The concepts of CRUD (Create, Read, Update, Delete), state management, and data handling are best understood by applying them to real projects. Completing these cornerstone projects will solidify your skills more than any amount of passive reading.
