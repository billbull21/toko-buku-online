import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavbarComponent from "../components/navbar_component";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SidebarComponent from "../components/sidebar_component";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavbarComponent />

      <Container className={styles.main}>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Component {...pageProps} />
          </Col>
          <Col xs={12} sm={12} md={4}>
            <SidebarComponent />
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        <a href="https://oemam.com">Created with ❤️ from 202021420022</a>
      </footer>
    </>
  );
}

export default MyApp;
