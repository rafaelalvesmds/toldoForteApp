import Footer from "../components/Footer";
import styles from "../styles/containers/Home.module.scss";
import React from "react";
import { Image } from "@chakra-ui/image";
import { Box, Badge } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import Menu from "../components/Menu";

export default function HomePage() {
  const property = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.box}>
        <div className={styles.logo}>
          <img src="images/logo.png" />
        </div>
        <p className={styles.sub}>🚀 A MELHOR SOLUÇÃO EM TOLDOS</p>
        {/* <p className={styles.text}>
          Qualidade, tecnologia e inovação em toldos para as mais diversas
          aplicações residenciais e comerciais.
        </p> */}

        <button className={styles.btn}>FAÇA SEU ORÇAMENTO</button>
      </div>

      <div className={styles.boxCards}>
        <div className={styles.nossosPedidos}>
          <h1>Nossos Serviços</h1>
        </div>
        {property.map((property, index) => {
          if (index <= 0) {
            console.log("aq");
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                className={styles.card}
              >
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.beds} beds &bull; {property.baths} baths
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  <Box>
                    {property.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          } else {
            console.log("aq tb");

            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                className={styles.card}
              >
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.beds} beds &bull; {property.baths} baths
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {property.title}
                  </Box>

                  <Box>
                    {property.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                      / wk
                    </Box>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          }
        })}
      </div>

      <Footer />
    </div>
  );
}
