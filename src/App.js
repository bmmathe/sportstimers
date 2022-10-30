import { Sheet, Typography } from "@mui/joy";
import React from "react";
import { useSelector } from "react-redux";
import GameTimer from "./features/timers/GameTimer";
import SetGameTimer from "./features/timers/SetGameTimer";
import ModeToggle from "./ModeToggle";

function App() {
  const gameTimeState = useSelector((state) => state.timers.status);
  return (
    <main>
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <ModeToggle />
        <div>
          <Typography level="h4" component="h1">
            <b>Sports Timers</b>
          </Typography>
          <Typography level="body2">Sports timing simplified.</Typography>
        </div>
        {gameTimeState === "notset" && <SetGameTimer />}
        {(gameTimeState === "running" || gameTimeState === "paused") && (
          <GameTimer />
        )}
      </Sheet>
    </main>
  );
}

export default App;
