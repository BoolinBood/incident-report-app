import { create } from "zustand"

interface useModalStoreSpec {
    modalElement: React.ReactNode | null
    isModalOpen: boolean
    setModalElement: (element: React.ReactNode | null) => void
    open: () => void
    close: () => void
}

export const useModalStore = create<useModalStoreSpec>((set) => ({
    modalElement: null,
    isModalOpen: false,
    setModalElement: (element) => set(() => ({ modalElement: element })),
    open: () => set(() => ({ isModalOpen: true })),
    close: () => set(() => ({ isModalOpen: false }))
}))