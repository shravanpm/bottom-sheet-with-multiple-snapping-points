import React, { useEffect, useRef, useState } from "react";
import "./BottomSheet.css";
import { Box, Center, Container } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

function BottomSheet() {
  const [height, setHeight] = useState(50);
  const heightRef = useRef(height);
  const divRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    var newHeight = e.clientY - divRef.current.getBoundingClientRect().top;
    newHeight = -newHeight;
    if (newHeight < 100) {
      setHeight(100);
      heightRef.current = 100;
    } else {
      setHeight(newHeight);
      heightRef.current = newHeight;
    }
  };
  const handleMouseUp = () => {
    if (heightRef.current >= 300) {
      heightRef.current = 300;
      setHeight(300);
    } else if (heightRef.current >= 200) {
      heightRef.current = 200;
      setHeight(200);
    } else {
      heightRef.current = 100;
      setHeight(100);
    }

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {}, [height]);

  return (
    <Center w={"60%"} m={"auto"}>
      <Box className={`bottom-sheet`}>
        <Container
          ref={divRef}
          style={{ height: `${height}px` }}
          backgroundColor={"teal"}
          w="100%"
          boxShadow="outline"
          p="6"
          rounded="md"
          bg="teal"
        >
          <Center
            onMouseDown={handleMouseDown}
            style={{
              width: "20px",
              height: "10px",
              margin: "auto",
            }}
            boxShadow="outline"
            p="6"
            rounded="md"
            bg="white"
            cursor={"pointer"}
          >
            <Center>
              <ChevronUpIcon boxSize={12} />
            </Center>
          </Center>

          {/* Bottom sheet content */}
          <Box overflowY={"scroll"}>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
            <p>test test test</p>
          </Box>
        </Container>
      </Box>
    </Center>
  );
}

export default BottomSheet;
