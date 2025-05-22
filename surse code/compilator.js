document.getElementById('run-btn').addEventListener('click', function () {

    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;
    var cppCode = document.getElementById('cpp-code').value;

    var output = document.getElementById('output');

    if (cppCode) {

        var url = "https://api.jdoodle.com/v1/execute";
        var data = {
            "clientId": "YOUR_CLIENT_ID", //Client ID-ul tău JDoodle
            "clientSecret": "YOUR_CLIENT_SECRET",  // Client Secret-ul tău JDoodle
            "script": cppCode,
            "language": "cpp",
            "versionIndex": "0"
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {

                var cppResult = result.output || result.error;
                output.contentDocument.open();
                output.contentDocument.write(`
                <html><body><pre>${cppResult}</pre></body></html>
            `);
                output.contentDocument.close();
            })
            .catch(error => {
                console.error("Eroare JDoodle:", error);
            });
    } else {

        var fullCode = `
            <!DOCTYPE html>
            <html lang="ro">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    ${cssCode}
                </style>
            </head>
            <body>
                ${htmlCode}
                <script>
                    ${jsCode}
                </script>
            </body>
            </html>
        `;

        output.contentDocument.open();
        output.contentDocument.write(fullCode);
        output.contentDocument.close();
    }
});
