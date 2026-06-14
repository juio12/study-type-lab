import { studyTypes } from '../data/studyTypes';

export default function ResultScreen({ result, onRetake, onHistory, onHome }) {
  const type = studyTypes[result.type];

  return (
    <div className="result-screen">
      <div className="screen-body">

        <div className="screen-header">
          <button className="icon-btn" onClick={onHome}>←</button>
          <h2 className="screen-title">나의 공부 유형 결과</h2>
          <span className="header-deco">⭐</span>
        </div>

        <div className="result-card fade-in">
          <div className="result-top">
            <div className="result-char-wrap">
              <span className="result-char">{type.emoji}</span>
            </div>
            <div className="result-info">
              <div className="result-name-badge">
                {type.name} <span className="name-star">✦</span>
              </div>
              <p className="result-subtitle">{type.subtitle}</p>
              <div className="tags-row">
                {type.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="result-details">
            <div className="detail-box green-box">
              <h4 className="detail-title green-title">추천 공부법</h4>
              <ul className="detail-list">
                {type.tips.map((tip, i) => (
                  <li key={i}>
                    <span className="check green-check">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-box pink-box">
              <h4 className="detail-title pink-title">주의할 점</h4>
              <ul className="detail-list">
                {type.cautions.map((c, i) => (
                  <li key={i}>
                    <span className="check pink-check">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="result-buttons">
          <button className="btn-retake" onClick={onRetake}>다시 테스트하기 ↺</button>
          <button className="btn-history" onClick={onHistory}>히스토리 보기 🗂</button>
        </div>

      </div>
    </div>
  );
}
