import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { client } from "../../App";
import "./QuestionForm.css";

function QuestionForm() {
  const [input, setInput] = useState("");
  const { addToast } = useToasts();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.length < 20) {
      setInput("");
      addToast("Please provide a detailed answer to the question", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      console.log(client);
      client.send(
        JSON.stringify({
          answer: input,
        })
      );
      addToast("Submitted Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      setInput("");
    }
  };

  return (
    <div className="questionForm">
      <div className="questionForm__container">
        <h2 className="questionForm__title"><span className="questionForm__span">Question:</span> Is a hot dog a sandwich? Why?</h2>
        <form onSubmit={handleSubmit} className="questionForm__form">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        <Link to="/all-answers" className="questionForm__link">
          View all Answers
        </Link>
      </div>
    </div>
  );
}

export default QuestionForm;
