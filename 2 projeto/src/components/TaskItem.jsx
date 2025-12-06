"use client"

import { Link } from "react-router-dom"
import { useTasks } from "../context/TaskContext"

export default function TaskItem({ task }) {
  const { removeTask, toggleTask } = useTasks()

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`mt-1 text-sm ${task.completed ? "text-gray-300" : "text-gray-600"}`}>{task.description}</p>
          )}
          <div className="flex items-center gap-4 mt-3">
            {task.priority && (
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  task.priority === "alta"
                    ? "bg-red-100 text-red-700"
                    : task.priority === "média"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                }`}
              >
                {task.priority}
              </span>
            )}
            <span className="text-xs text-gray-400">{new Date(task.createdAt).toLocaleDateString("pt-BR")}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/edit-task/${task.id}`}
            className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50"
            title="Editar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Link>
          <button
            onClick={() => removeTask(task.id)}
            className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-50"
            title="Excluir"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
