import S from './style.module.css'

/**
 * 리액트 렌더 파이프라인
 * - Trigger → Render → Commit
 * 
 * 브라우저 페인팅(렌더링)
 * - Painting
 * 
 * 리액트 상태(State)
 * - 스냅샵(Snaphost)과 유사
 * - 렌더링 시, 불변(Immutable)
 * - 배칭(Batching): 업데이트 큐(Queue)
 * 
 * 리액트 제어(Controlled)
 * - 리액트 제어
 * - 상태 기반 Input 제어
 * - 선언적 프로그래밍
 * 
 * 리액트 비제어(Uncontrolled)
 * - 브라우저 제어
 * - 웹 표준 기반 Input 제어
 * - 명령적 프로그래밍
 */

export default function VirtualDOM() {
  return (
    <section className={S.wrapper}>
      <h2 className={S.heading}>
        가상(Virtual){' '}
        <dfn>
          <abbr title="Document Object Model">DOM</abbr>
        </dfn>{' '}
        & 배칭(Batching)
      </h2>
    </section>
  )
}
