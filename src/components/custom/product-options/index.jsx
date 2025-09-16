import { Stack, IconButton, Popover, Portal, Dialog, CloseButton } from "@chakra-ui/react"
import { LuTrash2 } from "react-icons/lu";
import { RiShareForwardFill } from "react-icons/ri";
import ProductShare from "@/components/custom/product-share";

const ProductOptions = (props) => {
  
  const removeProduct = (_id) => {
    props.setProducts((prev) => prev.filter((p) => p._id !== _id));
  }

  return (
    <Popover.Content w="125px">
        <Popover.CloseTrigger>
            <Popover.Body>
                <Stack color="black">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <IconButton variant="outline" color="black" borderColor="transparent" >Share<RiShareForwardFill/></IconButton>
                        </Dialog.Trigger>
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <ProductShare product={props.product}/>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                    <IconButton onClick={() => removeProduct(props.product._id)} variant="outline" color="red" borderColor="transparent" >Delete<LuTrash2/></IconButton>
                </Stack>
            </Popover.Body>
        </Popover.CloseTrigger>
    </Popover.Content>
  );
};

export default ProductOptions;
