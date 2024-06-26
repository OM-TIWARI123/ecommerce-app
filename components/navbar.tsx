import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
const Navbar=()=>{
    return(
        <div className='border-b'>
           <div className='flex h-16 items-center px-4'>
            <div>
                This will be store switch bar
            </div>
            <div>
                <MainNav className='mx-6'/>
            </div>
            <div className='ml-auto flex items-center space-x-4'>
                <UserButton afterSignoutUrl='/'/>
            </div>
           </div>
        </div>
    )
}

export default Navbar;