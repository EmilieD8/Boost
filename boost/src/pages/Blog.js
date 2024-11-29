import React, { useState, useEffect } from 'react';
import Footer from '../components/InputTools/Footer';


function BlogTeaser({ fileName }) {
    const [htmlContent, setHtmlContent] = useState('');
    const [showFull, setShowFull] = useState(false);

    useEffect(() => {
        fetch(`/${fileName}`)
            .then(response => response.text())
            .then(data => setHtmlContent(data))
            .catch(error => console.error(`Error fetching ${fileName}:`, error));
    }, [fileName]);

    // Create a preview by extracting the first paragraph
    const preview = htmlContent.split('</p>')[0] + '</p>';

    return (
        <div>
            {showFull
                ? <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                : <div dangerouslySetInnerHTML={{ __html: preview }} />
            }
            <button onClick={() => setShowFull(!showFull)}>
                {showFull ? 'Weniger anzeigen' : 'Mehr lesen'}
            </button>
        </div>
    );
}

const Blog = () => {
    const files = ['yourfile.html',
        'yourfile copy.html',
    ];

    return (
        <div>
            {files.map(fileName => (
                <BlogTeaser key={fileName} fileName={fileName} />
            ))}
            <Footer />
        </div>
    );
};

export default Blog;