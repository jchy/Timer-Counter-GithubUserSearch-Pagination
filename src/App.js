import { useEffect, useState } from "react";
import Counter from "./Counter/Counter";
import useFetch from "./hook/useFetch";
import useTimer from "./hook/useTimer";
import "./styles.css";

export default function App() {
  const { value, startTimer, pauseTimer, resetTimer } = useTimer({
    initialValue: 20
  });
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("https://api.github.com/search/users?q=masai");
  const { loading, data, isError, fetchRequest } = useFetch(
    url + `&page=${page}`
  );
  console.log(data);

  useEffect(() => {
    fetchRequest();
  }, [url, page]);
  return (
    <div className="App">
      <div
        style={{
          border: "1px solid gray",
          margin: "20px",
          padding: "20px",
          background: "cornsilk",
          borderRadius: "10px"
        }}
      >
        <h1
          style={{
            width: "200px",
            margin: "auto",
            borderRadius: "10px",
            marginBottom: "10px"
          }}
        >
          Timer
        </h1>
        <h2
          style={{
            width: "200px",
            height: "50px",
            margin: "auto",
            borderRadius: "10px",
            padding: "30px",
            paddingBottom: "20px",
            marginBottom: "20px"
          }}
        >
          {value}
        </h2>
        <button
          onClick={startTimer}
          style={{
            height: "35px",
            width: "120px",
            borderRadius: "5px",
            background: "teal",
            color: "white"
          }}
        >
          START
        </button>{" "}
        <button
          onClick={pauseTimer}
          style={{
            height: "35px",
            width: "120px",
            borderRadius: "5px",
            background: "teal",
            color: "white"
          }}
        >
          PAUSE
        </button>{" "}
        <button
          onClick={resetTimer}
          style={{
            height: "35px",
            width: "120px",
            borderRadius: "5px",
            background: "teal",
            color: "white"
          }}
        >
          RESET
        </button>
      </div>
      <div
        style={{
          border: "1px solid gray",
          margin: "20px",
          padding: "20px",
          background: "cornsilk",
          borderRadius: "10px"
          // color:"white"
        }}
      >
        <Counter />
      </div>

      <div
        style={{
          border: "1px solid gray",
          margin: "20px",
          padding: "20px",
          borderRadius: "10px"
          // color: "white"
        }}
      >
        <h3>GitHub User Data Fetch and Pagination</h3>
        <div>USE FETCH</div>
        <div>{loading && "LOADING"}</div>
        <div
          style={{
            background: "whitesmoke",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px"
          }}
        >
          {!loading &&
            data?.items?.map((item) => (
              <div
                key={item.login}
                style={{
                  border: "0.1px solid gray",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "white",
                  color: "black",
                  width: "30%",
                  margin: "auto",
                  marginBottom: "10px"
                }}
              >
                {item.login}
              </div>
            ))}
        </div>
        <div>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            style={{
              height: "35px",
              width: "120px",
              borderRadius: "5px",
              background: "teal",
              color: "white"
            }}
          >
            PREV
          </button>{" "}
          <button
            onClick={() => setPage((prev) => prev + 1)}
            style={{
              height: "35px",
              width: "120px",
              borderRadius: "5px",
              background: "teal",
              color: "white"
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
