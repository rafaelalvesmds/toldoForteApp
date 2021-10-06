import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "../styles/containers/Contato.module.scss";
import React from "react";
import { Input } from "@chakra-ui/input";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";

export default function ContatoPage() {
  return (
    <div className={styles.container}>
      <Menu />
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <Footer />
    </div>
  );
}
