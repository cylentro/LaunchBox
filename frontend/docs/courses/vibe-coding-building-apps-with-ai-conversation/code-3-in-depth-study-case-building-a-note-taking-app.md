---
layout: doc

title: "Code 3 - In-Depth Study Case - Building a Note-Taking App"
description: "A step-by-step guide to building a complete note-taking web app from scratch using the Vibe Coding workflow. Learn to use AI prompts for ideation, tech stack selection, iterative code creation (HTML, CSS, JS), and deployment with GitHub Pages."

ogTitle: "Code 3 - In-Depth Study Case - Building a Note-Taking App"
ogDescription: "A step-by-step guide to building a complete note-taking web app from scratch using the Vibe Coding workflow. Learn to use AI prompts for ideation, tech stack selection, iterative code creation (HTML, CSS, JS), and deployment with GitHub Pages."

keywords: Vibe Coding project, build a web app, note-taking app, HTML, CSS, JavaScript, local storage, AI programming, step-by-step tutorial, GitHub Pages
---

# Module 3: In-Depth Study Case - Building a Note-Taking App

Theory is important, but building is where the real learning happens. In this module, we will put everything we've learned into practice by building a complete, functional note-taking web application from scratch. We will follow our 5-step Vibe Coding workflow meticulously, using a chain of prompts to guide our AI partner from a blank slate to a finished, deployable product.

Our goal is to create a web app that allows a user to create, edit, delete, and save notes. The notes should persist even when the browser is refreshed.

## Ideation & Feature Definition

We begin at step one of our workflow: defining the goal. We'll start a conversation with our AI partner to brainstorm the features for our Minimum Viable Product (MVP).

**Activity:** Start a new chat with Gemini or ChatGPT.

**Prompt:**

```Text
I want to build a simple note-taking web app. I've never coded before, so it needs to be as simple as possible. Let's brainstorm the core features for a minimum viable product (MVP). What are the absolute essential functions it needs to have to be useful? Please also suggest one "stretch goal" feature that would be cool to add if we have time.

Expected AI Output/Features:  
Your AI partner will likely suggest a list of core features similar to this:

* A way to create a new note.  
* A way to type text into the note (and maybe give it a title).  
* A way to save the note's content.  
* A way to see a list of all saved notes.  
* A way to delete a note.  
* Stretch Goal: The ability to save the notes in the browser so they don't disappear when the page is reloaded.
```

This list is our project scope. That "stretch goal" is key—it introduces the concept of **Local Storage**, which we will tackle to make our app truly useful.

::: info Pro Tip
When brainstorming with your AI, use the "Yes, and..." technique from improvisational theater. When the AI suggests a feature, accept it and build upon it. For example, if it suggests a "delete" button, you could respond, "Yes, and after deleting a note, show a temporary 'Note Deleted' confirmation message for a few seconds." This collaborative approach can lead to more creative and user-friendly designs.
:::

## Tech Stack Selection

Next, we ask our AI to act as a mentor and recommend the simplest technologies for the job.

**Activity:** Continue the conversation with your AI.

**Prompt:**

```Text
Act as a mentor for a beginner coder. For the note-taking app with the features we just discussed (including the stretch goal of saving notes in the browser), what is the simplest, most standard web technology stack to use? Please explain what each part of the stack does using a simple analogy, like building a house.

Expected AI Output/Stack:  
The AI will almost certainly recommend the foundational trifecta of the web: HTML, CSS, and JavaScript. Its explanation should resemble the classic "house" analogy.  
Teaching Point (The House Analogy):  
This is a powerful mental model for understanding how a website works.

* HTML (HyperText Markup Language) is the Skeleton. It provides the fundamental structure and content of your app. HTML defines the "rooms" and what's in them: a header for the title, a button for adding notes, and a container for the notes list. It's the framing of the house.  
* CSS (Cascading Style Sheets) is the Interior Design. It controls the visual presentation—the look and feel. CSS is the paint color, the furniture style, the lighting, and the layout. It makes your app aesthetically pleasing and easy to use.  
* JavaScript is the Electricity and Plumbing. It adds interactivity and functionality. It's the "engine" that makes the app *do* things. When you click the "Save" button (flip a switch), JavaScript runs the code that saves your note (turns on the light). It handles all the logic.
```

