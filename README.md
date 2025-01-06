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

```js
const abc  = () => {};
abc();

//-------
(() => {})();
===> Thực thi function ngay tức thì.

#Formik
- prop name của inpit là gigf thì initialValues của formik phải tương tự, 2 cái phải khớp với nhau.


#Cache
- Tối ưu
- Nâng cao

#useCallback
- dependencies thì giống với useEffect
+ Lưu trữ giá trị function mỗi lần re-render.
+ không có dependencies thì nó sẽ tạo mới mỗi khi re-render
+ dependencies laà mảng rỗng thì chỉ tạo mới 1 lần duy nhât.
+ dependencies là mảng có giá trị thì nó sẽ tạo mỗi khi mảng đó thay đổi.

*Note: không càn thiết phải dùng.


#useMemo:
- Lưu trữ lại giá trị của biến.
```
// pure function: Đầu vào giống nhau = đầu ra phải giống nhau

// impure function:  đầu vào thì giống nhau - đầu r
thì khác nhau

- Khi code function trong js thì phải luôn code pure function
- Tuân thủ pure function
+ Không sử dụng biến global
+ Không sử dụng những function impurre khác: Math.random(), Date,...
+ Nên truyền tham số vào function để sử dụng.

*Note: Không cần thiết phải dùng.

#useContext
- 
 
# Chú ý:
* Local State
- Mỗi component chúngg ta sử dụng gsex có state riêng, không liên quan gì với nhau (localstate).

* Global State
- Mọi component nó sẽ có dũe liệu giống nhau.

# TRuyền component lồng qua các cấp.

#Prop Drilling
- Props không cần cho component nhưng truyền vào component để nó đưa sang cho component khÁC.
- Làm cho component của chúng ta khó hiểu ??? Không biết props đó dùng để làm gì?


#Redux
Dùngg để lưu trữ những dữ liệu cần sự thốngg nhất cho toàn bộ ứng dụng: user login, language, theme,...