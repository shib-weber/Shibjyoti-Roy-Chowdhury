import React, { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [outputLines, setOutputLines] = useState([
    'Welcome to SHIBDOS ver 2.12.5',
    'Type "HELP" to initialize modules.\n'
  ]);
  const [inFeedbackSession, setInFeedbackSession] = useState(false);
  const [feedbackData, setFeedbackData] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const inputRef = useRef();
  const outputRef = useRef();

  const predefinedAnswers = {
    HELP: 'AVAILABLE INTERFACES:\n  HELP     - Display system command manifest\n  FEEDBACK - Initialize user telemetry feedback loop\n  CREATOR  - Output core developer diagnostics\n  VERSION  - Display shell firmware iteration\n  TIME     - Print current synchronized hardware clock\n  CLEAR    - Flush terminal console buffer\n  EXIT     - Terminate session instance',
    CREATOR: 'DEVELOPER ID: Shibjyoti Roy Chowdhury\nSTATUS: Active // Full-Stack Engineer',
    VERSION: 'SHELL FIRMWARE: SHIBDOS [v2.12.5-release]\nARCHITECTURE: x86_64 reactive-vdom',
    TIME: () => `SYSTEM TIME: ${new Date().toLocaleTimeString()}`,
    EXIT: 'Session terminated. Reinitializing core buffer...',
  };

  const feedbackQuestions = [
    "What is your name?",
    "Rate this website (0-5) -- Your feedback is important?",
    "What did you like the most in this website?",
    "What can we improve?",
    "Any additional comments?",
  ];

  useEffect(() => {
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
    if (currentQuestionIndex < 3 && input === '') {
      appendOutput('>> SYSTEM ERROR: This structural node field is required.');
      return;
    } 
    
    if (currentQuestionIndex === 1) {
      const parsedRating = parseInt(input, 10);
      if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
        appendOutput('>> VALIDATION ERROR: Telemetry metric must sit precisely within 0 - 5 bounds.');
        return;
      }
    }

    const updatedFeedback = {
      ...feedbackData,
      [`answer${currentQuestionIndex + 1}`]: input,
    };
    setFeedbackData(updatedFeedback);

    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);

    if (nextIndex < feedbackQuestions.length) {
      appendOutput(`\n[QUESTION 020${nextIndex + 1}/${feedbackQuestions.length}]`);
      appendOutput(feedbackQuestions[nextIndex]);
    } else {
      appendOutput('\n>> Packet compiled. Transmitting data package payload upstream...');
      
      // Target correct port on localhost to communicate with the Express server
      fetch('https://shibjyoti-roy-chowdhury-server.onrender.com/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFeedback),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Server transmission error");
          return res.json();
        })
        .then(() => {
          appendOutput('>> SUCCESS: Telemetry data logged successfully.');
        })
        .catch((err) =>
          appendOutput(`>> CRITICAL FAILURE: Pipeline transmission rejected: ${err.message}\n`)
        );

      setInFeedbackSession(false);
      setCurrentQuestionIndex(0);
      setFeedbackData({});
    }
  };

  const handleOtherCommands = (cmd) => {
    if (cmd === 'FEEDBACK') {
      setInFeedbackSession(true);
      appendOutput('\nInitializing telemetry session. Enter required parameters.');
      appendOutput(`[QUESTION 01/${feedbackQuestions.length}]`);
      appendOutput(feedbackQuestions[0]);
    } else if (cmd === 'CLEAR') {
      setOutputLines([]);
    } else if (cmd === 'EXIT') {
      appendOutput(predefinedAnswers.EXIT);
      setTimeout(() => setOutputLines(['Welcome to SHIBDOS ver 2.12.5', 'Type "HELP" to initialize modules.\n']), 1200);
    } else if (predefinedAnswers[cmd]) {
      const output = typeof predefinedAnswers[cmd] === 'function' ? predefinedAnswers[cmd]() : predefinedAnswers[cmd];
      appendOutput(output);
    } else {
      appendOutput(`>> COMMAND NOT FOUND: "${cmd}". Type "HELP" for valid system matrix hooks.`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const rawInput = e.target.value;
      const trimmedInput = rawInput.trim();

      if (trimmedInput === '' && !inFeedbackSession) return;

      appendOutput(`shibdos@user: ${rawInput}`);

      if (inFeedbackSession) {
        handleFeedbackSession(trimmedInput);
      } else {
        handleOtherCommands(trimmedInput.toUpperCase());
      }

      e.target.value = '';
    }
  };

  return (
    <section 
      id="terminalt"
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 mb-16 select-none"
      onClick={() => inputRef.current?.focus()}
    >
        {/* Section Heading Titles */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Dos Terminal
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyan-400 font-mono tracking-wider">
            {"[ Feedback_support_system ]"}
          </p>
        </div>
      {/* Outer Shell Wrapper Frame */}
      <div className="relative shadow-lg shadow-cyan-400 sm:w-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(16,185,129,0.15)] overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
        
        {/* Upper Operating Window Header Track bar */}
        <div className="w-full bg-slate-900/60 border-b border-emerald-500/20 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70 border border-red-600/40"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 border border-yellow-600/40"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-600/40"></span>
          </div>
          <span className="text-xs font-mono tracking-widest text-emerald-400/60 uppercase font-bold">
            shibdos_bash
          </span>
          <div className="w-12" />
        </div>

        {/* Console Readout Output Core with Native Cyber Scrollbar Rules */}
        <div 
          ref={outputRef}
          className="h-[320px] sm:h-[380px] overflow-y-auto p-4 font-mono text-xs sm:text-sm text-emerald-400 text-left leading-relaxed whitespace-pre-line bg-black/40
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-black/20
            [&::-webkit-scrollbar-thumb]:bg-emerald-500/20
            [&::-webkit-scrollbar-thumb]:rounded-full
            hover:[&::-webkit-scrollbar-thumb]:bg-emerald-500/40"
        >
          {outputLines.map((line, index) => (
            <div 
              key={index} 
              className={`w-full text-left truncate-none ${
                line.startsWith('shibdos@user') 
                  ? 'text-cyan-400 font-bold' 
                  : line.startsWith('>>') 
                  ? 'text-red-400' 
                  : 'text-emerald-400/90'
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Live Input Console Command Injector Row */}
        <div className="border-t border-emerald-500/20 bg-black/60 flex items-center px-4 py-3 font-mono">
          <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-tight mr-2.5 shrink-0 select-none">
            shibdos@user:
          </span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-emerald-300 outline-none border-none text-xs sm:text-sm font-mono tracking-wide caret-emerald-400 text-left"
            placeholder={inFeedbackSession ? "Type answer string..." : 'Type "HELP"'}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>

      </div>
    </section>
  );
}