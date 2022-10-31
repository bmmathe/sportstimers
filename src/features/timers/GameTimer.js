import { Button, Stack, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { pauseTime, startTime } from "./timersSlice";

function GameTimer() {
  const dispatch = useDispatch();
  const gameTime = useSelector((state) => state.timers.time);
  const gameTimeStatus = useSelector((state) => state.timers.status);

  const startGameTimer = () => {
    if (gameTimeStatus === "notset") {
      dispatch(startTime());
      Notification.requestPermission().then(() => {
        // do nothing, just get permission
      });
    } else if (gameTimeStatus === "running") {
      dispatch(pauseTime());
    } else {
      dispatch(startTime());
    }
  };

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
      <Button onClick={startGameTimer}>
        {gameTimeStatus === "running" ? "Pause" : "Start"}
      </Button>
    </Stack>
  );
}

export default GameTimer;
