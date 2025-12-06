"use client"

import { useNavigate, useParams } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import Header from "../components/Header"
import TaskForm from "../components/TaskForm"

export default function EditTask() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { tasks, editTask } = useTasks()

  const task = tasks.find((t) => t.id === Number.parseInt(id))

  if (!task) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tarefa não encontrada</h2>
            <button onClick={() => navigate("/")} className="text-blue-600 hover:text-blue-800">
              Voltar para Home
            </button>
          </div>
        </main>
      </div>
    )
  }

  const handleSubmit = (taskData) => {
    editTask(Number.parseInt(id), taskData)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </button>
            <h2 className="text-3xl font-bold text-gray-800">Editar Tarefa</h2>
          </div>
          <TaskForm initialData={task} onSubmit={handleSubmit} submitLabel="Salvar Alterações" />
        </div>
      </main>
    </div>
  )
}
