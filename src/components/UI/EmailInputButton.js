import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { Alert, Grid } from "@mui/material";

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const EmailInputButton = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const [alertVisible, setAlertVisible] = useState(false);

  const onEmailChange = (e) => {
    setFirstLoad(false);
    setEnteredEmail(e.target.value);
  };

  const canSubmit = enteredEmail.match(validRegex);

  const sendEmail = async () => {
    const templateParams = {
      emailId: enteredEmail,
    };

    await emailjs.send(
      "service_o6pggd2",
      "template_p7llyfr",
      templateParams,
      "6lmCKdrIpFedZ4RHr"
    );
    setAlertVisible(true);
  };

  const onButtonClick = () => {
    sendEmail();
    setEnteredEmail("");
    setFirstLoad(true);
  };

  return (
    <Grid rowSpacing={2} direction="column" container>
      <Grid justifyContent="center" display="flex" item>
        {alertVisible && (
          <Alert
            onClose={() => {
              setAlertVisible(false);
            }}
            variant="filled"
            severity="success"
          >
            Subscription Added
          </Alert>
        )}
      </Grid>
      <Grid justifyContent="center" display="flex" item>
        <TextField
          sx={{ width: 250 }}
          size="small"
          error={!firstLoad && !canSubmit}
          id="outlined-error-helper-text"
          placeholder="Enter email"
          helperText={
            !firstLoad && !canSubmit && "Please provide a valid email"
          }
          value={enteredEmail}
          onChange={onEmailChange}
        />
        <button
          style={{
            width: 50,
            height: 40,
            color: "#F5F5F5",
            backgroundColor: "#2D2727",
          }}
          disabled={!(canSubmit && !firstLoad)}
          onClick={onButtonClick}
        >
          Add Email
        </button>
      </Grid>
    </Grid>
  );
};

export default EmailInputButton;
