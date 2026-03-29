const fs = require('fs');
const path = require('path');

const ASSETS_ROOT = 'public/assets/PROJETOS SITE ROMANO COMPANY';
const PROJECTS_DATA_PATH = 'src/data/projects.js';

function syncGallery() {
    console.log('🚀 Starting Gallery Sync...');

    if (!fs.existsSync(ASSETS_ROOT)) {
        console.error('❌ Assets root not found:', ASSETS_ROOT);
        return;
    }

    const directories = fs.readdirSync(ASSETS_ROOT).filter(f =>
        fs.statSync(path.join(ASSETS_ROOT, f)).isDirectory()
    );

    const projectUpdates = {};

    directories.forEach(dir => {
        const fullPath = path.join(ASSETS_ROOT, dir);
        const files = fs.readdirSync(fullPath)
            .filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'))
            .filter(f => !f.toLowerCase().includes('capa') && !f.toLowerCase().includes('hero'))
            .sort((a, b) => {
                // Natural sort for numbers
                return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
            });

        const projectPath = `/assets/PROJETOS SITE ROMANO COMPANY/${dir}`;
        projectUpdates[dir] = files.map(f => `${projectPath}/${f}`);
    });

    // Read current projects.js
    let content = fs.readFileSync(PROJECTS_DATA_PATH, 'utf8');

    // For each project in directories, we need to map it to the project ID in the code
    // We can use a simple mapping or just look for the title/directory number
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

    Object.entries(projectMap).forEach(([dirName, projectId]) => {
        const galleryFiles = projectUpdates[dirName] || [];
        const galleryString = JSON.stringify(galleryFiles, null, 6);

        // Regex to find the gallery array for a specific project ID
        const regex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?gallery:\\s*\\[)[\\s\\S]*?(\\])`, 'g');
        content = content.replace(regex, `$1\n      ${galleryFiles.map(f => `"${f}"`).join(',\n      ')}\n    $2`);
    });

    fs.writeFileSync(PROJECTS_DATA_PATH, content);
    console.log('✅ projects.js updated successfully with all found assets!');
}

syncGallery();
