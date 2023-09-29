import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { LiaCalendarSolid } from "react-icons/lia"
const Bookings = () => {
    const NavLink = [
        { name: "Bookings", to: "/booking" },
        { name: "Donations", to: "/vendor-management-donations" },

        { name: "Event", to: "" },
    ]

    const BookingCard = ({ status }: any) => {
        return (
            <Flex gap='2' bg='#E1EEF3' p='5' mx='10' >
                <Image
                    w='250px'
                    h='120px'
                    src='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
                <Flex justifyContent={'space-between'} w='full'>
                    <Flex flexDirection={'column'} gap='3'>
                        <Text fontWeight={'500'} fontSize={'20'} color='#00B0F3'>Full- Stack web development</Text>
                        <Text>Service II: React Development</Text>
                        <Flex fontSize={'sm'} fontWeight={'600'}>
                            <Text color='#4D4D4D'>Client:</Text>
                            <Text color='#201E1F'>Adedoyin Dolapo</Text>
                        </Flex>
                        <Flex alignItems={'center'} gap='2'>
                            <LiaCalendarSolid size='20' />
                            <Text fontSize={'xs'}>August 12, 2023</Text>
                        </Flex>
                    </Flex>
                    {status == "Active" || status === "Paid" || status === "Cancelled" || status === "Completed" ?


                        <Flex flexDirection={'column'} alignItems={'center'} gap='1'>
                            <Button>View Details</Button>
                            <Text color='#00B0F3'>{status}</Text>
                        </Flex>
                        :

                        <Flex flexDirection={'column'} alignItems={'center'} gap='1'>
                            <Flex gap='3'>
                                <Button bg='#00BF00'>Accept</Button>
                                <Button bg='#F20E0E'>Reject</Button>
                            </Flex>
                            <Text color='#00B0F3'>Message Client</Text>
                        </Flex>
                    }
                </Flex>
            </Flex>
        )
    }
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
                <Flex flexDirection={'column'} gap='5' bg='white' py='10' h='auto' w='7xl'>
                    <Text px='10' py='5' fontWeight={'600'} textTransform={'uppercase'}>Bookings</Text>
                    <BookingCard  status='Active'/>
                    <BookingCard />
                    <BookingCard />
                    <BookingCard />


                </Flex>
            </Flex>
        </Box>
    )
}

export default Bookings;