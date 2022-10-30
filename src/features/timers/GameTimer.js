import { Button, Stack, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { pauseTime, startTime } from "./timersSlice";

function GameTimer() {
  const dispatch = useDispatch();
  const gameTime = useSelector((state) => state.timers.time);
  const gameTimeStatus = useSelector((state) => state.timers.status);
  return (
    <Stack direction="column" alignItems="center" spacing={1}>
      <Typography level="h3">Game Timer</Typography>
      {gameTime < 3600 ? (
        <Typography level="display1">
          {new Date(gameTime * 1000).toISOString().substring(14, 19)}
        </Typography>
      ) : (
        <Typography level="h1">
          {new Date(gameTime * 1000).toISOString().substring(11, 16)}
        </Typography>
      )}
      <Button
        onClick={function () {
          gameTimeStatus === "running"
            ? dispatch(pauseTime())
            : dispatch(startTime());
        }}
      >
        {gameTimeStatus === "running" ? "Pause" : "Start"}
      </Button>
    </Stack>
  );
}

export default GameTimer;
