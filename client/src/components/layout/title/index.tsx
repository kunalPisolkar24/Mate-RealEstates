import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

// import { logo, yariga } from 'assets';
import { logo, yariga } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Yariga" width="50px" />
        ) : (
          <img src={yariga} alt="Refine" width="180px" />
        )}
      </Link>
    </Button>
  );
};
