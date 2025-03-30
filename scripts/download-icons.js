const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = {
  'nextjs.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg',
  'react.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg',
  'typescript.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg',
  'tailwind.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tailwindcss.svg',
  'nodejs.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg',
  'firebase.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/firebase.svg',
  'vercel.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg',
  'mongodb.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mongodb.svg',
  'postgresql.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg',
  'docker.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg',
  'aws.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonaws.svg',
  'graphql.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/graphql.svg',
  'redux.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/redux.svg',
  'jest.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jest.svg',
  'git.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg',
  'cicd.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg',
  'web3.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/web3dotjs.svg',
  'api.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazonapigateway.svg',
  'seo.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg',
  'pwa.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/progressivewebapp.svg'
};

const downloadIcon = (filename, url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(path.join(__dirname, '../public/tech', filename)))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const downloadAllIcons = async () => {
  const techDir = path.join(__dirname, '../public/tech');
  if (!fs.existsSync(techDir)) {
    fs.mkdirSync(techDir, { recursive: true });
  }

  for (const [filename, url] of Object.entries(icons)) {
    try {
      await downloadIcon(filename, url);
      console.log(`Downloaded ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error.message);
    }
  }
};

downloadAllIcons(); 