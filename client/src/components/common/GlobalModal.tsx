import { X } from 'lucide-react'
import ReactDOM from 'react-dom'
import { useModalStore } from '../../stores/modal.store'

const GlobalModal = () => {
  const modalStore = useModalStore()

  if (!modalStore.isModalOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000030]">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
        <button
          onClick={modalStore.close}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <X />
        </button>
        {modalStore.modalElement}
      </div>
    </div>,
    document.body
  )
}

export default GlobalModal
