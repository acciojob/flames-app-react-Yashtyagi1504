import React, { useState } from "react";

function Flames() {
  let [str1, setStr1] = useState("");
  let [str2, setStr2] = useState("");
  let [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!str1 || !str2) {
      setValue("Please Enter valid input");
    } else {
      //   let arr1 = str1.toLowerCase().split("");
      //   let arr2 = str2.toLowerCase().split("");

      let arr1 = str1.toLowerCase().replace(/\s/g, "").split("");
      let arr2 = str2.toLowerCase().replace(/\s/g, "").split("");

      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] == arr2[j]) {
            arr1.splice(i, 1);
            arr2.splice(j, 1);
            i--;
            break;
          }
        }
      }
      let score = (arr1.length + arr2.length) % 6;

      switch (score) {
        case 1:
          setValue("Friends");
          break;
        case 2:
          setValue("Love");
          break;
        case 3:
          setValue("Affection");
          break;
        case 4:
          setValue("Marriage");
          break;
        case 5:
          setValue("Enemy");
          break;
        case 0:
          setValue("Siblings");
      }
    }

    // console.log(arr1, arr2, score);
    // console.log(str1.toLocaleLowerCase().split(""),str2.toLowerCase())
  }

  function handleClear() {
    setStr1("");
    setStr2("");
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          data-testid="input1"
          name="name1"
          onChange={(e) => setStr1(e.target.value)}
          value={str1}
        ></input>
        <input
          type="text"
          data-testid="input2"
          name="name2"
          onChange={(e) => setStr2(e.target.value)}
          value={str2}
        ></input>
        <button
          type="submit"
          data-testid="calculate_relationship"
          name="calculate_relationship"
        >
          Calculate Relationship Future
        </button>
        <button
          type="button"
          data-testid="clear"
          name="clear"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{value}</h3>
    </div>
  );
}

export default Flames;
