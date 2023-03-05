import styled from "styled-components";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import IconSend from "@/assets/icons/send.svg";
import Image from "next/image";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Wrapper = styled(Box)`
  position: relative;
  padding: 20px 10px 0;
`;

const ContentButton = styled(Box)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Index = ({ message, setMessage, setNewMessage }: any) => {
  return (
    <Wrapper>
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Aa"
        style={{
          width: "87%",
          fontFamily: "Poppins",
          border: "none",
          borderBottom: "1px solid #767676",
        }}
      />
      <ContentButton>
        <IconButton
          onClick={() => {
            setNewMessage(message);
            setMessage("");
          }}
          aria-label="like"
          color="primary"
        >
          <Image
            width={20}
            height={20}
            priority
            src={IconSend}
            alt="icon-heart"
            data-testid="heart"
          />
        </IconButton>
      </ContentButton>
    </Wrapper>
  );
};

export default Index;
