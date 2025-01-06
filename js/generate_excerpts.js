const fs = require('fs');
const path = require('path');
const axios = require('axios');

const apiKey = 'sk-proj-pfR2eiW6NLvIg7W92gkQT3BlbkFJMzrbaBOwmK3IBYtenY2X';
const postsDir = path.join(__dirname, 'source', '_posts');

async function generateExcerpt(content) {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-4/completions', {
        prompt: `Create a short excerpt for the following content:\n\n${content}`,
        max_tokens: 50, // Adjust the token limit as needed
        n: 1,
        stop: ['\n']
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data.choices[0].text.trim();
}

async function processPosts() {
    const files = fs.readdirSync(postsDir);

    for (const file of files) {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        const excerpt = await generateExcerpt(content);
        const updatedContent = content.replace(/<!-- excerpt -->/, excerpt);

        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        console.log(`Excerpt added to ${file}`);
    }
}

processPosts().catch(console.error);
