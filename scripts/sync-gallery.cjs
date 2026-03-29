const fs = require('fs');
const path = require('path');

const ASSETS_ROOT = path.resolve('public/assets/PROJETOS SITE ROMANO COMPANY');
const PROJECTS_DATA_PATH = path.resolve('src/data/projects.js');

function syncGallery() {
    const projectMap = {
        '1 - GRAND COFFEE HOUSE': 'grand-coffee',
        '2 - ROYALE GASTROBAR': 'royale',
        '3 - AKARI SUSHI': 'akari',
        '4 - AIVORA': 'aivora',
        '5 - ELLURE': 'ellure',
        '6 - BLOOM PIZZARIA': 'bloom',
        '7 - BURGER DOS TONHAO': 'burger-tonhao',
        '8 - LACOS ESMALTERIA': 'lacos',
        '9 - IMAGING ACADEMY': 'imaging-academy'
    };

    let content = fs.readFileSync(PROJECTS_DATA_PATH, 'utf8');

    Object.entries(projectMap).forEach(([dirName, projectId]) => {
        const fullPath = path.join(ASSETS_ROOT, dirName);
        if (!fs.existsSync(fullPath)) return;

        const files = fs.readdirSync(fullPath);
        
        // Find any file that has VERTICAL in it
        let mobileImage = null;
        for (const file of files) {
            if (file.toLowerCase().includes('vertical')) {
                mobileImage = `/assets/PROJETOS SITE ROMANO COMPANY/${dirName}/${file}`;
                break;
            }
        }

        // Regular gallery
        const gallery = files
            .filter(f => !/capa|hero|vertical/i.test(f) && /\.(jpg|jpeg|png|webp)$/i.test(f))
            .map(f => `/assets/PROJETOS SITE ROMANO COMPANY/${dirName}/${f}`);

        console.log(`${projectId}: ${mobileImage ? 'Found' : 'Miss'}`);

        // Update
        const galleryRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?gallery:\\s*\\[)[\\s\\S]*?(\\])`, 'g');
        content = content.replace(galleryRegex, `$1\n      ${gallery.map(f => `"${f}"`).join(',\n      ')}\n    $2`);

        const mobileRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?mobileImage:\\s*)(?:".*?"|null)`, 'g');
        content = content.replace(mobileRegex, `$1${mobileImage ? `"${mobileImage}"` : 'null'}`);
    });

    fs.writeFileSync(PROJECTS_DATA_PATH, content);
}

syncGallery();
