import { useState } from "react";

function FaqItem({ id, question, answer }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <div className="faq-q">
        <h3>
          <button
            type="button"
            className="faq-q-btn"
            aria-expanded={open}
            aria-controls={id}
            onClick={toggle}
          >
            {question}
          </button>
        </h3>
        <span aria-hidden="true" onClick={toggle}> + </span>
      </div>
      <div className="faq-answer" id={id}>
        {answer}
      </div>
    </div>
  );
}

export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <FaqItem key={item.question} id={`faq-answer-${i}`} {...item} />
      ))}
    </div>
  );
}
