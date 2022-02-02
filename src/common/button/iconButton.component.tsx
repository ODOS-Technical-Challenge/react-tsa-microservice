import React, { FunctionComponent } from "react";
import { IconProps } from "@trussworks/react-uswds/lib/components/Icon/Icon";
import { Link } from "react-router-dom";

interface Props {
  icon: React.ComponentType<IconProps>;
  name: string;

  href?: string;
}

export const IconButton: FunctionComponent<Props> = ({
  href,
  icon,
  name,
}: Props) => {
  const Icon = icon;
  if (href) {
    return (
      <Link to={href}>
        <button
          name={name}
          type="button"
          style={{ height: "32px", width: "32px" }}
        >
          <Icon />
        </button>
      </Link>
    );
  }
  return (
    <button name={name} type="button" style={{ height: "32px", width: "32px" }}>
      <Icon />
    </button>
  );
};
