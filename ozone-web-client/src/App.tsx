import React, { useState } from "react";
import TextInput from "./components/Input/TextInput/TextInput";
import Button from "./components/Button/Button";
import { DocumentSigning } from "./components";

function App() {
  /** State Management */
  const [value, setValue] = useState<string>("");
  return (
    // <div className="px-4 flex items-center flex-col justify-center h-screen">
    //   <TextInput
    //     value={value}
    //     setValue={setValue}
    //     label={"First Name"}
    //     placeholder={"Input Your Brand Name"}
    //     required={true}
    //     inputType={"text"}
    //   />

    //   <div>
    //     <Button text="Next" type="bordered" />
    //   </div>

    //   <div className="mt-10">
    //     <DocumentSigning />
    //   </div>
    // </div>
    <div></div>
  );
}

export default App;
