const cards = [
    {
       class: 'primary',
       front: () => '<h1>My Awesome Site</h1>',
       back: () => {
           return (`
                Language: HTML
                Client or Server: Read by the Client - Typically a browser
                Produces a top level heading
                Webpages should only have one of these
           `);
       },
    },
    {
        class: 'secondary',
        front: () => {
            return (`
                app.get('\', function(req,res){
                    res.send('Hello World!');
                });
            `);
        },
        back: () => {
            return (`
                Language: JavaScript
                Libraries: Express
                Client or Server: Server - Interpretted by Node
                An express route to listen for get requests at the root url of a domain
            `);
        },
    },
    {
        class: 'primary',
        front: () => {
            return (`
                $('.myFancyDiv').addClass('red');
            `);
        },
        back: () => {
            return (`
                Language: JavaScript
                Libraries: jQuery
                Client or Server: Client - Interpretted by a Browser, like Chrome
                JavaScript, utilizing the jQuery API to interact with the DOM
                Selects all elements with the class 'myFancyDiv' and adds a second class of 'red' to them
            `);
        },
    },
    {
        class: 'primary',
        front: () => {
            return (`
                .red {
                    background: #ff0000;
                }
            `);
        },
        back: () => {
            return (`
                Language: CSS
                Client or Server: Client - Read by the a browser, like Chrome
                CSS code to change the background of all elements 
                    with the HTML class attribute of red to the hex code #ff0000
            `);
        },
    },
    {
        class: 'secondary',
        front: () => {
            return (`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                        <title>Animals</title>
                    </head>
                    <body>
                        {{{ body }}}
                    </body>
                </html>
            `);
        },
        back: () => {
            return (`
                Language: A Moustache Templating Language (Handlebars) being used to compose HTML
                Libraries: Handlebars
                Client or Server: Server - All Handlebars is interpretted by Node and a response 
                    with the transpiled HTML is sent to the browser. The browser (the client) 
                    then reads the HTML to display
                    a formatted page to the user.
                Produces an HTML page that will have the Title of Animals, Content is determined
            `);
        },
    },
];

export default cards;
