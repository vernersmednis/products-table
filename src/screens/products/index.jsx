import { Stack, Table, Image, Text, HStack, Box, Flex, IconButton, Popover, Portal } from "@chakra-ui/react"
import { useState, useEffect } from 'react';
import { useMeasure } from 'react-use';
import ProductOptions from '@/components/custom/product-options';
import { productService } from "@/services/product-service";

function Products() {

  // Fetch products data functionality
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      await productService.fetchProducts()
        .then((p) => setProducts(p.data.data))
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);


  // Use useMeasure for element-based responsive design
  const [measureRef, { width }] = useMeasure();
  const [isMobile, setIsMobile] = useState(width < 661);

  useEffect(() => {
    setIsMobile(width < 661);
  }, [width]);

  return (
    <Flex ref={measureRef} w="100%" justifyContent="center">
        { loading && <Text>Loading...</Text> }
        { error && <Text>Error loading data!</Text> }
        { !loading && !error && (isMobile ? (
            <Table.Root key="outline" size="sm" variant="outline" width="fit-content">
                <Table.Body>
                    {products.map((product) => (
                        <>
                            <Table.Row>
                                <Table.Cell bgColor="gray.100" colSpan="2">
                                    <HStack>
                                        <Flex justifyContent="center" minW="150px" bgColor="gray.100">
                                            <Image height="100px" src={product.image_url}/>
                                        </Flex>
                                        <Stack maxW="300px" >
                                            <Text fontWeight="bold">{product.name}</Text>
                                            <Text textAlign="start" color="gray.500" fontWeight="bold" lineClamp="2">Description: {product.description}</Text>
                                        </Stack>
                                    </HStack>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.ColumnHeader>Category</Table.ColumnHeader>
                                <Table.Cell textAlign="end">{product.category}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.ColumnHeader>Price</Table.ColumnHeader>
                                <Table.Cell textAlign="end" >
                                    <ProductOptions product={product} setProducts={setProducts} />
                                </Table.Cell>
                            </Table.Row>
                        </>
                    ))}
                </Table.Body>
            </Table.Root>
        ) : (
            <Table.Root key="outline" size="sm" variant="outline" width="70%" minW="660px">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Product</Table.ColumnHeader>
                        <Table.ColumnHeader>Category</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="center">Price</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {products.map((product) => (
                        <>
                            <Table.Row>
                                <Table.Cell >
                                    <HStack>
                                        <Flex justifyContent="center" minW="150px" bgColor="gray.100">
                                            <Image height="100px" src={product.image_url}/>
                                        </Flex>
                                        <Stack maxW="300px" >
                                            <Text fontWeight="bold">{product.name}</Text>
                                            <Text textAlign="start" color="gray.500" fontWeight="bold" lineClamp="2">Description: {product.description}</Text>
                                        </Stack>
                                    </HStack>
                                </Table.Cell>
                                <Table.Cell>{product.category}</Table.Cell>
                                <Table.Cell textAlign="end" >
                                    <HStack textAlign="end" justifyContent="end" spacing="10px">
                                        <Text>{product.price.toLocaleString('en-US', { style: 'currency', currency: product.currency })}</Text>
                                        <ProductOptions product={product} setProducts={setProducts} />
                                    </HStack>
                                </Table.Cell>
                            </Table.Row>
                        </>
                    ))}
                </Table.Body>
            </Table.Root>
        ))}
    </Flex>
  )
}

export default Products;