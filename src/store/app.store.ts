import create from 'zustand';

export const useNotificationStore = create((set:any) => ({
    message: null,
    type:"info",
    success:false,

    setErrorMessage: (message: string) => set({ message, type:"error"}),
    setSuccessMessge: (message: string) => set({ message, type:"success"}),
    resetMessage: () => set({message:null}),
    setSuccess: () => set({ success:true}),
    removeSuccess: () => set({ success:false, message:null})
}));

