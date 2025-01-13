import { createContext, useContext } from "react";
import { useState, use } from "react";

export function ComponentContext() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = (theme) => {
    setTheme(theme);
  };


// Local

  return (
    <>
      {/* Truyền value cho tất cả con của ThemeContext.Provider */}
      <ThemeContext.Provider
        value={{
          theme,
          handleChangeTheme,
        }}
      >
        <Child2 />
      </ThemeContext.Provider>
    </>
  );
}

// Global - Global - Global ---- ^ xoá ở trên đi
// return (
//     <>
    
//         <Child2 />
//     </>
//   );

function Child4() {
    const props = use(ThemeContext);
    console.log("child4", props);
    return <>child4</>;
}

function Child1() {
    
}

function Child2() {
  return (
    <>
      <Child3 />
    </>
  );
}

function Child3() {
  const props = use(ThemeContext);
  console.log(props);
  return (
    <>
      <button
        onClick={() => {
          props.handleChangeTheme("light");
        }}
      >
        light
      </button>
      <button
        onClick={() => {
          props.handleChangeTheme("dark");
        }}
      >
        dark
      </button>
      <p
        className={
          props.theme === "light"
            ? "text-black bg-white"
            : "text-white bg-black"
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        nulla.
      </p>
    </>
  );
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const handleChangeTheme = (theme) => {
        setTheme(theme);
    };

    return (
        <ThemeContext.Provider
        value={{
            theme,
            handleChangeTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}



// const useChangeCount = () => {
//     console.log("haha");

//     useEffect(() => {})
// }
