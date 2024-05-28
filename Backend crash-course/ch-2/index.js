const http  = require('http');
const fs = require('fs');
 
// Read the index.html file once, at the start
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products = data.products[0]
const server = http.createServer((req, res) => {
 
    if(req.url.startsWith('/product')){
        const id = req.url.split('/')[2]
        const prd = products.find(p=>p.id===(+id))
        console.log(prd)
    }
    // case '/product':
    //         res.setHeader('Content-Type','text/html')
    //         let modifiedIndex = index.replace('**title**',products.title)
    //         .replace('**url**',products.thumbnail)
    //         .replace('**price**',products.price)
    //         .replace('**rating**',products.rating)
    //         res.end(modifiedIndex)
    //         break;
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(8080, () => {
    console.log('server started');
});
