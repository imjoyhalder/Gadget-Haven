import { ToastContainer, toast, Bounce,Zoom } from 'react-toastify';



const getDataFormLocalStorage = () => {
    const storedProductStr = localStorage.getItem('addToCartList')
    if (storedProductStr) {
        const storedList = JSON.parse(storedProductStr)
        return storedList
    }
    else {
        return []
    }
}

const addToStoreProductList = (id) => {
    const storedProductList = getDataFormLocalStorage()
    if (storedProductList.includes(id)) {
        console.log(id, 'already exists')
        toast()
        toast.warn('This Product already Exists!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    }
    else {
        storedProductList.push(id)
        const storedProductListStr = JSON.stringify(storedProductList)
        localStorage.setItem('addToCartList', storedProductListStr)
        toast.success('Add to Cart Successful!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
        });
    }
}

export { getDataFormLocalStorage, addToStoreProductList }