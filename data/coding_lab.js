window.NORTHSTAR_CODING_LAB={
 version:"1.0.0",
 templates:{
  html:{label:"HTML Starter",language:"html",html:"<!doctype html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>NorthStar Lab</title>\n</head>\n<body>\n  <h1>Hello, NorthStar</h1>\n  <button id=\"helloBtn\">Click me</button>\n  <script>\n    document.querySelector('#helloBtn').addEventListener('click', () => {\n      console.log('Button clicked');\n      alert('Hello from your coding lab!');\n    });\n  <\/script>\n</body>\n</html>"},
  js:{label:"JavaScript",language:"javascript",html:"<div id=\"app\">Open the console and run the example.</div>\n<script>\nconst learner = { name: 'NorthStar learner', level: 'beginner' };\nconsole.log('Learner:', learner);\n</script>"},
  css:{label:"CSS",language:"html",html:"<style>\n.card { padding:24px; border-radius:20px; background:#eaf2ff; font-family:system-ui; }\n.card:hover { transform:translateY(-3px); }\n</style>\n<div class=\"card\">Hover me</div>"},
  python:{label:"Python",language:"python",html:"<div style=\"font-family:system-ui;padding:20px\"><b>Python note</b><p>Python execution is not available inside a static browser page yet. Use the mentor to generate Python, then run it in your local Python environment.</p></div>"}
 },
 starter:"html"
};