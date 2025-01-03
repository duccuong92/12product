import { useParams } from "react-router";
import { useEffect, useState } from "react";

export function ProductDetail() {
  // useParams trả về 1 object và trong object đó có id
  // desctructuingg object

  const { id } = useParams();
  const [product, setProduct] = useState({});

  console.log({ id });

//   Cách 1 Call API
//   useEffect(() => {
//       fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`)
//           .then ((r) => {
//               if(r.ok) {
//                   return r.json();
//               }
//               throw new Error(r.text);
//           })
//           .then((r) => {
//               console.log(r);
//               setProduct(r);
//           })
//           .catch((err) => {
//               console.log(err);
//           });
//   }, []);


//  Cách 2 Call API
// useEffect(() => {
// //  Gán async cho hàm call Api
//     const callApi = async () => {
//         // Đợi 1 promise trả về giá trị thì dùng async await
//         const response = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`,

//     );
//     // Chuyển từ json -> data type js
//     if (response.ok) {
//         const data = await response.json();
//         setProduct(data);
//     } else {
//         console.log("Error", response.text());
//     }
//         };
//         callApi();
// }, []);

// Cách 3 Call API
    useEffect(() => {
    (async () => {
           // Đợi 1 promise trả về giá trị thì dùng async await
           const response = await fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`,

           );
           // Chuyển từ json -> data type js
           if (response.ok) {
               const data = await response.json();
               setProduct(data);
           } else {
               console.log("Error", response.text());
           }
    })();
}, []);



  return (
    <>
      <h1>Product Detail</h1>
      {/* <p>{product && product.name}</p>
      {product && <p>{product.price}</p>}
      {product && (
        <img src={product.img} width={400} height={400} alt={product.name} />
      )} */}
      {
        product && (
            <>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <img src={product.img} width={400} height={400} alt={product.name} />
            </>
        )
      }
    </>
  );
}
