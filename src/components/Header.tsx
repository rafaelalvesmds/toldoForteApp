import { Flex, Button, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { useRouter } from "next/router";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  const router = useRouter();

  const breakPoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  });

  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <img src="images/logo.png" />
        </div>
        <div className={styles.options}>
          <Flex align="center" display={["none", "none", "flex", "flex"]}>
            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="150px"
                mr="2%"
              >
                HOME
              </Button>
            </NextLink>

            <NextLink href="/produtos" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="150px"
                mr="2%"
              >
                PRODUTOS
              </Button>
            </NextLink>

            <NextLink href="/sobre" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                mr="2%"
                w="150px"
              >
                SOBRE
              </Button>
            </NextLink>

            <NextLink href="/contato" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                my={5}
                w="150px"
                mr="2%"
                backgroundColor="var(--main-color)"
                color="var(--secondary-color)"
              >
                ORÇAMENTO
              </Button>
            </NextLink>
          </Flex>
        </div>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr="3%"
          m="2%"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />

        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
          display={display}
          backgroundColor="var(--secondary-color)"
          color="var(--black)"
        >
          <Flex justify="flex-end">
            <IconButton
              aria-label="Close Menu"
              mt={2}
              mr={5}
              size="lg"
              onClick={() => changeDisplay("none")}
              icon={<CloseIcon />}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <img className={styles.logoSteper} src="images/logo.png" />
            </NextLink>

            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                HOME
              </Button>
            </NextLink>

            <NextLink href="/produtos" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                PRODUTOS
              </Button>
            </NextLink>

            <NextLink href="/sobre" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                SOBRE
              </Button>
            </NextLink>

            <NextLink href="/contato" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                CONTATO
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}
