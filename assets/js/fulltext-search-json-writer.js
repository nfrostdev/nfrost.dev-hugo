const fs = require('fs');
const contentPath = 'content';
const publicPath = 'public';

// TODO: Support recursive file path checking.
function writeHugoSearchJSON() {
    const content = [];
    console.log('Reading content folder.');
    fs.readdirSync(contentPath).forEach(fileName => {
        fs.readFile(contentPath + '/' + fileName, (error, data) => {
            console.log('Reading file: ' + fileName);
            data = data.toString();

            // Get the title of the page.
            let title = data.match(/title: (.*)/g);
            if (title) {
                title = title.toString().replace('title: ', '').replace(/"+/g, ' ').trim()
            }

            // Remove newlines.
            data = data.replace(/\n/g, ' ');
            // Remove dashes.
            data = data.replace(/-+/g, ' ');
            // Remove multiple spaces.
            data = data.replace(/ +/g, ' ');
            // Remove quotation marks.
            data = data.replace(/"+/g, ' ');
            // Trim the content.
            data = data.trim();

            const payload = {
                title: title,
                // Clean up indexes and remove the .md to create a path.
                path: '/' + fileName.replace('_index.md', '').replace('.md', ''),
                content: data
            };
            content.push(JSON.stringify(payload));
        });
    });
    setTimeout(() => {
        fs.unlink(publicPath + '/search.json', error => {
            error
                ? console.log('No old search.json was found for deletion, creating a new one.')
                : console.log('Old search.json deleted.')
        });
    }, 500);
    setTimeout(() => {
        fs.writeFile(publicPath + '/search.json', '[' + content.join(',') + ']', error => {
            if (error) throw error;
            console.log('Saved file: ' + publicPath + '/search.json')
        })
        return true;
    }, 1000);
}

writeHugoSearchJSON()