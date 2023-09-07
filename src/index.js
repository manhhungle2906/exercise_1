<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello world</h1>

    <button id="my-button">Click Me</button>

    <ul id="my-list"></ul>

    <button id="add-data">Add data</button>

    <textarea id="my-textarea"></textarea>

    <script>
      // Create a button that prints "Hello world" when clicked
      document.getElementById("my-button").onclick = function () {
        console.log("Hello world");
        // Change the text inside the h1 tag to “My notebook”
        document.querySelector("h1").innerText = "Moi maailma";
      };

      // Add an <li> element with arbitrary text inside the <ul> tag when button clicked
      document.getElementById("add-data").onclick = function () {
        const li = document.createElement("li");
        // Add the text inside the textarea to the <li> tag
        li.innerText = document.getElementById("my-textarea").value;
        document.getElementById("my-list").appendChild(li);
      };
    </script>
  </body>
</html>