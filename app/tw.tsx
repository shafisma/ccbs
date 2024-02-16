import { useState, useEffect } from 'react';

const Tw = () => {
    const words = ['Modern', 'Secure', 'Fast'];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(words[wordIndex].substring(0, charIndex));

            if (isDeleting) {
                setCharIndex(charIndex - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % words.length);
                    setCharIndex(0);
                }
            } else {
                setCharIndex(charIndex + 1);
                if (charIndex === words[wordIndex].length) {
                    setIsDeleting(true);
                }
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words]);

    return (
        <div className="grow self-stretch my-auto max-md:text-4xl">
        built to be <span className="grow self-stretch my-auto max-md:text-4xl text-blue-700">{text}
            </span>
            </div>
    );
};

export default Tw;
