import { Alert, Button, IconButton } from "@mui/joy";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Stack } from "@mui/system";
import { CloseRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function AppRegistration() {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = (registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload(true);
  };

  return (
    <div>
      {showReload ? (
        <Alert
          variant="soft"
          color="primary"
          startDecorator={<UpgradeIcon />}
          endDecorator={
            <Stack direction="row" spacing={1}>
              <Button
                size="sm"
                variant="outlined"
                color="primary"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "xs",
                  fontWeight: "xl",
                }}
                onClick={reloadPage}
              >
                Update
              </Button>
              <IconButton variant="plain" size="sm" color="neutral">
                <CloseRounded onClick={() => showReload(false)} />
              </IconButton>
            </Stack>
          }
        >
          Update available.
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AppRegistration;
