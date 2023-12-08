import TaskList from './components/TaskList'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TaskList />
    </main>
  )
}
