import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import {
  useQueryLoader,
  usePreloadedQuery,
  graphql,
  PreloadedQuery,
  useLazyLoadQuery,
} from "react-relay";
import Card from "../components/Card";
import { PageLayout } from "../components/PageLayout";
import { pagesPublicProductsQuery as PagesPublicProductsQueryType } from "../relay-types/pagesPublicProductsQuery.graphql";

const Query = graphql`
  query pagesPublicProductsQuery {
    products(isPublic: true, limit: 15, cursor: null) {
      hasMore
      publicProducts {
        uuid
        id
        createdAt
        updatedAt
        name
        price
        quantity
        imageUrl
        isSold
        isPublic
        deleted
      }
    }
  }
`;

const Index: React.FC = () => {
  // const [queryReference, loadQuery] = useQueryLoader<PagesPublicProductsQueryType>(
  //   Query
  // );

  const data = useLazyLoadQuery<PagesPublicProductsQueryType>(Query, {});
  return (
    <PageLayout variant="full">
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            position="absolute"
            left="50%"
            top="50%"
          />
        }
      >
        <Flex mx={-2} pt={20} flexWrap="wrap" justifyContent="center">
          {data?.products.publicProducts.map((product) => {
            return <Card key={product.uuid} product={product} />;
          })}
        </Flex>
      </Suspense>
    </PageLayout>
  );
};

export default Index;
