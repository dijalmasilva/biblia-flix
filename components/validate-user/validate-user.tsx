'use client'

import Modal from "@/components/modal/modal";
import {ChangeEvent, useEffect, useState} from "react";

export const USER_TAG = 'christianName'

const ValidateUser = () => {
  const [christianName, setChristianName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    const christianNameStorage = localStorage.getItem(USER_TAG)
    if (!christianNameStorage) {
      setIsModalOpen(true)
    }
  }, []);

  const handleConfirm = (e: any | undefined) => {
    if (e) e.preventDefault()

    if (!christianName) {
      setError('Por favor, preencha seu nome.')
      return
    }

    if (christianName.length < 3) {
      setError('Nome precisa conter pelo menos 3 caracteres.')
      return
    }

    localStorage.setItem(USER_TAG, christianName)
    setIsConfirmed(true)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 3000)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError('')

    setChristianName(e.target.value)
  }

  return (
    <Modal title={isConfirmed ? `Jesus te ama, ${christianName}!` : 'Qual é o seu nome?'}
           description={isConfirmed ? 'Obrigado!' : ''} isOpen={isModalOpen}>
      {!isConfirmed && (
        <form onSubmit={handleConfirm} className="w-full flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <input type="text" placeholder="Ex: Maer-Salal-Hás-Baz" autoFocus
                   className="bg-zinc-900 outline-none rounded-lg px-4 py-2 text-white"
                   onChange={onChange}/>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </div>
          <button className="bg-red-500 rounded-lg px-4 py-2 text-white" type="submit">
            Confirmar
          </button>
        </form>
      )
      }
    </Modal>
  )
}

export default ValidateUser