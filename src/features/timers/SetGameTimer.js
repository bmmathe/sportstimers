import { Button, Stack, TextField } from "@mui/joy";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTime, startTime } from "./timersSlice";

function SetGameTimer() {
  const dispatch = useDispatch();
  const [gameTime, setGameTime] = useState({
    hours: "0",
    minutes: "15",
    seconds: "0",
  });
  const handleChangeTime = (e) => {
    setGameTime(Object.assign({}, gameTime, { [e.target.id]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setTime(
        Number(gameTime.hours * (60 * 60)) +
          Number(gameTime.minutes * 60) +
          Number(gameTime.seconds)
      )
    );
    dispatch(startTime());
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            id="hours"
            value={gameTime.hours}
            onChange={handleChangeTime}
            label="Hours"
            sx={{ maxWidth: 60 }}
          />
          <TextField
            id="minutes"
            value={gameTime.minutes}
            onChange={handleChangeTime}
            label="Minutes"
            sx={{ maxWidth: 60 }}
          />
          <TextField
            id="seconds"
            value={gameTime.seconds}
            onChange={handleChangeTime}
            label="Seconds"
            sx={{ maxWidth: 60 }}
          />
        </Stack>
        <Button type="submit" sx={{ alignSelf: "center" }}>
          Start
        </Button>
      </Stack>
    </form>
  );
}

export default SetGameTimer;
