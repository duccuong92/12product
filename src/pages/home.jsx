import { useEffect, useState, useCallback } from "react";

export function Home() {

    const [g, setG] = useState(0);

    return (
        <>

        <h1>Home</h1>

        <Count g={g}/>

        <br />

        <Count g={g}/>

        <button onClick={() => setG(g + 1)}>Click</button>
        
        </>
    );
};
    // let cache = null;
    // const _useCallback = (cb) => {

    //     // Ghi nhớ callback function mà mình truyền vào
    //     if(!cache) cache = cb;
    //     // if nếu có cache thì lấy trong cache ra
    //     // ngược lại thì return về cb mới
    //     cache
    //     return cb;
    // };

    let cache = null;
    const _useMemo = (cb) => {
        // Nếu chưa có thì lưu cache bằngg giá trị của function
        if(!cache) cache = cb();

        // Nếu có rồi thì return về cache.
        return cb();
    }

    function Count({g}) {
        const [c, setC] = useState(0);

        const handleChange = useCallback( () => {
            // cập nhật state -> c mới nhất

            // c = 0
            // setC(c + 1);
            setC ((preC) => {
                return preC + 1;
            });

        }, []);

        const sv = _useMemo(() => {
            return {
                name: "Nguyen Van A",
                age: 20,
            };
        }, []);

        useEffect(() => {
            console.log("Sinh viên tạo mới")
        }, [sv]);

        return (
            <>
            <button onClick={handleChange}>{c}</button>

            <p>Global: {g}</p>
            </>
        )

    };


    // pure function: Đầu vào giống nhau = đầu ra phải giống nhau
function sumAb(a, b) {
    return a + b;
}

sumAb(3, 4);

    // impure function:  đầu vào thì giống nhau - đầu ra thì khác nhau

    function sumAb2(a) {
        return a + Math.random();
    }

sumAb2(3);