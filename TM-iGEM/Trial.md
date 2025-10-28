<!DOCTYPE html>
<html>
<head>
    <title>Testing 1, 2, 3...</title>
    <link rel = "stylesheet" href = "styles.css">
</head>

<body>
<nav>
    <ul class = "sidebar">
        <li onclick=closeSidebar()><a href =""><svg xmlns = "C:\Users\User\Coding Test\Images\close-svgrepo-com.svg"></svg></a></onclick></li>
        <li><a href = "#Home">Home</a></li>
        <li><a href = "#Project">Project</a></li>
        <li><a href = "#Wet-Lab">Wet Lab</a></li>
        <li><a href = "#Human-Practices">Human Practices</a></li>
    </ul>
    <ul>
        <li><a href = "#Home">Home</a></li>
        <li><a href = "#Project">Project</a></li>
        <li><a href = "#Wet-Lab">Wet Lab</a></li>
        <li><a href = "#Human-Practices">Human Practices</a></li>
        <li onclick=showSidebar()><a href = "#"><svg xmlns ="C:\Users\User\Coding Test\Images\menu-alt-svgrepo-com.svg" height = "48" view-box ="0 96 960 960" width = "48"></svg></a>
        </ul>
</nav>
<script>
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display ='flex';
    }
    function closeSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display ='none';
    }
</script>

</body>

<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>

<footer>
    <p>Copyright © 2024 Testing Document</p>
</footer>
</html>
