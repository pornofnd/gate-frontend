import ItemLoadApp from 'Atoms/ItemLoadApp'

export default function DashboardLoadList() {
  return (
    <article className="DashboardStoreList">
      {Array.from({ length: 6 }, (_, index) => (
        <ItemLoadApp key={index} />
      ))}
    </article >
  )
}

