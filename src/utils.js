export const analyze = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hi') || lowerText.includes('hello'))
      return 'Hi, how can I help you?';
    else if (lowerText.includes('what is java?'))
      return 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible';
    else if (lowerText.includes('what is javascript?'))
      return 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.';
      else if (lowerText.includes('what is python?'))
      return 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected.'
    return "I'm sorry, but I don't have the answer to that question. Can you please ask something else?";
  }
  