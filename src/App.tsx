import { Header } from "./components/header"
import { StarredRepos } from "./components/starred-repos"
import { About } from "./components/about"

function App() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Header />
      <StarredRepos />
      <About />
    </div>
  )
}

export default App
