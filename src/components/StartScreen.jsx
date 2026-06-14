export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      {/* 반짝이 장식 - 배경 이미지 위에 오버레이 */}
      <span className="s-sp s1">✦</span>
      <span className="s-sp s2">✦</span>
      <span className="s-sp s3">✧</span>
      <span className="s-sp s4">✦</span>
      <span className="s-sp s5">✧</span>
      <span className="s-sp s6">✦</span>
      <span className="s-sp s7">✧</span>

      <div className="start-content fade-in">
        <h1 className="start-title">공부 유형 연구소</h1>
        <p className="start-desc">
          12개의 질문으로 알아보는<br />
          나만의 공부 유형 테스트!
        </p>
        <button className="start-btn" onClick={onStart}>
          테스트 시작하기 ›
        </button>
      </div>
    </div>
  );
}
