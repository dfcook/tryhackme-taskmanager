'use client'

import { useQuery } from '@tanstack/react-query'

const fetchTasks = async () => {
  const res = await fetch('http://localhost:8000/tasks')
  return res.json()
}

const TaskList = () => {
  const { data } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })
  console.log(data)

  return (
    <div>
      <h1>Task List</h1>
    </div>
  )
}

export default TaskList
