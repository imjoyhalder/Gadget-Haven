import { ToastContainer, toast, Zoom } from 'react-toastify';

const getDataFormLocalStorage = () => {
    const storedProductStr = localStorage.getItem('addToCartList');
    return storedProductStr ? JSON.parse(storedProductStr) : [];
};

const addToStoreProductList = (id) => {
    const storedProductList = getDataFormLocalStorage();
    if (storedProductList.includes(id)) {
        toast.warn('This Product already Exists!', {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
            transition: Zoom,
        });
    } else {
        storedProductList.push(id);
        localStorage.setItem('addToCartList', JSON.stringify(storedProductList));
        toast.success('Add to Cart Successful!', {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
            transition: Zoom,
        });
    }
};

const deleteFormStoredProductList = (id) => {
    const storedProductStr = localStorage.getItem('addToCartList');
    if (storedProductStr) {
        const storedProductList = JSON.parse(storedProductStr);
        const afterDeletedProductList = storedProductList.filter(item => parseInt(item) !== parseInt(id));
        localStorage.setItem('addToCartList', JSON.stringify(afterDeletedProductList));
        toast.success('Item removed from cart!', {
            position: "top-right",
            autoClose: 1500,
            theme: "colored",
            transition: Zoom,
        });
    }
};

export { getDataFormLocalStorage, addToStoreProductList, deleteFormStoredProductList };