::: info Pro Tip
Don't get bogged down in choosing the "perfect" tech stack. For beginners, HTML, CSS, and JavaScript are the gold standard for a reason. They are the universal language of the web and the foundation for virtually all other web technologies. Master the basics first, and you'll be able to learn more advanced tools much more easily later on.
:::

## Code Creation (Iterative Prompting)

This is the core of our project. We will now build the app piece by piece, using our prompt framework to guide the AI. We will assemble the code in an online editor like CodePen to see our progress in real-time.

### Step 1: The HTML Structure

We start by asking for the "skeleton" of our app.

**Prompt:**

```text
Act as an expert web developer. 
Write the complete and simple HTML structure for our note-taking app. 
It needs a main title, a button to add a new note, and a main container area where the notes will appear. 
Use semantic HTML5 tags like <header> and <main>.
```

**Expected HTML Output:**

The AI should provide code similar to this basic structure:

```HTML
<!DOCTYPE html>  
<html lang="en">  
    <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>Vibe Notes</title>  
        <link rel="stylesheet" href="style.css">  
    </head>  
    <body>  
        <header>  
            <h1>Vibe Notes</h1>  
        </header>  
        <main>  
            <button id="add-note-btn">+</button>  
            <div id="notes-container">  
                </div>  
        </main>  
        <script src="script.js"></script>  
    </body>  
</html>
```

### Step 2: The CSS Styling

Now, let's make it look good. We'll ask for a clean, minimalist style.

**Prompt:**

```text
Now, write the CSS to style our note-taking app.
I'm looking for a clean, minimalist aesthetic, similar to apps like Apple Notes or Notion. 
Use a light gray background for the page, and make each note look like a white card with a subtle shadow. 
The 'add note' button should be a prominent circle. Provide the CSS in a single code block.
```

**Expected CSS Output:**

The AI will generate CSS to style the elements we defined in the HTML. The result will be similar to this:

```css
body {  
    background-color: #f4f4f9;  
    font-family: sans-serif;  
    margin: 0;  
}

#notes-container {  
    display: grid;  
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  
    gap: 16px;  
    padding: 24px;  
}

.note {  
    background-color: #ffffff;  
    border-radius: 8px;  
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);  
    padding: 16px;  
    height: 200px;  
    display: flex;  
    flex-direction: column;  
}

textarea {  
    border: none;  
    resize: none;  
    flex-grow: 1;  
    font-size: 16px;  
}

textarea:focus {  
    outline: none;  
}

#add-note-btn {  
    position: fixed;  
    bottom: 30px;  
    right: 30px;  
    width: 60px;  
    height: 60px;  
    border-radius: 50%;  
    background-color: #007aff;  
    color: white;  
    border: none;  
    font-size: 36px;  
    cursor: pointer;  
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);  
}
```

### Step 3: JavaScript (Function by Function)

Now for the "plumbing." We'll build the logic iteratively.

**Prompt 1: Add a New Note Element**

```text
Let's write the JavaScript. 
First, get the 'add-note-btn' and 'notes-container' elements. 
Then, create a function called addNote(). 
When the button is clicked, this function should create a new note element (a div with class 'note' containing a textarea) and append it to the 'notes-container'.
```

**Prompt 2: Save Notes to Local Storage**

```text
This is the most important part. 
We need to save the notes. 
Create two functions: saveNotes() and getNotes().  
getNotes() should retrieve the notes from Local Storage. 
If there's nothing in storage, it should return an empty array.  
Remember that Local Storage can only store strings, so you'll need to use JSON.stringify() to save and JSON.parse() to retrieve.
saveNotes() should take an array of note objects and save it to Local Storage.  
```

**Prompt 3: Update and Delete Notes**

```text
Now, let's connect everything. 
Modify the addNote() function. 
When a new note is created, it should have a unique ID. 
When the user types in the textarea, the saveNotes() function should be called to update the content in local storage. 
Also, add a double-click event to each note that, when triggered, asks the user for confirmation and then deletes the note (both from the screen and from local storage).
```

