import { Stack, Table, Image, Text, HStack, Box, Flex, IconButton, Popover, Portal } from "@chakra-ui/react"
import { useState, useEffect } from 'react';
import { useMeasure } from 'react-use';
import ProductOptions from '@/components/custom/product-options';

function Products() {


const [products, setProducts] = useState([
    {
      "_id": "67472f65d2c7c1a0cf655924",
      "price": 2599,
      "name": "Wireless Headphones",
      "description": "High-quality wireless headphones with noise cancellation.",
      "currency": "USD",
      "category": "Electronics",
      "url": "https://example.com/product/67472f65d2c7c1a0cf655924",
      "image_url": "https://github.com/Sellfy/test-assignment-frontend/raw/refs/heads/master/images/image-1.jpg"
    },
    {
      "_id": "6747354227fb516596e17f0f",
      "price": 799,
      "name": "Polaroid OneStep 2 i-Type Camera",
      "description": "A modern instant film camera inspired by the classic 1970s Polaroid design",
      "currency": "AUD",
      "category": "Cameras &amp; Photography",
      "url": "https://example.com/product/6747354227fb516596e17f0f",
      "image_url": "https://github.com/Sellfy/test-assignment-frontend/raw/refs/heads/master/images/image-2.jpg"
    },
    {
      "_id": "674dbae31041b950f7485d73",
      "price": 12999,
      "name": "Matte Green Stainless Steel Water Bottle",
      "description": "A sleek, minimalistic reusable water bottle made from stainless steel with a matte green finish",
      "currency": "CAD",
      "category": "Drinkware",
      "url": "https://example.com/product/674dbae31041b950f7485d73",
      "image_url": "https://github.com/Sellfy/test-assignment-frontend/raw/refs/heads/master/images/image-3.jpg"
    },
    {
      "_id": "6305e8ab1892983c1daaea98",
      "price": 499,
      "name": "Faberlic Bioglow Skincare (Cream + Serum)",
      "description": "A brightening skincare duo designed to enhance natural radiance.",
      "currency": "EUR",
      "category": "Skincare",
      "url": "https://example.com/product/6305e8ab1892983c1daaea98",
      "image_url": "https://github.com/Sellfy/test-assignment-frontend/raw/refs/heads/master/images/image-4.jpg"
    },
    {
      "_id": "62e3b7e3b6c79f7a4bbcf366",
      "price": 3499,
      "name": "Smart Watch",
      "description": "Water-resistant smart watch with fitness tracking.",
      "currency": "GBP",
      "category": "Wearables",
      "url": "https://example.com/product/62e3b7e3b6c79f7a4bbcf366",
      "image_url": "https://github.com/Sellfy/test-assignment-frontend/raw/refs/heads/master/images/image-5.jpg"
    }
  ]);

  // Use useMeasure for element-based responsive design
  const [measureRef, { width }] = useMeasure();
  const [isMobile, setIsMobile] = useState(width < 661);

  useEffect(() => {
    setIsMobile(width < 661);
  }, [width]);

  return (
    <Flex ref={measureRef} w="100%" justifyContent="center">
        {isMobile ? (
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
        )}
    </Flex>
  )
}

export default Products;