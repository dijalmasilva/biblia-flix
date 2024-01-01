'use client'

import Modal from "@/components/modal/modal";
import {ChangeEvent, useEffect, useState} from "react";
import Button from "@/components/button/button";

export const USER_TAG = 'christianName'

type Props = {
  forceOpen?: boolean
  onCancel?: () => void
  onConfirm?: () => void
}

const ValidateUser = ({forceOpen, onCancel, onConfirm}: Props) => {
  const [christianName, setChristianName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    const christianNameStorage = localStorage.getItem(USER_TAG)
    if (!christianNameStorage) {
      setIsModalOpen(true)
    } else {
      setChristianName(christianNameStorage)
      if (forceOpen) setIsModalOpen(true)
    }
  }, [forceOpen]);

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
      setIsConfirmed(false)
      if (onConfirm) onConfirm()
    }, 3000)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError('')

    setChristianName(e.target.value)
  }

  const cancel = () => {
    setIsModalOpen(false)
    if (onCancel) onCancel()
  }

  return (
    <Modal title={isConfirmed ? `Jesus te ama, ${christianName}!` : 'Qual é o seu nome?'}
           description={isConfirmed ? 'Obrigado!' : ''} isOpen={isModalOpen}>
      {!isConfirmed && (
        <form onSubmit={handleConfirm} className="w-full flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <input type="text" placeholder="Ex: Maer-Salal-Hás-Baz" autoFocus
                   className="bg-zinc-900 outline-none rounded-lg px-4 py-2 text-white"
                   value={christianName}
                   onChange={onChange}/>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </div>
          <Button type="submit" size="medium" className="!bg-red-500 text-white">
            Confirmar
          </Button>
          {
            onCancel && (
              <Button size="medium" onClick={cancel}>
                Cancelar
              </Button>
            )
          }
        </form>
      )
      }
    </Modal>
  )
}

export default ValidateUser