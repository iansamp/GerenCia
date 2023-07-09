import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #155724;
  background-color: #9ef1b1;
  border-color: #c3e6cb;
  padding: 1em;
  z-index: 9999;
`;

const Text = styled.span`
  flex-grow: 1;
`;

const Message = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <Wrapper>
      <Text>{children}</Text>
      <IconButton color="inherit" size="small" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Wrapper>
  ) : null;
};

export default Message;
