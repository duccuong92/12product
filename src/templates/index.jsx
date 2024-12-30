import { Link, NavLink, Outlet, useMatch } from "react-router";

export function BaseTemplate() {
    // Kiểm tra xem thử URL của mình có khớp với đường dẫn nào không
    const isMatchNewProduct = useMatch("/new-product");
    const isMatchListProduct = useMatch("/list-product");
    const isMatchProductDetail = useMatch("/product/:id");

    const isMatch = isMatchNewProduct || isMatchListProduct || isMatchProductDetail;

    console.log(isMatch);

    return(
        <div className="grid bg-gray-400 min-h-screen" style={{ gridTemplateColunms: "200px 1fr" }}>
            <div className="h-full bg-white">
                <Link to={"/"}>
                <h1>
                    <i className="fa-solid fa-hover"></i>
                    Dashboard
                </h1>
                </Link>

                <NavLink className={isMatch ? "bg-black text-white" : ""} to={"/list-product"}>
                Products
                </NavLink>
            </div>

            <div>
            {/* Binding những component con nesting */}
            <Outlet />
            </div>


        </div>
    )
}