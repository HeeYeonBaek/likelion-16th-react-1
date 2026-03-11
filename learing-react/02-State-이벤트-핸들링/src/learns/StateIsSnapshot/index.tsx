import SnapshotTest from './SnapshotTest'
import S from './style.module.css'

function StateIsSnapshot() {
<<<<<<< HEAD
  return (
    <div className={S.container}>
      <SnapshotTest />
    </div>
  )
=======
  return <div className={S.container}>
    <SnapshotTest />
  </div>
>>>>>>> 5b6aa28 (fix: 중첩 git 제거 후 파일 추적 정상화)
}

export default StateIsSnapshot
