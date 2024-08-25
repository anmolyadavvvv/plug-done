import { useState, useEffect } from "react";
import { invoke } from "@forge/bridge";

export const useTimelineData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    invoke("getDetails")
      .then((response) => {
        console.log("API Response:", response);
        if (response.error) {
          setError(response.error);
        } else {
          setData(response);
        }
      })
      .catch((err) => {
        setError("Error invoking function: " + err.message);
      });
  }, []);

  return { data, error };
};

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [content, setContent] = useState("");

  const openModal = (content) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent("");
  };

  return { isOpen, content, openModal, closeModal };
};

export const useTooltip = () => {
  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);

  const showTooltip = (content) => {
    setContent(content);
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return { content, visible, showTooltip, hideTooltip };
};
