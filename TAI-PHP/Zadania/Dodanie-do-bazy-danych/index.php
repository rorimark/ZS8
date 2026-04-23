<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wysyłanie do bazy danych</title>

    <style>
        .form-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        #form-container {
            display: flex;
            flex-direction: column;
            width: 30vw;
            height: 30vw;
            background-color: #fff7ef;
            padding: 5vw;
            border-radius: 32px;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            gap: 12px;
            align-items: center;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 3px;

        }
    </style>
</head>
<body>
<div class="form-container">



    <form action="dodaj_produkt.php" method="post" id="form-container">
        <header>
            <h2>Dodaj produkt</h2>
        </header>

        <div class="form-group">
            <label for="nazwa">Nazwa:</label>
            <input type="text" id="nazwa" name="nazwa" required>
        </div>

        <div class="form-group">
            <label for="cena">Cena (zł):</label>
            <input type="number" id="cena" name="cena" required>
        </div>

        <div class="form-group">
            <label for="promocja">Promocja:</label>
            <select name="promocja" id="promocja">
                <option value="0">Brak (0)</option>
                <option value="1">Aktywna (1)</option>
            </select>
        </div>

        <div class="form-group">
            <label for="id-dostawcy">ID Dostawcy:</label>
            <input type="number" id="id-dostawcy" name="id-dostawcy" min="1" required/>
        </div>

        <input type="submit" name="submit" value="Submit"/>
    </form>
</div>
</body>
</html>