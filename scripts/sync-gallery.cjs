const fs = require('fs');
const path = require('path');

const ASSETS_ROOT = 'public/assets/PROJETOS SITE ROMANO COMPANY';
const PROJECTS_DATA_PATH = 'src/data/projects.js';

function syncGallery() {
    console.log('🚀 Starting Robust Gallery Sync...');
    
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
        const allFiles = fs.readdirSync(fullPath)
            .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

        // Detect vertical file (look for "VERTICAL" in filename)
        const verticalFile = allFiles.find(f => f.toUpperCase().includes('VERTICAL'));
        
        console.log(`Checking folder: ${dir}`);
        if (verticalFile) console.log(`   Found Vertical: ${verticalFile}`);

        // Gallery files: exclude CAPA, HERO and VERTICAL
        const galleryFiles = allFiles.filter(f => 
            !f.toLowerCase().includes('capa') && 
            !f.toLowerCase().includes('hero') && 
            !f.toUpperCase().includes('VERTICAL')
        );

        const seenBases = new Set();
        const uniqueGallery = [];

        const prioritized = galleryFiles.sort((a, b) => {
            const extA = path.extname(a).toLowerCase();
            const extB = path.extname(b).toLowerCase();
            if (extA === '.jpg' || extA === '.jpeg') return -1;
            if (extB === '.jpg' || extB === '.jpeg') return 1;
            return 0;
        });

        prioritized.forEach(f => {
            const base = path.parse(f).name.toLowerCase();
            if (!seenBases.has(base)) {
                uniqueGallery.push(f);
                seenBases.add(base);
            }
        });

        uniqueGallery.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        const projectPath = `/assets/PROJETOS SITE ROMANO COMPANY/${dir}`;
        projectUpdates[dir] = {
            gallery: uniqueGallery.map(f => `${projectPath}/${f}`),
            mobileImage: verticalFile ? `${projectPath}/${verticalFile}` : null
        };
    });

    let content = fs.readFileSync(PROJECTS_DATA_PATH, 'utf8');

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
        const update = projectUpdates[dirName] || { gallery: [], mobileImage: null };
        console.log(`Updating ${projectId}: MobileImage = ${update.mobileImage}`);
        
        // Update gallery
        const galleryRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?gallery:\\s*\\[)[\\s\\S]*?(\\])`, 'g');
        content = content.replace(galleryRegex, `$1\n      ${update.gallery.map(f => `"${f}"`).join(',\n      ')}\n    $2`);

        // Update mobileImage
        const mobileRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?mobileImage:\\s*)(?:".*?"|null)`, 'g');
        content = content.replace(mobileRegex, `$1${update.mobileImage ? `"${update.mobileImage}"` : 'null'}`);
    });

    fs.writeFileSync(PROJECTS_DATA_PATH, content);
    console.log('✅ projects.js updated successfully!');
}

syncGallery();
