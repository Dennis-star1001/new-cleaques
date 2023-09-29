import { Box, Button, Flex, Image, Progress, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ViewVendorDonation = () => {
    const NavLink = [
        { name: "Bookings", to: "/" },
        { name: "Donations", to: "/vendor-management-donations" },

        { name: "Event", to: "" },
    ]
    return (
        <Box bg='#E1EEF3' p='20'>
            <Flex gap='10'>
                <Flex textAlign={'left'} flexDirection={'column'} w='sm' h='80' bg='white'>
                    <Text px='5' py='5' fontWeight={'600'}>Vendor Management</Text>
                    {NavLink.map((item, index,) => (
                        <Text px='5' py='2' color='black' bg='none' textAlign={'left'} _hover={{ bg: '#F1F5F9', color: 'black' }}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </Text>
                    ))}
                </Flex>
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w='5xl'>
                    <Text px='10' py='5' fontWeight={'600'}>Donations</Text>
                    <Flex gap='2' bg='#E1EEF3' p='5' mx='10' >
                        <Image
                            w='250px'
                            h='120px'
                            src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        />
                        <Flex gap='40'>
                            <Flex flexDirection={'column'} gap='3'>
                                <Text fontWeight={'600'} color='#00B0F3'>Help My life  abeg</Text>
                               
                                <Progress value={20} size='xs' colorScheme='#00B0F3' />
                                <Text fontSize={'xs'}>$500 of 7,000$ Donated</Text>
                            </Flex>
                            <Flex gap='3' alignItems={'center'} textAlign={'center'}>
                                <Button>Edit Donation</Button>
                              <AiTwotoneDelete size='24'  color='red'/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box px='10'>
                        <Text fontSize={'sm'}>Lorem ipsum dolor sit amet consectetur. Nullam ut quam nunc vel. Eget feugiat faucibus habitasse sollicitudin viverra convallis pellentesque. Erat felis pulvinar quam tellus et cursus. Enim platea praesent ullamcorper ullamcorper diam morbi eget et. Habitant laoreet eget habitasse commodo. Sed fermentum in urna feugiat luctus lacus sagittis id. Convallis diam arcu quis volutpat laoreet lorem proin enim. Eu orci in aliquam mauris.</Text>
                    </Box>

                    <TableContainer px='10' fontSize='sm'>
                        <Table variant='simple'>
                          
                            <Thead border='none' >
                                <Tr bg='var(--neutral-gray-50, #F8FAFC)'>
                                    <Th>Name of donors </Th>
                                    <Th>Amount</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Chinwe Adaeze</Td>
                                    <Td>$2,454</Td>
                                    <Td>Wednesday 12th, May 2032 | 6:00pm</Td>

                                </Tr>
                                <Tr>
                                    <Td>Chinwe Adaeze</Td>
                                    <Td>$2,454</Td>
                                    <Td>Wednesday 12th, May 2032 | 6:00pm</Td>

                                </Tr>
                                <Tr>
                                    <Td>Chinwe Adaeze</Td>
                                    <Td>$2,454</Td>
                                    <Td>Wednesday 12th, May 2032 | 6:00pm</Td>

                                </Tr>
                                <Tr>
                                    <Td>Chinwe Adaeze</Td>
                                    <Td>$2,454</Td>
                                    <Td>Wednesday 12th, May 2032 | 6:00pm</Td>

                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ViewVendorDonation;