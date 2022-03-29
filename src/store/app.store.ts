import create from 'zustand';
import {NotificationProps} from '@progress/kendo-react-notification';
interface Notification {
    type : NotificationProps


}

export const useNotificationStore = create((set:any) => ({
    message: null,
    type:"success",
    error:false,
    success:false,

    setErrorMessage: (message: string) => set({ message, type:"error"}),
    setSuccessMessge: (message: string) => set({ message, type:"success"}),
    resetMessage: () => set({message:null}),
    setSuccess: () => set({ success:true}),
    removeSuccess: () => set({ success:false, message:null}),
    setError: ()=> set({ error:true}),
    removeError: () => set({error:false,message:null}),
}));

export const useAuthStore = create((set:any) => ({
    isLoggedIn: false,
    email:"admin@system.com",
    password: "Adm!n@321",
    login: () => set({isLoggedIn:true}),
    logout:() => set({isLoggedIn:false}),
}));
