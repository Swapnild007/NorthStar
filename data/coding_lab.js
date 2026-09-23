window.NORTHSTAR_CODING_LAB={
 version:"2.0.0",
 runtime:{
  javascript:"Browser sandbox",
  html:"Browser sandbox",
  css:"Browser sandbox",
  python:"Pyodide 0.314.0 browser runtime"
 },
 templates:{
  html:{
   label:"HTML Starter",
   language:"html",
   html:"<!doctype html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>NorthStar Lab</title>\n</head>\n<body>\n  <h1 id=\"title\">Hello, NorthStar</h1>\n  <button id=\"helloBtn\">Click me</button>\n  <script>\n    document.querySelector('#helloBtn').addEventListener('click', () => {\n      document.querySelector('#title').textContent = 'You changed the page!';\n      console.log('Button clicked successfully');\n    });\n  <\\/script>\n</body>\n</html>"
  },
  js:{
   label:"JavaScript",
   language:"javascript",
   html:"<div style=\"font-family:system-ui;padding:20px\"><h2 id=\"output\">Open the console</h2></div>\n<script>\nconst learner = { name: 'NorthStar learner', level: 'beginner' };\nconsole.log('Learner:', learner);\ndocument.querySelector('#output').textContent = 'JavaScript executed successfully.';\n<\\/script>"
  },
  css:{
   label:"CSS",
   language:"html",
   html:"<style>\n.card { padding:24px; border-radius:20px; background:#eaf2ff; font-family:system-ui; transition:.2s; }\n.card:hover { transform:translateY(-3px); }\n.card strong { color:#2563eb; }\n</style>\n<div class=\"card\"><strong>CSS is working.</strong><p>Hover this card and inspect the style.</p></div>"
  },
  python:{
   label:"Python",
   language:"python",
   html:"# NorthStar Python Lab\n# Python runs directly in your browser with Pyodide.\n\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nmessage = greet(\"NorthStar learner\")\nprint(message)\nprint(\"2 + 3 =\", 2 + 3)\nmessage"
  }
 },
 starter:"html"
};