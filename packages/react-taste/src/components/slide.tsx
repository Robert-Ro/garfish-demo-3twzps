import classNames from 'classnames'
import './slide.css'

export default ({ data }: { data: string[] }) => {
  return (
    <div className={classNames('container')}>
      {data.map((item) => (
        <img src={item} key={item} />
      ))}
    </div>
  )
}
