import styles from './list.module.scss'

type pointType = {
  title: string,
  lat: number,
  lng: number,
}

type pointsProps = {
  points: pointType[]
}


export default function ({points}: pointsProps) {
  return (
    <ul className={styles.list}>
      {points.map((point: pointType, index) => {
        const keyValue = `${index}-${point.title}`;

        return (
          <li key={keyValue}>
            <span>{point.title}</span>
          </li>
        )
      })}
    </ul>
  )
}
