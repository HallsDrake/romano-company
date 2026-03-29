const fs = require('fs');
const path = require('path');

const ASSETS_ROOT = 'public/assets/PROJETOS SITE ROMANO COMPANY';
const PROJECTS_DATA_PATH = 'src/data/projects.js';

function syncGallery() {
    console.log('🚀 Starting Final Gallery Sync...');
    
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

        const allFiles = fs.readdirSync(fullPath);
        
        // Find specifically VERTICAL files
        const vertical = allFiles.find(f => f.toUpperCase().includes('VERTICAL') && /\.(jpg|jpeg|png|webp)$/i.test(f));
        
        // Find regular gallery files (deduplicated)
        const galleryFiles = allFiles.filter(f => 
            !f.toLowerCase().includes('capa') && 
            !f.toLowerCase().includes('hero') && 
            !f.toUpperCase().includes('VERTICAL') &&
            /\.(jpg|jpeg|png|webp)$/i.test(f)
        );

        const seen = new Set();
        const unique = [];
        galleryFiles.forEach(f => {
            const base = path.parse(f).name.toLowerCase();
            if (!seen.has(base) || f.toLowerCase().endsWith('.jpg')) {
                if (!seen.has(base)) {
                    unique.push(f);
                    seen.add(base);
                }
            }
        });

        const projectPath = `/assets/PROJETOS SITE ROMANO COMPANY/${dirName}`;
        const gallery = unique.map(f => `${projectPath}/${f}`);
        const mobileImage = vertical ? `${projectPath}/${vertical}` : null;

        console.log(`${projectId}: ${vertical ? 'FOUND VERTICAL' : 'no vertical'}`);

        // Inject
        const galleryRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?gallery:\\s*\\[)[\\s\\S]*?(\\])`, 'g');
        content = content.replace(galleryRegex, `$1\n      ${gallery.map(f => `"${f}"`).join(',\n      ')}\n    $2`);

        const mobileRegex = new RegExp(`(id:\\s*"${projectId}"[\\s\\S]*?mobileImage:\\s*)(?:".*?"|null)`, 'g');
        content = content.replace(mobileRegex, `$1${mobileImage ? `"${mobileImage}"` : 'null'}`);
    });

    fs.writeFileSync(PROJECTS_DATA_PATH, content);
    console.log('✅ Final Sync Complete!');
}

syncGallery();
