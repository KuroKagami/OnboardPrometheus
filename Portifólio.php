<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Portifólio</title>
    <link rel="stylesheet" href="./Data/CascadingPort.css">
</head>

<body>
    <?php include_once('./Data/Header.phtml') ?>
    <div class="content">
        <div id="left" class="flex-1">
            <h1>Hello World</h1>
            <img id="photo" class="circle" src="./img/me/Me.jpg" alt="Minha-foto">
            <div id="info">
                <button onclick="dynamicDisplayDiv('even')">
                    <h2>Home</h2>
                </button>
                <button onclick="dynamicDisplayDiv('odd')">
                    <h2>Contact Us</h2>
                </button>
                <a href="./Pojetos.php" class="link">
                    <h2>My Projects</h2>
                </a>
            </div>
        </div>
        <div id="right" class="flex-1">
            <div id="even">
                <h1 id="hello">About Me</h1>
                <div id="text">
                    <p>My name is Jean, and I will say a little about myself.</p>
                    <p>I started studying programming this year, but I always liked it and I loves robotic technology. I
                        also love music and I play some intruments.</p>
                    <p>I started learning by system development because I needed a guide, and had this opportunity that was
                        given by Senac.</p>
                    <p>But I wanna expand my knowledge in this area and working with robotics and AI. But I still don't know
                        which language I will continue programming, it will depend on which one I will identify with in the
                        future.</p>
                </div>
                <p>
                <div id="list">
                    <p class="listagem">languages that I have knowledge of so far:
                    <ul>
                        <li class="html">HTML</li>
                        <li class="css">CSS</li>
                        <li class="js">JS</li>
                        <li class="python">PYTHON</li>
                        <li class="php">PHP</li>
                        <li class="sql">SQL</li>
                        <li class="c1">C++</li>
                        <li class="c2">C#</li>
                    </ul>
                </div>
                <img id="robot" class="" src="./img/Robots/Piano.png" alt="robot">
                </p>
            </div>
            <div id="odd" class="hidden">
            <h1 id="hello">Contact Us</h1>
                    <div id="text">
                        <form name="myForm" id='myForm' action="" method="post" onsubmit="return validateForm()">
                            <fieldset class='box-form'>
                                <div class="name">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" required>
                                </div>
                                <div>
                                    <label for="email">E-mail</label>
                                    <input type="email" name="email" id="email" pattern="[a-z, 0-9]{}[@]{1}[a-z]{}" placeholder="example@gmail" required>
                                </div>
                                <div class="message">
                                    <label for="message">Message</label>
                                    <br>
                                    <textarea name="message" id="message" maxlength="256" placeholder="max 256" required></textarea>
                                </div>
                                <div class="phone">
                                    Enter your phone number: (Opcional)
                                    <br>
                                   <label for="ddd">DDD</label>
                                    <select name="ddd" id="ddd">
                                        <option value="null" hidden selected></option>
                                        <option value="">+1</option>
                                        <option value="">+55</option>
                                        <option value="">+10</option>
                                        <option value="">+55</option>
                                    </select>
                                    <br>
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                        placeholder="00 00000-0000" size="20" maxlength="13"/>
                                        <br>
                                        <small>Format: 00 00000-0000</small>
                                </div>
                                <div class="submit">
                                    <button type="submit" class="text-button">Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
            </div>
        </div>
    </div>
    <?php include_once('./Data/Footer.phtml') ?>
    <script src="./Data/ScriptPort.js"></script>
</body>

</html>