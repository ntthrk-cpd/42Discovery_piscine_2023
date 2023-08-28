## Exercice 00: Hello World

Archivos a entregar: helloworld.html

- [:pushpin:] Create a helloworld.html file.
- [:pushpin:] In this file display "Hello World"
- [:pushpin:] To view the result open your file in your browser. You should see Hello World.

<br>

---
### How to solve problems via Terminal.

***Command*** : 
```shell
mkdir -p ex00 && echo "Hello World" > ./ex00/helloworld.html && open ./ex00/helloworld.html
```

Run html file on server and view it using a browser.

```shell
pushd helloworld.html;  python3 -m http.server 9000; popd;
```
Then click the IP. address 0.0.0.0:9000 OR localhost:9000. <br>

<br>

|Command  |Description |Synopsis |
|--- |--- |--- |
|open | opens a file or URL <br>in the user's preferred application. |open {file , URL} |
|[pushd](https://linuxcommand.org/lc3_man_pages/pushdh.html) | Add directories to stack. |pushd [-n] [+N, -N, dir] |
|[popd](https://linuxcommand.org/lc3_man_pages/popdh.html) |Remove directories from stack. |popd [-n] [+N, -N, dir] |

<br>
Command to run python http server in Python 3. (need to install python3 first.) :

```shell
$python3 -m http.server [localhost:9000]
```
:snake: Install Python : https://wiki.python.org/moin/BeginnersGuide/Download <br>
:snake: Python HTTP Server : https://www.digitalocean.com/community/tutorials/python-simplehttpserver-http-server
<br>

---                                  

### How to solve problems via VS Code.

***Recommendation Tool***

IDE : <br>                  
- [VS code](https://code.visualstudio.com/learn/get-started/basics)

[Extensions](https://code.visualstudio.com/learn/get-started/extensions)  : <br>
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)                        
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) 
- Prettier         
- ESLint                          
- JavaScript (ES6) code snippets

***How to show Hello World in HTML***

    1. Create a file with helloworld.html
Open vs code >> file >> Newfile (Alt+Ctrl+N)

    2. Write the following code in the file
Code :                                                       

```html
 <!DOCTYPE html>
<html>
<head> 
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```
Description syntax:

    <!DOCTYPE html> - This is the document type declaration. It tells the browser that this is an HTML document.
    <html></html> - This is the root element of an HTML page.
    <head></head>> - This element contains meta information about the document.
    <title></title> - This element specifies a title for the document.
    <body></body> - This element contains the visible page content.
    <h1></h1> - This element defines a large heading.
[more...](https://www.w3schools.com/html/html_intro.asp)

    3. Open the file in a browser via Live Preview

Click 'Open Preview' area on the top right.




