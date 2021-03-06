import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material";
import useStyles from "../utils/styles";
import NextLink from "next/link";

const Layout = ({ title, description, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title}- Next amazing` : "Next amazing"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazing</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/card" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazing</Typography>
      </footer>
    </div>
  );
};

export default Layout;
