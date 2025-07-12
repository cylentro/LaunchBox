---
layout: doc

title: "Code 5 - The Art of Debugging with AI"
description: "Learn the essential skill of debugging. Understand how to use browser developer tools, interpret common errors, and craft effective AI prompts to fix bugs and learn from your mistakes."

ogTitle: "Code 5 - The Art of Debugging with AI"
ogDescription: "Learn the essential skill of debugging. Understand how to use browser developer tools, interpret common errors, and craft effective AI prompts to fix bugs and learn from your mistakes."

keywords: Vibe Coding, debugging, AI debugging, JavaScript errors, developer tools, console errors, bug fixing, error handling, prompt engineering for bugs
---

# Module 5: The Art of Debugging with AI

Welcome to what might be the most important module in this course. So far, you've learned how to build applications when things go right. But in the real world of development, things often go wrong. Code has bugs, features don't work as expected, and error messages appear. This is normal.

A great builder isn't someone who never makes mistakes; they're someone who knows how to fix them. In this module, you'll learn the art of debugging—the process of finding and fixing errors—with your AI partner by your side.

## Your Most Powerful Tool: The Browser Console

Every modern web browser (like Chrome, Firefox, and Edge) comes with a built-in set of "Developer Tools." The most important part of this toolkit for us is the **Console**. The Console is where the browser reports errors, warnings, and other messages from your code.

**How to Open the Console:**

* **Windows/Linux:** Press `Ctrl + Shift + J`
* **Mac:** Press `Cmd + Option + J`

When your app isn't working, the Console is the very first place you should look.

## Speaking the Language of Errors

Error messages can look intimidating, but they are your friends. They are clues that tell you what went wrong and where. Here are a few common errors you'll encounter:

* **`Uncaught ReferenceError: myFunction is not defined`**: This means you're trying to use a variable or function that doesn't exist or hasn't been created yet. Often caused by a typo in the name.
* **`Uncaught TypeError: Cannot read properties of null`**: You're trying to do something with an element that your JavaScript couldn't find in the HTML. This is often because your script is running before the HTML has loaded, or there's a typo in an ID or class name.
* **`GET file:///.../style.css net::ERR_FILE_NOT_FOUND` (or a 404 error)**: The browser couldn't find a file you linked, like your CSS or JavaScript file. Check for typos in the file path in your `<link>` or `<script>` tags.

## The AI Debugging Workflow

When you encounter a bug, don't panic. Follow this simple, repeatable process.

1. **Reproduce the Bug:** What action causes the error? Can you make it happen every time? (e.g., "The app crashes when I click the 'Add' button twice.")
2. **Check the Console:** Open the Developer Tools and look for any red error messages.
3. **Copy the Evidence:** Copy the *exact* error message from the console.
4. **Talk to Your AI:** Start a conversation with your AI partner using a structured prompt.

### The Perfect Debugging Prompt

Don't just say "My code is broken." Give the AI everything it needs to help you.

**Prompt Framework:** **[Context] + [Problem] + [Error Message] + [Code] + [Question]**

**Example Prompt:**

```text
[Context] I am building a simple to-do list app. I have an HTML file, a CSS file, and a JavaScript file.
[Problem] When I type a task and click the "Add Task" button, nothing happens. The task does not appear on the list.
[Error Message] The browser console shows this error: "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"

[Code] Here is my relevant JavaScript code:
const addBtn = document.getElementById('add-button'); // The button ID in HTML is actually 'add-task-btn'
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  // ... code to add task
});

[Question] Can you explain what this error means and how to fix my code?
```

By providing this level of detail, you are no longer just asking for a fix; you are asking for a lesson. The AI can now see the mismatch between your HTML and your JavaScript and give you a precise, educational answer.

::: info Pro Tip
Always ask your AI to *explain* the fix, not just provide it. Use prompts like, "Explain why my original code was wrong and why your suggestion works." This turns every bug into a valuable learning opportunity and helps you avoid making the same mistake in the future.
:::

## Remember This Even If You Forget Everything Else

When your code is broken, the first thing you should do is check the browser console. Copy the exact error message and paste it into your AI chat, along with your code and a description of the problem. This is the fastest path to a solution.

## Key Takeaways

* **Bugs are normal and expected.** The most important skill isn't avoiding errors, but knowing how to fix them efficiently.
* **The Browser Console is your best friend.** When something goes wrong, the first step is always to open the developer tools and check the console for error messages.
* **Error messages are clues, not accusations.** Learn to read common errors (like `ReferenceError` and `TypeError`) to understand the source of the problem.
* **Use a structured debugging prompt.** Provide your AI with the **Context**, the **Problem**, the exact **Error Message**, the relevant **Code**, and a clear **Question**. This gives the AI the information it needs to help you effectively.
* **Ask for explanations, not just fixes.** Turn every bug into a learning opportunity by asking your AI to explain *why* the error occurred and *why* the solution works. This is the fastest way to improve your skills.
