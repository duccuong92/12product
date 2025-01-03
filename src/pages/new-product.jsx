import { useFormik } from 'formik';
import * as y from 'yup';

// const getFieldProps = (name) => {
//   return {
//     value: formik.values[name],
//     onChange: formik.handleChange,
//     onBlur: formik.handleBlur,
//     name: name,
//   };
// };

const httpUrlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;

// Validate Schema giống như là bản thiết kế
const ProductSchema = y.object({
    name: y
    .string()
    .trim()
    .min(5, "Không được ít hơn 5 chữ")
    .max(20, "Không được nhập nhiều hơn 20 ký tự")
    .required("Không được bỏ trống"),

    description: y
    .string()
    .notRequired(),

    price: y
    .number()
    .min(0)
    .max(1_000_000_000)
    .required("Không được bỏ trống"),

    image: y
    .string()
    .url()
    .required("Không được bỏ trống"),
});

export function NewProduct() {

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: 0,
            image: "",
        },

        validationSchema: ProductSchema,

        // Validate Thủ công
        // validate: (values) => {
        //     const erros = {};

        //     // Validate name
        //     if(!values.name.trim()) {
        //         erros.name = "Name is required";
        //     } else if (values.name.trim().length < 5) {
        //         erros.name = "Name must be at least 5 characters";
        //     } else if (values.name.trim().length > 50) {
        //         erros.name = "Name must be less than 50 characters";
        //     }

        //     // Validate description
        //     if(!values.description.trim()) {
        //         erros.description = "Description is required";
        //     } else if (values.description.trim().length < 5) {
        //         erros.description = "Description must be at least 50 characters";
        //     } else if (values.description.trim().length > 100) {
        //         erros.description = "Description must be less than 500 characters";
        //     }

        //     // Validate price
        //     if(Number(values.price) <= 0) {
        //         erros.price = "Price must be greater than 0";
        //     } else if (Number(values.price) > 1000000000) {
        //         erros.price = "Price must be less than 1,000,000,000";
        //     }

        //     //Validate image
        //     if(!values.image.trim()) {
        //         erros.image = "Image is required";
        //     } else if(!httpUrlRegex.test(values.image.trim())) { 
        //         erros.image = "Image must be a valid URL";
        //     }

        //     return erros;
        // },

        onSubmit: async (values) => {
            console.log(values);
            const body = {
                id: "string",
                name: values.name,
                img: values.image,
                description: values.description,

                id: crypto.randomUUID(),

                type: "string",

                deleted: true,
            };

            const response = await fetch("https://apitraining.cybersoft.edu.vn/api/ProductApi/create", {
                method: "POST",

                //HEader bắt buộc phải có khi gửi dữ liệu lên server
                headers: {
                  "Content-Type": "application/json",
                },
                // Convert object -> json
                body: JSON.stringify(body),
              })
                .then((response) => {
                  if (response.ok) {
                    alert("Create product successfully");

                    // REset forrm sau khi submit thành công
                    formik.resetForm();
                  } else {
                    alert("Create product failed");
                  }
                })

        },

    });

    // console.log(formik.errors);
    console.log(formik.getFieldProps("description"));

    return (
        <>
        <div className="px-10 py-5">
        <h1>New Products</h1>
        <form onSubmit={formik.handleSubmit}>
        <label>
         <p>Name</p>
         <input
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // name="name"
            {...formik.getFieldProps("name")}
            placeholder="Enter name product"
            type="text"
          />
        </label>
        {/* Kiểm tra đã từng đi qua rồi và có errros thì mới hiển thị lên */}
        {formik.touched.name && formik.errors.name && (<p className="text-red-400">{formik.errors.name}</p>)}  

        <label>
          <p>Description</p>
          <input
            // value={formik.values.description}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // name="description"
            {...formik.getFieldProps("description")}
            placeholder="Enter description"
            type="text"
          />
        </label>

        {formik.touched.description && formik.errors.description && (<p className="text-red-400">{formik.errors.description}</p>)}
        
        <label>
          <p>Price</p>
          <input
            // value={formik.values.price}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // name="price"
            {...formik.getFieldProps("price")}
            placeholder="Enter price"
            type="number"
          />
        </label>
        {formik.touched.price && formik.errors.price && (<p className="text-red-400">{formik.errors.price}</p>)}

        <label>
          <p>Image</p>
          <input
            // value={formik.values.image}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // name="image"
            {...formik.getFieldProps("image")}
            placeholder="Enter url image"
            type="text"
          />
        </label>
        {formik.touched.image && formik.errors.image && (<p className="text-red-400">{formik.errors.image}</p>)}

        < br />
        < br />
        <button className="" type="submit">Create</button>
        </form>

        </div>
        </>
    );
}