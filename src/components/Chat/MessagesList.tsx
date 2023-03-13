import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Wrapper = styled(Box)`
  height: calc(100vh - 160px);
  padding: 20px 10px;
  overflow-y: scroll;
`;

const AssistanMessagesList = styled.ul`
  padding: 0;
`;

const UserMessage = styled.li`
  background-color: #4649ff33;
  padding: 10px;
  border-radius: 6px;
  list-style: none;
  margin: 10px 0;
  width: fit-content;
  font-family: "Poppins";
  font-size: 13px;
`;

const AssistanMessage = styled.li`
  background-color: transparent;
  border: 1px solid #bdcdd6;
  padding: 10px;
  border-radius: 6px;
  list-style: none;
  margin: 10px 0;
  width: fit-content;
  font-family: "Poppins";
  font-size: 13px;
  /* & span:nth-child(1) {
    display: none;
  }
  & span:nth-child(2) {
    display: none;
  } */
`;

const LabelName = styled(Typography)`
  font-family: "Poppins";
  font-size: 11px;
  color: #7b8fa1;
`;

const Index = ({ assistanMessages }: any) => {
  return (
    <Wrapper>
      <AssistanMessagesList>
        {assistanMessages &&
          assistanMessages.map((messgae: any) =>
            messgae.role === "user" ? (
              <Box mb={1.5}>
                <Stack direction="row" spacing={1}>
                  <LabelName>You</LabelName>
                  <UserMessage>{messgae.content}</UserMessage>
                </Stack>
              </Box>
            ) : (
              <Box mb={1.5}>
                <Stack direction="row" spacing={1}>
                  <LabelName>Boot</LabelName>
                  <AssistanMessage>
                    {messgae.content}
                    {/* {messgae.content && nl2br(messgae.content)} */}
                  </AssistanMessage>
                </Stack>
              </Box>
            )
          )}
      </AssistanMessagesList>
    </Wrapper>
  );
};

export default Index;
