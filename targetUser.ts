useEffect(() => {
  const handleVisibility = () => {
    if (document.visibilityState === "hidden") {
      console.log('user - go');
    } else {
      console.log('user stay ');
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibility);
  };
}, []);
