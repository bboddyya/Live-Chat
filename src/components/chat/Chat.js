import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { height } from "@mui/system";
import { collection, orderBy, query } from "firebase/firestore";
import { memo, useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";

const Chat = () => {
  const q = query(collection(db, "messages"), orderBy("timestamp"));
  const [messages] = useCollectionData(q);

  const endOfChat = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      endOfChat.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }, [messages]);

  return (
    <Container maxWidth="sm" sx={{ marginTop: "15px" }}>
      <Grid container sx={{ height: "80vh" }}>
        <div
          style={{
            width: "100%",
            height: "80vh",
            background: "#eaeaea",
            borderRadius: "10px",
            p: "10px 10px 15px 10px",
            boxShadow: "5px -5px 8px -2px rgba(70, 72, 73, 0.32)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              overflowY: "auto",
            }}
          >
            {messages?.map(({ text, photo, uid, key }) => {
              return <Message key={key} text={text} photo={photo} uid={uid} />;
            })}
            <div ref={endOfChat}></div>
          </div>
        </div>
      </Grid>
      <ChatInput />
    </Container>
  );
};

export default memo(Chat);
