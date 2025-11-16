import { useEffect, useRef, useState } from "react";

export function useTypingIndicator(socket, channelId, user) {
  const [inputValue, setInputValue] = useState("");
  const canEmit = useRef(true);
  const stopTimer = useRef(null);

  // Handle typing detection
  useEffect(() => {
   
    if (inputValue.trim() === "") return;

    
    if (canEmit.current) {
      socket.emit("typing", { channelId, user });
      canEmit.current = false;

 
      setTimeout(() => {
        canEmit.current = true;
      }, 2000);
    }

    // 🟪 reset stopTyping timer
    clearTimeout(stopTimer.current);

    stopTimer.current = setTimeout(() => {
      socket.emit("stopTyping", { channelId, user });
    }, 2000);

    // cleanup
    return () => clearTimeout(stopTimer.current);

  }, [inputValue, socket, channelId, user]);

  // function to update input
  const onChange = (e) => setInputValue(e.target.value);

  return {
    inputValue,
    onChange,
  };
}
export default function ChatInput({ socket, channelId, user }) {
  const { inputValue, onChange } =
    useTypingIndicator(socket, channelId, user);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    socket.emit("sendMessage", {
      channelId,
      text: inputValue,
      user,
    });
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder="Write something…"
    />
  );
}
useTypingIndicator(socket, channelId, user)
