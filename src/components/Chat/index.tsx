import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import { API_KEY_OPEN_IA } from "@/constants/keys";

const Wrapper = styled(Box)`
  margin: 40px 0;
`;

const Title = styled(Typography)`
  font-size: 20px;
`;

const ContentDrawer = styled(Box)`
  width: 350px;
  padding: 20px;
`;

const TitleDrawer = styled(Typography)`
  font-size: 18px;
  text-align: center;
`;

const configuration = new Configuration({
  apiKey: API_KEY_OPEN_IA,
});
const openai = new OpenAIApi(configuration);

interface messageProps {
  content: string;
  role: string;
}

const Index = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [assistanMessages, setAssistanMessages] = useState<
    messageProps[] | any
  >([]);

  const getChat = async (message: string) => {
    return new Promise(async (resolve, reject) => {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      resolve(completion.data.choices[0].message);
    });
  };

  const sendMessage = (message: string) => {
    setAssistanMessages([
      ...assistanMessages,
      {
        content: message,
        role: "user",
      },
    ]);
    getChat(message).then((res) => {
      setAssistanMessages([
        ...assistanMessages,
        {
          content: message,
          role: "user",
        },
        res,
      ]);
    });
  };
  const [message, setMessage] = useState("");

  return (
    <Wrapper>
      <Title>Atencion medica al instante</Title>
      <Typography mb={1} fontSize={13}>
        Platica con bootbrait sobre atenciones para tu mascota
      </Typography>
      <Button variant="contained" onClick={() => setOpenDrawer(true)}>
        Comenzar!
      </Button>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ContentDrawer>
          <TitleDrawer>Bootbrait</TitleDrawer>
          <MessagesList assistanMessages={assistanMessages} />
          <MessageInput
            message={message}
            setMessage={setMessage}
            setNewMessage={sendMessage}
          />
        </ContentDrawer>
      </Drawer>
    </Wrapper>
  );
};

export default Index;
