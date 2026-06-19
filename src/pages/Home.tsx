import { tankShells } from "../data/tankShells"

export default function Home() {
  console.log(tankShells)
  return (
    <div>
      <h1>Home</h1>
			<p>Shell definitions: {tankShells.length}</p>
      {tankShells.map((shell) => (
        <p>{shell.designation}</p>
      ))}
    </div>
  )
}
