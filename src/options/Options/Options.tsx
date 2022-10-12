import { ToggleButton, ToggleButtonGroup, FormLabel, Typography } from "@mui/material";
import { useChromeStorageSync } from "use-chrome-storage";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Container } from "@mui/system";

export default function Options() {
  const [position, setPosition] = useChromeStorageSync<Position>("position");

  function handleButtonClick(_event: React.MouseEvent, newPosition: Position) {
    setPosition(newPosition);
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={1}>Options</Typography>

      <Typography variant="h6" gutterBottom mt={1} color="text.secondary">
        Placement
      </Typography>
      <ToggleButtonGroup
        exclusive={true}
        value={position}
        onChange={handleButtonClick}
      >
        <ToggleButton value="Top" sx={{display: "flex", flexDirection: "column", px: 3}}>
          <WebAssetIcon sx={{transform: "rotate(0deg)", fontSize: 42}}/>
          <FormLabel sx={{fontSize: 14, mb: -.5}}>Top</FormLabel>
        </ToggleButton>
        <ToggleButton value="Bottom" sx={{display: "flex", flexDirection: "column", px: 3}}>
          <WebAssetIcon sx={{transform: "rotate(180deg)", fontSize: 42}}/>
          <FormLabel sx={{fontSize: 14, mb: -.5}}>Bottom</FormLabel>
        </ToggleButton>
        <ToggleButton value="Right" sx={{display: "flex", flexDirection: "column", px: 3}}>
          <WebAssetIcon sx={{transform: "rotate(90deg)", fontSize: 42}}/>
          <FormLabel sx={{fontSize: 14, mb: -.5}}>Right</FormLabel>
        </ToggleButton>
        <ToggleButton value="Left" sx={{display: "flex", flexDirection: "column", px: 3}}>
          <WebAssetIcon sx={{transform: "rotate(270deg)", fontSize: 42}}/>
          <FormLabel sx={{fontSize: 14, mb: -.5}}>Left</FormLabel>
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
}