export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen paper-screen">
      <div className="corner-cloud cloud-left" />
      <div className="corner-cloud cloud-right" />

      <span className="doodle d-star d1">★</span>
      <span className="doodle d-star d2">✦</span>
      <span className="doodle d-star d3">☆</span>
      <span className="doodle d-line d4">✧</span>
      <span className="doodle d-star d5">✦</span>

      <div className="start-illustration pencil" aria-hidden="true">
        <span className="pencil-tip" />
        <span className="pencil-body" />
        <span className="pencil-eraser" />
      </div>

      <div className="start-illustration book" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="start-illustration flask" aria-hidden="true">
        <span className="flask-neck" />
        <span className="flask-body" />
      </div>

      <main className="start-content fade-in">
        <h1 className="start-title">
          <span>공부</span> 유형 <span>연구소</span>
        </h1>
        <p className="start-desc">
          12개의 질문으로 알아보는
          <br />
          나만의 공부 유형 테스트!
        </p>
        <button className="start-btn" onClick={onStart}>
          테스트 시작하기 <span aria-hidden="true">›</span>
        </button>
      </main>
    </div>
  );
}
