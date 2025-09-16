import { Stack, Image, Text, HStack, VStack, Flex, IconButton, Dialog, CloseButton, Portal} from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaRegCopy  } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

const ProductShare = ({product}) => {

  return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <IconButton variant="outline" color="black" borderColor="transparent" >Share<RiShareForwardFill/></IconButton>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content w="fit-content">
                        <Dialog.CloseTrigger asChild>
                            <CloseButton />
                        </Dialog.CloseTrigger>
                        <Dialog.Header>
                            <Dialog.Title>Share your product!</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <VStack alignItems="start" border={"1px solid lightgray"} padding="10px" width="400px">
                                <Flex bgColor="gray.100" width="100%" justifyContent="center" >
                                    <Image height="267px" src={product.image_url}/>
                                </Flex>
                                <Stack width="100%">
                                    <Text fontWeight="bold" color="royalblue">{product.name}</Text>
                                    <Text textAlign="start" color="gray.500" fontWeight="bold">Description: {product.description}</Text>
                                </Stack>
                            </VStack>
                            <HStack width="100%" justifyContent="space-between" padding="10px 0 10px 0">
                                <IconButton flex="1"  size="sm" variant="outline" color="blueviolet" borderColor="blueviolet">
                                    <FaFacebook />Share
                                </IconButton>
                                <IconButton flex="1"  size="sm" variant="outline" color="deepskyblue" borderColor="deepskyblue">
                                    <FaTwitter  />Tweet
                                </IconButton>
                                <IconButton flex="1"  size="sm" variant="outline" color="blueviolet" borderColor="blueviolet">
                                    <FaRegCopy  />Copy Link
                                </IconButton>
                            </HStack>
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default ProductShare;
