import { useTasks } from "../context/TaskContext"
import Header from "../components/Header"
import TaskItem from "../components/TaskItem"

export default function Home() {
  const { tasks } = useTasks()

  const activeTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-blue-600">{tasks.length}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-orange-600">{activeTasks.length}</p>
              <p className="text-sm text-gray-600">Ativas</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-green-600">{completedTasks.length}</p>
              <p className="text-sm text-gray-600">Concluídas</p>
            </div>
          </div>

          {/* Tarefas Ativas */}
          {activeTasks.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tarefas Ativas</h2>
              <div className="space-y-3">
                {activeTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}

          {/* Tarefas Concluídas */}
          {completedTasks.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Concluídas</h2>
              <div className="space-y-3">
                {completedTasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
          )}

          {/* Estado Vazio */}
          {tasks.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-24 h-24 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhuma tarefa ainda</h3>
              <p className="text-gray-500">Comece adicionando sua primeira tarefa!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
