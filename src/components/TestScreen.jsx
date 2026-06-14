import { useState } from 'react';
import { questions, calcStudyType } from '../data/questions';

function SegmentedProgress({ current, total }) {
  return (
    <div className="seg-progress" aria-label={`진행률 ${current} / ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`seg-dot${i < current ? ' filled' : ''}`} />
      ))}
    </div>
  );
}

export default function TestScreen({ onComplete, onBack }) {
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState([]);
  const [selected, setSelected] = useState(null);

  const q = questions[idx];
  const total = questions.length;

  function pickAnswer(value, label) {
    if (selected !== null) return;
    setSelected(label);
    const newAns = [...ans, value];

    setTimeout(() => {
      if (idx === total - 1) {
        onComplete(calcStudyType(newAns));
      } else {
        setAns(newAns);
        setIdx(idx + 1);
        setSelected(null);
      }
    }, 140);
  }

  function goBack() {
    if (idx === 0) {
      onBack();
    } else {
      setIdx(idx - 1);
      setAns(ans.slice(0, -1));
      setSelected(null);
    }
  }

  return (
    <div className="test-screen paper-screen">
      <div className="screen-body">
        <header className="test-header">
          <button className="icon-btn plain" onClick={goBack} aria-label="이전으로">
            ←
          </button>
          <span className="progress-label">{idx + 1} / {total}</span>
          <div className="bear-corner" aria-hidden="true">
            <span className="bear-face">
              <span className="bear-ear left" />
              <span className="bear-ear right" />
              <span className="bear-dot left" />
              <span className="bear-dot right" />
              <span className="bear-mouth">⌣</span>
            </span>
            <span className="bear-heart">♡</span>
          </div>
        </header>

        <SegmentedProgress current={idx + 1} total={total} />

        <main key={idx} className="question-wrap fade-in">
          <section className="question-area">
            <span className="q-tape" aria-hidden="true" />
            <span className="q-sparkle" aria-hidden="true">☆</span>
            <div className="question-box">
              <p className="question-text">{q.question}</p>
            </div>
          </section>

          <div className="options-wrap">
            {[
              { value: q.optionA.value, text: q.optionA.text, label: 'A' },
              { value: q.optionB.value, text: q.optionB.text, label: 'B' },
            ].map(opt => {
              const isSelected = selected === opt.label;

              return (
                <button
                  key={opt.label}
                  className={`option-btn${isSelected ? ' option-selected' : ''}`}
                  onClick={() => pickAnswer(opt.value, opt.label)}
                  disabled={selected !== null}
                >
                  <span className={`option-badge${isSelected ? ' badge-selected' : ''}`}>
                    {opt.label}
                  </span>
                  <span className="option-text">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
