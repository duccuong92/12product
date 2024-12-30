import { useEffect, useState } from "react";
import { Link } from "react-router";

export function ListProduct() {
  const [products, setProducts] = useState([]);

  const getAllProduct = (controller) => {
    fetch("https://apitraining.cybersoft.edu.vn/api/ProductApi/getall", {
      signal: controller ? controller.signal : undefined,
    })
      .then((r) => {
        // Kiểm tra xem dữ liệu trả về ok thì mới conver từ json -> data type js
        if (r.ok) {
          return r.json();
        } else {
          throw new Error(r.text);
        }
      })
      .then((r) => {
        const productLive = r.filter((p) => !p.deleted);
        console.log(r);

        setProducts(productLive);
      })
      .catch((err) => {
        console.log(err);
        // Gửi thông báo đến server
        // Hiển thị thông báo lỗi cho người dùngg
      })
      .finally(() => {
        console.log("Dù thành công hay thất bại đều chạy hàm này");
      });
  };
  useEffect(() => {
    // TH: Chưa call API xong, thì người dùng đã chuyển sang trang khác
    // Cancel API đó

    const controller = new AbortController();
    getAllProduct(controller);

    return () => {
      // Cancel, stop, dừng
      controller.abort();
    };
  }, []);

  const handleDelete = (id) => {
    fetch(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${id}`, {
      method: "DELETE",
    })
      .then((r) => {
        console.log(r);

        // Nếu thành công thì gọi lại API để lấy dữ liệu mới
        getAllProduct();
      })
      .catch((e) => {
        console.log("Xoá thấy bnaji");
      });
  };

  return (
    <>
      <Link to={"/new-product"}>New Product</Link>
      <hr />
      <Link to={"/product/1"}>View Detail</Link>
      <hr />

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 &&
            products.map((p) => {
              return (
                <tr key={p.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <img src={p.img} alt="" width={100} heigh={100} />
                  </td>
                  <td>{p.type}</td>
                  <td className="flex gap-1">
                    <button className="border px-4 py-1 rounded">Edit</button>
                    <button
                      className="border px-4 py-1 rounded"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                    <button className="border px-4 py-1 rounded">
                      View Detail
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
