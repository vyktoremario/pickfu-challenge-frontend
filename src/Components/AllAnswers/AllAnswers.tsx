import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./AllAnswers.css";
import { client } from "../../App";

function AllAnswers() {
  const [answer, setAnswer] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const getAllAnswers = async () => {
      const data = await axios.get(
        "http://127.0.0.1:8000/answers"
      );
      const response: Record<string, string> = data.data;
      setAnswer(response.data as unknown as Record<string, string>[]);
    };
    getAllAnswers();
  }, []);

  useEffect(() => {
    client.onmessage = (message) => {
      const data = JSON.parse(message.data as string);
      if (answer.length >= 100) {
        answer.splice(answer.length - 1, 1);
      }
      setAnswer([data, ...answer]);
    };
  }, [answer]);

  return (
    <div className="all-answers">
      <h1>All Answers</h1>
      {answer.map((data) => (
        <Card key={data._id} allData={data} />
      ))}
    </div>
  );
}

export default AllAnswers;
