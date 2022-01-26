import { Button, Fieldset, Label, TextInput } from "@trussworks/react-uswds";
import React, { FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/contexts";

export const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = (location.state as any)?.from?.pathname || "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>You must log in to view</div>
      <div>
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <Label htmlFor="username" hint="">
              Username
            </Label>
            <TextInput
              id="username"
              name="username"
              type="text"
              inputSize="small"
            />
          </Fieldset>
          <Button type="submit" style={{ marginTop: "10px" }}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
