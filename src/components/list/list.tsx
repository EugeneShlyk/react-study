type point = {
  title: string,
  lat: number,
  lng: number,
}

type pointsProps = {
  points: point[]
}


export default function ({points}: pointsProps) {
  return (
    <ul>
      {points.map((point: point, index) => {
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
