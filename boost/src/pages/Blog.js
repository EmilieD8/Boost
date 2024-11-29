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

    const divStyle = {
        backgroundColor: 'white',
        borderRadius: '20px',     // Rounded edges
        padding: '20px',
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Optional shadow for depth
    };

    return (
        <div
            style={divStyle}
            onClick={() => setShowFull(!showFull)}
        >
            {showFull
                ? <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                : <div dangerouslySetInnerHTML={{ __html: preview }} />
            }
        </div>
    );
}

const Blog = () => {
    const files = [
        'Essen als Energiequelle.html',
        'Kommunikation und Gefühle verstehen.html',
        'Gefühle verstehen.html',
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