import styled from "styled-components";
import { theme } from "../../styles/theme";

const MAX_LENGTH = 18;

export default function SplitText({
  text,
  x,
  y,
}: {
  text: string;
  x: number;
  y: number;
}) {
  const regex = /\b(\w+\W+)/g;
  const matchedText = text.match(regex);
  const sentences: string[] = [];
  let sentence = "";

  matchedText?.forEach((word) => {
    if (sentence.length + word.length < MAX_LENGTH) {
      sentence = sentence + word;
    } else {
      sentences.push(sentence);
      sentence = word;
    }
  });
  sentences.push(sentence);

  const StyledText = styled.text`
    font-size: ${({
      theme: {
        typography: { fontSize },
      },
    }) => fontSize.s};
  `;
  const {
    tooltip: { margin },
  } = theme;

  return (
    <StyledText x={x} y={y}>
      {" "}
      {sentences?.map((sentence, index) => (
        <tspan key={sentence + index} x={x + margin} dy={margin}>
          {sentence}
        </tspan>
      ))}
    </StyledText>
  );
}
