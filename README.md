# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#StrictMode
- Chỉ dùng trong môi trường dev

- Làm useEffect dùng 2 lần.

#Outlet 
- Để hiện thị những thành phần con lồng bên thẻ Route

#Children
- 

// Async Await
- Sử dụng để đợi 1 Promise bên rtrong 1 function
- Không được sử dụng async tại callback của useEffect

# IILE
Tạo và thực thi function ngay tức thì
``````js
const abc  = () => {};
abc();

//-------
(() => {})();
===> Thực thi function ngay tức thì.

#Formik 
- prop name của inpit là gigf thì initialValues của formik phải tương tự, 2 cái phải khớp với nhau.