import { studyTypes } from '../data/studyTypes';
import { Characters } from './Characters';

function formatDate(iso) {
  const d   = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())}  ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function HistoryScreen({ history, onBack, onViewResult }) {
  const sampleHistory = [
    { type: 'PCI', date: '2026-05-28T22:15:00' },
    { type: 'PEI', date: '2026-05-20T20:48:00' },
    { type: 'SEI', date: '2026-05-10T18:32:00' },
  ];
  const displayHistory = history.length > 0 ? history : sampleHistory;

  return (
    <div className="history-screen paper-screen">
      <div className="screen-body">

        <div className="screen-header">
          <button className="icon-btn plain" onClick={onBack} aria-label="시작 화면으로">←</button>
          <h2 className="screen-title">나의 결과 기록</h2>
          <span className="header-deco clipboard">▤</span>
        </div>

        <div className="history-cloud" aria-hidden="true"><span /><span /></div>

        <div className="history-list fade-in">
          {displayHistory.map((item, i) => {
            const type = studyTypes[item.type];
            const Character = Characters[item.type];
            return (
              <button key={`${item.type}-${i}`} className="history-item" onClick={() => onViewResult(item)}>
                <div className="hist-icon">
                  <span>30</span>
                </div>
                <div className="hist-info">
                  <span className="hist-date">{formatDate(item.date)}</span>
                  <span className="hist-name">{type.name}</span>
                </div>
                <div className="hist-char" role="img" aria-label={type.name}>
                  <Character />
                </div>
                <div className="hist-arrow-btn">›</div>
              </button>
            );
          })}
        </div>

        <p className="history-hint">💡 클릭하면 해당 결과 페이지로 이동해요! ↗</p>

      </div>
    </div>
  );
}
