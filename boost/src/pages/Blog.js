import React, { useState, useEffect } from 'react';
import Footer from '../components/InputTools/Footer';

const Blog = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/yourfile.html')
            .then(response => response.text())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching the blog article file:', error));
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Footer/>
        </div>
    );
};

export default Blog;