import { Stack, IconButton, Popover, Portal } from "@chakra-ui/react"
import { LuTrash2 } from "react-icons/lu";
import { LuEllipsisVertical } from "react-icons/lu";
import ProductShare from "@/components/custom/product-share";

const ProductOptions = ({product, setProducts}) => {
  
  const removeProduct = (_id) => {
    setProducts((prev) => prev.filter((p) => p._id !== _id));
  }

  return (
    <Popover.Root size="xs" positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}>
        <Popover.Trigger asChild>
            <IconButton size="sm" variant="outline" color="black">
                <LuEllipsisVertical />
            </IconButton>
        </Popover.Trigger>
        <Portal>
            <Popover.Positioner>
                <Popover.Content w="125px">
                    <Popover.CloseTrigger asChild>
                        <Popover.Body>
                            <Stack color="black">
                                <ProductShare product={product}/>
                                <IconButton onClick={() => removeProduct(product._id)} variant="outline" color="red" borderColor="transparent" >Delete<LuTrash2/></IconButton>
                            </Stack>
                        </Popover.Body>
                    </Popover.CloseTrigger>
                </Popover.Content>
            </Popover.Positioner>
        </Portal>
    </Popover.Root>
  );
};

export default ProductOptions;