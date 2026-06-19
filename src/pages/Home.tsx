import { tankShells } from "../data/tankShells"

export default function Home() {
  console.log(tankShells)
  return (
    <div>
      <h1>Home</h1>
			<p>Shell definitions: {tankShells.length}</p>
      {tankShells.map((shell) => (
        <>
          <div className="d-flex flex-column mb-4">
            <span>{shell.designation}</span>
            <span>{shell.variant}</span>
          </div>
        </>
      ))}
    </div>
  )
}
