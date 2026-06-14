// 12 questions across 3 dimensions (4 each)
// Dimension 1 (Q1-4): Planning(P) vs Spontaneous(S)
// Dimension 2 (Q5-8): Concept(C) vs Exercise/Problems(E)
// Dimension 3 (Q9-12): Individual(I) vs Group(G)
export const questions = [
  {
    id: 1,
    question: '공부를 시작할 때 나는?',
    optionA: { text: '계획을 세우고 차근차근 시작한다', value: 'P' },
    optionB: { text: '일단 시작하고 하면서 생각한다', value: 'S' },
  },
  {
    id: 2,
    question: '시험 2주 전, 나의 모습은?',
    optionA: { text: '이미 계획표를 짜고 공부하고 있다', value: 'P' },
    optionB: { text: '아직 여유 있다고 생각하며 쉬고 있다', value: 'S' },
  },
  {
    id: 3,
    question: '오늘의 공부 목표를 세울 때?',
    optionA: { text: '할 분량을 정해두고 반드시 끝낸다', value: 'P' },
    optionB: { text: '기분에 따라 하고 싶은 것을 한다', value: 'S' },
  },
  {
    id: 4,
    question: '계획이 예상대로 안 되면?',
    optionA: { text: '수정 계획을 세워 다시 정상 궤도에 올린다', value: 'P' },
    optionB: { text: '그냥 그때그때 맞춰가면 된다고 생각한다', value: 'S' },
  },
  {
    id: 5,
    question: '새로운 내용을 공부할 때?',
    optionA: { text: '개념을 완전히 이해한 후 문제를 푼다', value: 'C' },
    optionB: { text: '일단 문제를 풀면서 개념을 익힌다', value: 'E' },
  },
  {
    id: 6,
    question: '수학 공부를 할 때 나는?',
    optionA: { text: '공식의 원리와 유도 과정을 이해하려 한다', value: 'C' },
    optionB: { text: '공식을 외우고 빠르게 문제를 많이 푼다', value: 'E' },
  },
  {
    id: 7,
    question: '모르는 문제가 나왔을 때?',
    optionA: { text: '개념책을 다시 찾아보며 원리를 파악한다', value: 'C' },
    optionB: { text: '해설을 보고 비슷한 문제를 더 풀어본다', value: 'E' },
  },
  {
    id: 8,
    question: '공부할 때 성취감을 느끼는 순간은?',
    optionA: { text: '개념이 완전히 이해되었을 때', value: 'C' },
    optionB: { text: '어려운 문제를 드디어 맞췄을 때', value: 'E' },
  },
  {
    id: 9,
    question: '공부는 주로 어떻게 하나요?',
    optionA: { text: '혼자 조용한 곳에서 집중해서 한다', value: 'I' },
    optionB: { text: '친구들과 함께 스터디하며 한다', value: 'G' },
  },
  {
    id: 10,
    question: '이해가 안 되는 내용이 있을 때?',
    optionA: { text: '혼자 여러 자료를 찾아보며 해결한다', value: 'I' },
    optionB: { text: '바로 친구나 선생님에게 물어본다', value: 'G' },
  },
  {
    id: 11,
    question: '도서관 vs 스터디카페, 고른다면?',
    optionA: { text: '조용한 도서관에서 혼자 집중하기', value: 'I' },
    optionB: { text: '친구와 함께하는 스터디카페', value: 'G' },
  },
  {
    id: 12,
    question: '공부 결과를 확인할 때?',
    optionA: { text: '스스로 점검하며 약점을 혼자 파악한다', value: 'I' },
    optionB: { text: '친구들과 비교하며 서로 자극받는다', value: 'G' },
  },
];

// Returns type key (e.g. 'PCI') from array of 12 answer values
export function calcStudyType(answers) {
  const planning    = answers.slice(0, 4).filter(a => a === 'P').length >= 2 ? 'P' : 'S';
  const learning    = answers.slice(4, 8).filter(a => a === 'C').length >= 2 ? 'C' : 'E';
  const environment = answers.slice(8, 12).filter(a => a === 'I').length >= 2 ? 'I' : 'G';
  return `${planning}${learning}${environment}`;
}
