import { Bounce, toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr  = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        toast.warn('Already Exist this Book !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.log(id , 'already exist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list' , storedListStr)
        // ideally we're trigger toast called from the components
        //              [ normal toastify]
        // toast('This book is added your read list')

        //              edited toastify

        toast.success('🦄 This book is added your read list', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }else{
        return []
    }
}

const addToStoredWishlist = (id) => {
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        toast.error('Already Exist!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        console.log(id , 'Already exist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list' , storedListStr)
        //      normal toastify

        // toast('This book is added to your Wishlist')

        //      styles toastify 

        toast.success('Successfully add to the Wishlist!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}
export { addToStoredReadList , addToStoredWishlist , getStoredReadList , getStoredWishList }