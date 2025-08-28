### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-getElementById: It's like yelling a super specific, unique name in a crowd. Only the ONE person with that exact name turns around. That's it.

-getElementsByClassName: This is like shouting "HEY EVERYONE WEARING A RED SHIRT!" A bunch of people (an HTML collection) who are wearing red shirts will look at you. It's a whole group.

-querySelector: You describe exactly what you're looking for with CSS rules, like "the first person on the left wearing a red shirt AND blue pants." This guy will find the very first person who matches that super specific description and just grab that one.

-querySelectorAll: This is the same as above, but you're greedy. Instead of just grabbing the first person you see with red shirt and blue pants, you make a list (a NodeList) of EVERY single person in the crowd who fits that description. You get 'em all.

### 2. How do you create and insert a new element into the DOM?

- Get the container

```js
const container = document.getElementById("container");
```

- Create The element:

```js
const newElement = document.createElement("div");
```

- Set content

```js
newElement.innerHTML = "<h1>New Element</h1>";
```

- Insert new element into the DOM

```js
container.appendChild(newElement);
```

### 3. What is Event Bubbling and how does it work?

- In JavaScript, event bubbling occurs when you do something on a child element, such as clicking a button, automatically triggers the same event on its parent elements.
- Example:

```js
document.getElementById("child").addEventListener("click", function () {
  consol.log("child clicked");
}); 
document.getElementById("parent").addEventListener("click", function () {
  consol.log("parent clicked");
});
```
- Output
```consol
child clicked
parent clicked
```

### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Event delegation is a smart way to handle events. Instead of adding a listener to every similar element, you add one to the parent, and then use event.target to see which child element was interacted with.
- Event delegation is a useful pattern that allows you to write cleaner code and create fewer event listeners with similar logic.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault Stops the browser from performing the default action for the event, such as following a link or submitting a form.

- Stops the event from bubbling up or being captured by the parent element.
