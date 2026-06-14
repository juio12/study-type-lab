import { useState } from 'react';
import { questions, calcStudyType } from '../data/questions';

function SegmentedProgress({ current, total }) {
  return (
    <div className="seg-progress">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`seg-dot${i < current ? ' filled' : ''}`} />
      ))}
    </div>
  );
}

export default function TestScreen({ onComplete, onBack }) {
  const [idx, setIdx]           = useState(0);
  const [ans, setAns]           = useState([]);
  const [selected, setSelected] = useState(null);

  const q     = questions[idx];
  const total = questions.length;

  function pickAnswer(value) {
    if (selected !== null) return;
    setSelected(value);
    const newAns = [...ans, value];
    setTimeout(() => {
      if (idx === total - 1) {
        onComplete(calcStudyType(newAns));
      } else {
        setAns(newAns);
        setIdx(idx + 1);
        setSelected(null);
      }
    }, 350);
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
    <div className="test-screen">
      <div className="screen-body">

        <div className="test-header">
          <button className="icon-btn" onClick={goBack}>←</button>
          <span className="progress-label">{idx + 1} / {total}</span>
          <div className="bear-corner">
            <span className="bear-emoji">🐻</span>
            <span className="bear-heart">💜</span>
          </div>
        </div>

        <SegmentedProgress current={idx + 1} total={total} />

        <div key={idx} className="question-wrap fade-in">
          <div className="question-area">
            <span className="q-tape" />
            <span className="q-sparkle">✨</span>
            <div className="question-box">
              <p className="question-text">{q.question}</p>
            </div>
          </div>

          <div className="options-wrap">
            {[
              { value: q.optionA.value, text: q.optionA.text, label: 'A' },
              { value: q.optionB.value, text: q.optionB.text, label: 'B' },
            ].map(opt => {
              const isSelected = selected === opt.value;
              const isOther    = selected !== null && !isSelected;
              return (
                <button
                  key={opt.label}
                  className={`option-btn${isSelected ? ' option-selected' : ''}${isOther ? ' option-dimmed' : ''}`}
                  onClick={() => pickAnswer(opt.value)}
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
        </div>

      </div>
    </div>
  );
}
