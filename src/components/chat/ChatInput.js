import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { Context } from "../../context/contextAuth";
import { v4 as uuidv4 } from "uuid";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { userData } = useContext(Context);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input) {
      await addDoc(collection(db, "messages"), {
        text: input,
        timestamp: serverTimestamp(),
        name: userData.displayName,
        photo: userData.photoURL,
        uid: userData.uid,
        key: uuidv4(),
      });
      setInput("");
    }
  };

  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "99%",
        marginTop: "8px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Сообщение"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxRows={3}
        onSubmit={handleSend}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSend}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default ChatInput;
