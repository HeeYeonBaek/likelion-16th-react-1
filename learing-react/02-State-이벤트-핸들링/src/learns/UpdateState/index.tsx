import BatchCounter from './BatchCounter'
import S from './style.module.css'

export default function UpdateState() {
<<<<<<< HEAD
  return (
    <section className={S.container}>
      <h2 className='sr-only'>상태 업데이트</h2>
      <BatchCounter />
    </section>
  )
=======
  return <div className={S.container}>
    <BatchCounter />
  </div>
>>>>>>> 5b6aa28 (fix: 중첩 git 제거 후 파일 추적 정상화)
}