**Prompt 4: Load Notes on Page Start**

```text
Finally, write the code that runs when the page first loads. 
It should call getNotes() to retrieve all the saved notes from local storage and then loop through them, calling addNote() for each one to display them on the screen.

After this chain of prompts, the AI will have produced a complete JavaScript file. 
The resulting code will be a combination of the logic found in multiple tutorials and examples, creating a robust beginner-friendly script.6
```

::: info Pro Tip
Use an online code editor like CodePen or JSFiddle during the development process. These tools let you see the results of your HTML, CSS, and JavaScript code in real-time, without having to set up a local development environment. This instant feedback loop is invaluable for learning and debugging.
:::

## Testing & Publishing

Our app is built! Now let's test it and share it with the world.

### Activity 1: AI-Powered Code Review

It's always good to get a second pair of eyes on your code, even if that pair is artificial.

**Prompt:**

```text
Act as a senior software developer conducting a code review. 
Here is my complete code for the note-taking app (HTML, CSS, and JavaScript). 
Please review it for any obvious bugs, performance issues, or logical errors. 
Suggest improvements for readability and maintainability, keeping in mind that I am a beginner.

The AI will analyze your code and provide feedback, a crucial step for learning and improving.
```

### Activity 2: Publishing with GitHub Pages

Now, let's get our app online for free.

**Prompt:**

``` text
I have my app's files: index.html, style.css, and script.js.
I have a GitHub account but I'm a total beginner to Git.
Provide a simple, step-by-step guide on how to publish this as a live website for free using only the GitHub website interface (no command line).
```

**Expected Step-by-Step Guide: The AI should produce a clear, easy-to-follow guide.**

1. **Log in to GitHub.**
2. **Create a New Repository:** Click the "+" icon in the top right and select "New repository."
3. **Name Your Repository:** Give it a name, like my-notes-app. Make sure it is set to "Public." Click "Create repository."
4. **Upload Your Files:** On your new repository page, click the "Add file" button and select "Upload files." Drag and drop your index.html, style.css, and script.js files into the box. Click "Commit changes."
5. **Enable GitHub Pages:** Go to the "Settings" tab of your repository. In the left sidebar, click on "Pages."
6. **Configure the Source:** Under "Build and deployment," select "Deploy from a branch." In the branch dropdown, choose main and keep the folder as /root. Click "Save."
7. **Wait and View:** GitHub will now build and deploy your site. This can take a few minutes. After a while, a green banner will appear on the Pages settings screen with the URL of your live site, like `https://your-username.github.io/my-notes-app/`.

Congratulations! You have just built and deployed your first web application using Vibe Coding.

::: info Pro Tip
Don't be afraid to break things! The beauty of using version control like Git (even through the simple GitHub interface) is that you can always go back to a previous version. Experiment with new features, try different designs, and if something goes wrong, you can easily revert to a working copy. This freedom to experiment is essential for learning.
:::

## Key Takeaways
* **Start with a clear MVP.** Before writing any code, use your AI partner to brainstorm the absolute essential features. This defines your scope and prevents you from getting overwhelmed.
* **Use the House Analogy.** Understand the roles of your tech stack: HTML is the structure (skeleton), CSS is the presentation (interior design), and JavaScript is the functionality (electricity and plumbing).
* **Build function by function.** When writing JavaScript, prompt the AI to build one small piece of logic at a time. Create a function to add a note, then a function to save notes, then a function to delete them. This iterative approach is easier to debug.
* **Leverage Local Storage for persistence.** To make your app feel real, use the browser's local storage to save user data. Remember to use `JSON.stringify()` to save and `JSON.parse()` to retrieve data.
* **Deploy your work.** Use free and simple tools like GitHub Pages to publish your projects. Sharing your work is a great motivator and allows you to get feedback from others.

## Remember This Even If You Forget Everything Else
Build your application feature by feature, not all at once. Prompt for the HTML structure first, then the CSS styling, and then add the JavaScript functionality one function at a time. This iterative process is the key to managing complexity and creating a robust application.
