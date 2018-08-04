const cards = [
    {
       class: 'primary',
       front: () => {
        return (`
           <h1>My Awesome App</h1>
        `);
        },
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
    {
        class: 'primary',
        front: () => {
            return (`
                #invisibilityCloak {
                    visibility:hidden;
                }
            `);
        },
        back: () => {
            return (`
                Language: CSS
                Client or Server: Client - Read by the a browser, like Chrome
                CSS code that sets the visibility of a single element with the id
                    of invisibilityCloak to hidden. visibility is different than display in 
                    that visibility: hidden won't show in the browser page, but a screen reader
                    will still read the content.
            `);
        },
    },
    {
        class: 'primary',
        front: () => {
         return (`
            <header>
                <nav>
                    <ul class="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-me">About Me</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact-me">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
         `);
         },
        back: () => {
            return (`
                 Language: HTML
                 Client or Server: Read by the Client - Typically a browser
                 An HTML5 Semantic Header Element containing site navigation with
                    a css unstyled list with 4 list items that contain links to site urls
            `);
        },
     },
     {
        class: 'secondary',
        front: () => {
            return (`
                connection.query('SELECT * FROM awesomeTable', function(err, results){
                    if(err) console.log(err);
                    console.log(results);
                })
            `);
        },
        back: () => {
            return (`
                Language: JavaScript
                Libraries: mysql
                Client or Server: Server - Interpretted by Node and queries a MySQL Server for Data
                Code in a node application to Select all columns from MySQL table awesomeTable
                    and console the results to the terminal
            `);
        },
    },
    {
        class: 'primary',
        front: () => {
            return (`
               var el = document.getElementByID('#awesomeElement');
            `);
        },
        back: () => {
            return (`
                Language: JavaScript
                Client or Server: Client - Interpretted by a Browser, like Chrome
                JavaScript thats selects the element with the id awesomeElement from the DOM
                    and stores in a variable named el
            `);
        },
    },
    {
        class: 'secondary',
        front: () => {
            return (`
                <p>Type: {{characterClass}}</p>
                <p>Name: {{characterName}}</p>
                <p>Fierceness: {{fierceness}}</p>
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
                Produces 3 paragraphs tags with both hard-coded content and variable content determined by the server
            `);
        },
    },
];

export default cards;
