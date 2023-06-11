import { Box, Heading, SimpleGrid, Tag, Image, Center, GridItem, Input, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";



const StoreItem = ({title, price, image}) => {
    return(
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src={image} w={24}/>
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                {title}
            </Heading>
            <Tag mt={4}>${price}</Tag>
        </Box>
    );
};

function Store({}){
    const [storeItem, setStoreItem] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get("https://fakestoreapi.com/products").then(({data}) => {
          setLoading(false);
          setStoreItem(data);
          setFilteredItems(data);
        });
      }, []);

    return (  
        <Box>
            <Header title="LOJINHA DO SEU ZÉ"/>
            {loading ? (
                <Center mt={6}>
                    <Spinner /> 
                </Center> ) : (
                <Box p={2}>
                    <Input
                        onChange={(e) => {
                            let f = storeItem.filter(item => item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
                            );
                            setFilteredItems(f);
                        }}
                    placeholder="Search" 
                    mt={4}
                    />
                    <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
                        {filteredItems.map((item) => {
                            return (
                                <GridItem>
                                    <Link to={{
                                        pathname: `/product/${item.id}`,
                                        state: item
                                    }}
                                    >
                                        <StoreItem {...item}/>
                                    </Link>
                                </GridItem>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            )}
        </Box>
    );
}

export default Store;