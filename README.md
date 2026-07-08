<h1 align="center">
  <img src="https://drive.google.com/uc?export=view&id=1gZu8GvY4AUO0tzAeapCNMESdVKgk4BOF" alt="" width="100%" border="0" />
<br>

Fundamentals Node JS

</h1>

> Status from Project: <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" /> F I N I S H E D <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" />

## Shields

![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Badge](https://img.shields.io/github/issues/humbertoromanojr/FundamentalsNodeJS?logo=visual-studio-code&style=plastic&logo=appveyor)
![Badge](https://img.shields.io/github/forks/humbertoromanojr/FundamentalsNodeJS)
![Badge](https://img.shields.io/github/stars/humbertoromanojr/FundamentalsNodeJS)
![Badge](https://img.shields.io/github/license/humbertoromanojr/FundamentalsNodeJS)
![Badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fhumbertoromanojr%2FFundamentalsNodeJS)

## Libraries

- <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> — Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
  <br /><br />

- [Node JS](https://nodejs.org/en/)
  - [Http](https://github.com/nodejs/node/blob/main/doc/api/http.md)
  - [Fs](https://github.com/nodejs/node/blob/main/doc/api/fs.md)
  - [Crypto](https://github.com/nodejs/node/blob/main/doc/api/crypto.md)

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=" alt="" width="100%" border="0" />
</div>
<br />

### Install

Creating a Backend Project with Node.js <br />
`npm init -y` <br /><br />

Running the backend on port 3001<br />
`npm run dev`<br /><br />

Clone project to repository:<br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" />
git clone `https://github.com/humbertoromanojr/FundamentalsNodeJS`

<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> Go to `FundamentalsNodeJS` folder <br />

Install node_modules <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npm i`

Run application <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npm run dev`

##

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

## Author

<img src="https://avatars1.githubusercontent.com/u/6500430?s=460&u=42d7e22fa1c77b061505fe1cfc3fcaa3e2a4d1e5&v=4" width="80" alt="linkedin.com/in/junior-dev" />
<img src="https://drive.google.com/uc?export=view&id=1-y6rFrn4uqPfLx3nuUTXh14OeRGSZzHu" alt="" width="42" border="0" />
:guitar: Humberto Jr :guitar:
<br />

LinkedIn: linkedin.com/in/humbertoromanojr <br />
GitLab: gitlab.com/humbertoromanojr <br />
<img src="https://drive.google.com/uc?export=view&id=160InxEPlK0IynTEGEmQJDETo_8grncjI" alt="" width="22" border="0" />: astronomi@gmail.com <br />
<br />

Made with <img src="https://drive.google.com/uc?export=view&id=1bb7UVQdQc1QpCIGqaI2bh4YdAn6Ihah-" alt="" width="22" border="0" /> and lots of animation by :guitar: Humberto Jr :guitar:

##

<h2 align="center">
  <img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" /> Read more below <img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" />
</h2>

##

## Linux and Mac:

mkdir ~/projects <br />
cd ~/projects <br />
bash <br /><br />

## Windows CMD:

mkdir %USERPROFILE%\projects <br />
cd %USERPROFILE%\projects <br />
powershell <br /><br />

## Windows PowerShell:

mkdir $env:USERPROFILE\projects <br />
cd $env:USERPROFILE\projects <br /><br />

Next, create a new source file in the projects folder and call it hello-world.js.<br />

Open hello-world.js in any preferred text editor and paste in the following content:<br />

```
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

- Save the file. Then, in the terminal window, to run the hello-world.js file, enter:<br />

node hello-world.js<br />
bash<br /><br />

- Output like this should appear in the terminal:<br />

Server running at http://127.0.0.1:3000/<br />
console<br /><br />

- Now, open any preferred web browser and visit http://127.0.0.1:3000.<br />

- If the browser displays the string Hello, World!, that indicates the server is working.<br />
