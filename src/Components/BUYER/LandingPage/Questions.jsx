// import "./Questions.css";
// import { useState } from "react";

// function Questions() {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const questions = [
//         {
//             question: "What is your return policy?",
//             answer: "We offer a 30-day return policy for all our products. Items must be returned in their original condition and packaging. Please contact our customer service to initiate a return.",
//         },
//         {
//             question: "How long does shipping take?",
//             answer: "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days and delivered within 5-7 business days.",
//         },
//         {
//             question: "Do you ship internationally?",
//             answer: "Yes, we offer international shipping to many countries. Please check our shipping policy page for more details on the countries we ship to and the shipping rates.",
//         },
//         {
//             question: "Can I track my order?",
//             answer: "Yes, once your order is shipped, you will receive an email with a tracking number that you can use to track your order on our website.",
//         },
//         {
//             question: "What payment methods do you accept?",
//             answer: "We accept all major credit cards, PayPal, and other secure payment methods like Apple Pay and Google Pay.",
//         },
//     ];

//     const toggleQuestion = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className="questions">
//             <h2 className="questions-title">Frequently Asked Questions</h2>
//             <div className="questions-list">
//                 {questions.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`question-item ${activeIndex === index ? "active" : ""}`}
//                         onClick={() => toggleQuestion(index)}
//                     >
//                         <div className="question">{item.question}</div>
//                         <div className="answer">{activeIndex === index && <p>{item.answer}</p>}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Questions;




import "./Questions.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all our products. Items must be returned in their original condition and packaging. Please contact our customer service to initiate a return.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days and delivered within 5-7 business days.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we offer international shipping to many countries. Please check our shipping policy page for more details on the countries we ship to and the shipping rates.",
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order is shipped, you will receive an email with a tracking number that you can use to track your order on our website.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and other secure payment methods like Apple Pay and Google Pay.",
        },
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="questions">
            <h2 className="questions-title">Frequently Asked Questions</h2>
            <div className="questions-list">
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className={`question-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleQuestion(index)}
                    >
                        <div className="question">
                            {item.question}
                            <span className="dropdown-icon">
                                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </div>
                        <div className="answer">{activeIndex === index && <p>{item.answer}</p>}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
