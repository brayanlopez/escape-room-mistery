import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { enterMessages, errorMessages } from "../data/errorMessages";

const LoginView = ({
  showPassword = false,
  showError = false,
  handleClickShowPassword,
  onClickEnter,
  passwordState,
  onChangePassword,
}) => {
  const [counter, setCounter] = useState(0);

  const onClickSubmitButton = () => {
    onClickEnter(() => {
      counter < enterMessages.length - 1 && setCounter(() => counter + 1);
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        maxWidth: "50vw",
      }}
    >
      <FormControl error={showError} variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          id="outlined-adornment-password"
          aria-describedby="component-error-text"
          type={showPassword ? "text" : "password"}
          onChange={onChangePassword}
          value={passwordState}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
                aria-describedby="component-error-text"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {showError && (
          <FormHelperText id="component-error-text" sx={{ maxWidth: "100%" }}>
            {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
          </FormHelperText>
        )}
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        onClick={onClickSubmitButton}
        // onClick={onClickEnter}
        size="large"
      >
        {enterMessages[counter]}
      </Button>
    </Box>
  );
};

export default LoginView;
