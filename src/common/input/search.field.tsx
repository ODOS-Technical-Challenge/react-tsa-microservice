import React, { FunctionComponent } from "react";
import { Button, TextInput } from "@trussworks/react-uswds";
import { useId, useValue } from "../index";

export interface Props {
  value: string;
  id?: string;

  onClick: (value: string) => void;
}

export const Search: FunctionComponent<Props> = ({
  id,
  value,
  onClick,
}: Props) => {
  const [internal, setInternal] = useValue(value);
  const [cid] = useId(id);

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <TextInput
        id={cid}
        name="search"
        type="text"
        value={internal}
        onChange={({ target }) => setInternal(target.value)}
      />
      <Button
        style={{ height: "40px", marginLeft: "4px" }}
        type="button"
        onClick={() => onClick(internal)}
      >
        Submit
      </Button>
    </div>
  );
};
