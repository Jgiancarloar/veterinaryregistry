import Form from "./components/Form"
import List from "./components/List"
import { UserProvider } from "./components/UserProvider"

function App() {

  return (
    <UserProvider>
      <div className="flex flex-col lg:flex-row lg:h-screen lg:items-center lg:max-w-6xl mx-auto">
        <Form />
        <List />
      </div>
    </UserProvider>
  )
}

export default App
