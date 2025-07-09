    import React, { useState, useEffect, useRef } from "react";

    export default function Terminal() {
    const [outputLines, setOutputLines] = useState(['Type "Help"']);
    const [inFeedbackSession, setInFeedbackSession] = useState(false);
    const [feedbackData, setFeedbackData] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const inputRef = useRef();
    const outputRef = useRef();

    const predefinedAnswers = {
        HELP: 'Available commands: \nFEEDBACK: Accepts Feedback\nCREATOR: Shows the Creator\nVERSION: Shows current version\nTIME: Shows time\nEXIT: Resets Terminal',
        CREATOR: 'My creator is Shibjyoti Roy Chowdhury',
        VERSION: 'SHIBDOS version 1.0.0',
        TIME: new Date().toLocaleTimeString(),
        EXIT: 'Goodbye!',
    };

    const feedbackQuestions = [
        "What is your name?",
        "Rate this website (0-5) -- Your feedback is important?",
        "What did you like the most in this website?",
        "What can we improve?",
        "Any additional comments?",
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [outputLines]);

    const appendOutput = (text) => {
        setOutputLines((prev) => [...prev, text]);
    };

    const handleFeedbackSession = (input) => {
        if (currentQuestionIndex < feedbackQuestions.length) {
        if (currentQuestionIndex < 3 && input === '') {
            appendOutput('This field is required');
            return;
        } else if (
            currentQuestionIndex === 1 &&
            (isNaN(input) || input < 0 || input > 5)
        ) {
            appendOutput('A number within range of 0 to 5 is required');
            return;
        }

        setFeedbackData((prev) => ({
            ...prev,
            [`answer${currentQuestionIndex + 1}`]: input,
        }));

        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);

        if (nextIndex < feedbackQuestions.length) {
            appendOutput(feedbackQuestions[nextIndex]);
        } else {
            // Submit feedback
            fetch('/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...feedbackData, [`answer${nextIndex}`]: input }),
            })
            .then((res) => res.json())
            .then(() => {
                appendOutput('Thank you for your feedback!');
                appendOutput('Refresh the page to see your feedback\n');
            })
            .catch((err) =>
                appendOutput(`Error submitting feedback: ${err.message}`)
            );

            // Reset
            setInFeedbackSession(false);
            setCurrentQuestionIndex(0);
            setFeedbackData({});
        }
        }
    };

    const handleOtherCommands = (cmd) => {
        if (cmd === 'FEEDBACK') {
        setInFeedbackSession(true);
        appendOutput('Entering feedback mode...');
        appendOutput(feedbackQuestions[currentQuestionIndex]);
        } else if (cmd === 'EXIT') {
        setTimeout(() => setOutputLines(['Type "Help"']), 1000);
        } else if (predefinedAnswers[cmd]) {
        appendOutput(predefinedAnswers[cmd]);
        } else {
        appendOutput('Unknown command');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        const input = e.target.value.trim();
        if (!input) return;

        appendOutput(`$:> ${input}`);

        if (inFeedbackSession) {
            handleFeedbackSession(input);
        } else {
            handleOtherCommands(input.toUpperCase());
        }

        e.target.value = '';
        }
    };

    return (
    <section className=" sm:w-[50%]   px-4 py-6 sm:px-6 lg:px-10 bg-black text-green-400 font-mono mb-16 rounded-lg shadow-lg max-w-7xl mx-auto">
            <div className="mb-4">
            <div className="w-full  px-4 py-2 flex items-center gap-2 rounded-t-md">
                <span className="w-3 h-3 rounded-full bg-red-500 shadow-md"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-md"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 shadow-md"></span>
            </div>
            </div>
            <div className="bg-black border border-green-400 flex flex-col h-[40vh] sm:h-[45vh] rounded-md">
            <div
                ref={outputRef}
                className="flex-1 output overflow-auto p-2 whitespace-pre-line text-sm sm:text-base"
            >
                {outputLines.map((line, index) => (
                <div key={index}>{line}</div>
                ))}
            </div>
            <div className="border-t border-green-400 flex items-center px-2 py-1">
                <span className="prompt mr-2 text-sm sm:text-lg">$:&gt;</span>
                <input
                ref={inputRef}
                type="text"
                className="w-full bg-black text-green-400 outline-none text-sm sm:text-lg"
                placeholder="Type Help"
                onKeyDown={handleKeyDown}
                />
            </div>
            </div>

    </section>
    );

    }
