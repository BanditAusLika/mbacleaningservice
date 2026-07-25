const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const sourcePath = path.join(buildDirectory, 'index.html');
const galleryDirectory = path.join(buildDirectory, 'gallery');
const galleryPath = path.join(galleryDirectory, 'index.html');

const sourceHtml = fs.readFileSync(sourcePath, 'utf8');
const galleryHtml = sourceHtml
  .replace(
    '<title>MBA Cleaning Services | Melbourne</title>',
    '<title>Cleaning Project Gallery | MBA Cleaning Services Melbourne</title>',
  )
  .replace(
    'content="MBA provides professional commercial and residential cleaning, pressure washing, steam cleaning and post-construction cleaning across Melbourne. Request a free quote."',
    'content="View MBA Cleaning Services project gallery with commercial, residential and specialist cleaning photos and videos from across Melbourne."',
  )
  .replace(
    '<link rel="canonical" href="https://mbacleaningservice.com/"/>',
    '<link rel="canonical" href="https://mbacleaningservice.com/gallery/"/>',
  )
  .replaceAll(
    'content="MBA Cleaning Services | Melbourne"',
    'content="Cleaning Project Gallery | MBA Cleaning Services Melbourne"',
  )
  .replace(
    'content="One responsive local team for commercial cleaning, home cleaning, pressure washing, steam cleaning and detailed project work across Melbourne."',
    'content="Browse commercial, residential and specialist cleaning project photos and videos from MBA Cleaning Services in Melbourne."',
  )
  .replace(
    'content="https://mbacleaningservice.com/"',
    'content="https://mbacleaningservice.com/gallery/"',
  );

fs.mkdirSync(galleryDirectory, { recursive: true });
fs.writeFileSync(galleryPath, galleryHtml);
