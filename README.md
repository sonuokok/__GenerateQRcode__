# __GenerateQRcode__
Its a project using html, css &amp; js. where a persion can fid some information and it generate an qrcode containing that info.

## Need for Project 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>QR Code Generator</title>
</head>
<body>
    <div class="container">
        <h1>QR Code Generator</h1>

        <div class="form">
            <div class="element">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Enter name">
                </div>
                
                <div class="form-group gap">
                    <label for="profession">Profession</label>
                    <input type="text" id="profession" placeholder="Enter profession">
                </div>
            </div>
            <div class="element">
                <div class="form-group">
                    <label for="experience">Experience</label>
                    <input type="text" id="experience" placeholder="Enter experience">
                </div>
                <div class="form-group gap">
                    <label for="skills">Skills</label>
                    <input type="text" id="skills" placeholder="Enter skills">
                </div>
            </div>

            <button id="generateBtn">Generate QR Code</button>
        </div>

    </div>
    
    <div id="qrcode" class="qrcode"></div>


    <script src="qrcode.min.js"></script>
    <script src="script.js"></script>
</body>
</html>




```
