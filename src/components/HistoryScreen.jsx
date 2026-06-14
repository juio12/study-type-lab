import { studyTypes } from '../data/studyTypes';

function formatDate(iso) {
  const d   = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())}  ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function HistoryScreen({ history, onBack, onViewResult }) {
  return (
    <div className="history-screen">
      <div className="screen-body">

        <div className="screen-header">
          <button className="icon-btn" onClick={onBack}>←</button>
          <h2 className="screen-title">나의 결과 기록 📋</h2>
          <span className="header-deco">☁️</span>
        </div>

        {history.length === 0 ? (
          <div className="empty-state">
            <span className="empty-emoji">📭</span>
            <p>아직 테스트 기록이 없어요!</p>
            <p>테스트를 진행해 보세요 😊</p>
          </div>
        ) : (
          <div className="history-list fade-in">
            {history.map((item, i) => {
              const type = studyTypes[item.type];
              return (
                <button key={i} className="history-item" onClick={() => onViewResult(item)}>
                  <div className="hist-icon">📅</div>
                  <div className="hist-info">
                    <span className="hist-date">{formatDate(item.date)}</span>
                    <span className="hist-name">{type.name}</span>
                  </div>
                  <span className="hist-char">{type.emoji}</span>
                  <div className="hist-arrow-btn">›</div>
                </button>
              );
            })}
          </div>
        )}

        <p className="history-hint">💡 클릭하면 해당 결과 페이지로 이동해요! ↗</p>

      </div>
    </div>
  );
}
